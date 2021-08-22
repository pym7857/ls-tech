const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/:tag', async (req, res, next) => {
  try {
    const posts = await db.Post.findAll({
      include: [{
        model: db.Hashtag,
        where: { name: decodeURIComponent(req.params.tag) }, // 한글, 특수문자등은 주소를 통해 서버로 갈때 URIComponent로 바뀌어버림 
                                                              // --> 그걸 서버쪽에서 정상적으로 처리할려면 decodeURIComponent를 적용해주어야함 
      }, {
        model: db.User, // 게시글 작성자
        attributes: ['id', 'nickname'], // 비밀번호 빼고 
      }, {
        model: db.User,
        through: 'Like',
        as: 'Likers',
        attributes: ['id'],
      }],
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;