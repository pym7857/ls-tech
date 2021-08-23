const express = require('express');
const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

/* 게시글 하나 가져오기 라우터 */
router.get('/:id', async (req, res, next) => { // GET /api/post/1
  try {
    const article = await db.Post.findOne({ 
        where: {
            id: req.params.id,
        },
        include: [{ // 작성자 정보도 함께 가져오기 
            model: db.User,
            attributes: ['id', 'nickname'], // 비밀번호 가져오면 안되기 때문에 필터링 
        }, {
            model: db.User,
            through: 'Like',
            as: 'Likers',
            attributes: ['id'],
        }],
    });
    res.json(article);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

/* 게시글 작성 라우터 */
router.post('/', isLoggedIn, async (req, res, next) => { // POST /api/post
  try {
    if (!req.user) {
      return res.status(401).send('로그인이 필요합니다.');
    }
    const hashtags = req.body.content.match(/(#[^\s]+)/g); 
    const newPost = await db.Post.create({
      title: req.body.title,
      subTitle: req.body.subTitle,
      content: req.body.content, // ex) '제로초 파이팅 #구독 #좋아요 눌러주세요'
      UserId: req.user.id, // 누가 썼는지 알아야됨 
    });
    if (hashtags) {
      const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({
        where: { name: tag.split('<')[0].slice(1).toLowerCase() },
      })));
      await newPost.addHashtags(result.map(r => r[0])); // add, set, remove, get : 시퀄라이즈에서 제공 
    }
    // const User = await newPost.getUser();
    // newPost.User = User;
    // res.json(newPost);
    const fullPost = await db.Post.findOne({
      where: { id: newPost.id },
      include: [{
        model: db.User,
      }],
    });
    res.json(fullPost);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

/* 좋아요 라우터 */
router.post('/:id/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id }});
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    await post.addLiker(req.user.id); // add, remove는 시퀄라이즈에서 제공 
    res.json({ userId: req.user.id });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

/* 좋아요 취소 라우터 */
router.delete('/:id/like', isLoggedIn, async (req, res, next) => {
  try {
    const post = await db.Post.findOne({ where: { id: req.params.id }});
    if (!post) {
      return res.status(404).send('포스트가 존재하지 않습니다.');
    }
    await post.removeLiker(req.user.id); // add, remove는 시퀄라이즈에서 제공 
    res.json({ userId: req.user.id });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;