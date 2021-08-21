const passport = require('passport');
const db = require('../models');
const local = require('./local'); // 전략 

module.exports = () => {
  // 서버쪽에 [{ id: 3, cookie: 'asdfgh' }] <-- 얘만 저장을 한다 (=사용자 정보가 너무 많으니까)
  passport.serializeUser((user, done) => { // req.login을 하면 serializeUser실행됨 
    return done(null, user.id);
  });

  // 위 id만 가지고는 아무것도 못함. --> 위 해당 id로 user정보를 되찾는 과정 
  passport.deserializeUser(async (id, done) => { 
    try {
      const user = await db.User.findOne({
        where: { id },
        include: [{
          model: db.Post,
          as: 'Posts',
          attributes: ['id'],
        }],
      });
      return done(null, user); // 얘는 req.user에 저장된다 !
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });

  local(); // 전략을 연결 
};

// 프론트에서 서버로는 cookie만 보내요(asdfgh)
// 서버가 쿠키파서, 익스프레스 세션으로 쿠키 검사 후 id: 3 발견
// id: 3이 deserializeUser에 들어감
// req.user로 사용자 정보가 들어감

// (프론트-->서버) 요청 보낼때마다 deserializeUser가 실행됨(db 요청 1번씩 실행)
// --> db요청이 제일 비싼작업이어서 문제됨 --> 실무에서는 deserializeUser 결과물 캐싱 (=노드 교과서)