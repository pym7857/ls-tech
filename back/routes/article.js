const express = require('express');
const db = require('../models');

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
  
module.exports = router;