const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /api/posts
  try {
    const posts = await db.Post.findAll({ 
      include: [{ // 작성자도 함께 가져오기 
        model: db.User,
        attributes: ['id', 'nickname'], // 비밀번호 가져오면 안되기 때문에 필터링 
      }, {
        model: db.User,
        through: 'Like',
        as: 'Likers',
        attributes: ['id'],
      }],
      order: [['createdAt', 'DESC']], // DESC는 내림차순, ASC는 오름차순
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;