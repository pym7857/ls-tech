const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');

const router = express.Router();

router.get('/', (req, res) => { // /api/user/
  if (!req.user) { // deserializeUser가 req.user생성했었음 
    return res.status(401).send('로그인이 필요합니다.');
  }
  const user = Object.assign({}, req.user.toJSON()); // db에서 꺼내온 객체여서, toJSON() 해주어야 에러가 안남 
  delete user.password; // 패스워드 지우고 보냄 
  return res.json(user);
});
router.post('/', async (req, res, next) => { // POST /api/user 회원가입
  try {
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12); // salt는 10~13 사이로
    const newUser = await db.User.create({
      nickname: req.body.nickname,
      userId: req.body.userId,
      password: hashedPassword,
    });
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
    // 에러 처리를 여기서
    return next(e);
  }
});

router.post('/logout', (req, res) => { // /api/user/logout
  req.logout();
  req.session.destroy();
  res.send('logout 성공');
});

router.post('/login', (req, res, next) => { // POST /api/user/login
  passport.authenticate('local', (err, user, info) => { // passport local전략 
                                                        // done(err, user, info) : 서버에러 / 사용자 정보 / 로직상의 에러
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      try {
        if (loginErr) {
          return next(loginErr);
        }
        const fullUser = await db.User.findOne({
          where: { id: user.id },
          include: [{
            model: db.Post,
            as: 'Posts',
            attributes: ['id'],
          }],
          attributes: ['id', 'nickname', 'userId'], // 보낼 정보 필터링 (=비밀번호 빼고 보내기 위함) 
        });
        console.log(fullUser);
        return res.json(fullUser); // 프론트로 로그인정보 보내줌 
      } catch (e) {
        next(e);
      }
    });
  })(req, res, next);
});

router.get('/:id/posts', (req, res) => {

});

module.exports = router;