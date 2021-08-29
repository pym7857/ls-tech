const express = require('express');
const db = require('../models');

const router = express.Router();

/* 워크스페이스 한개 가져오기 라우터 */
router.get('/:url', async (req, res, next) => { // GET /workspace/SIT
    try {
        const workspace = await db.Workspace.findOne({ 
            where: {
                url: req.params.url,
            },
            include: [{ // 소유자 정보도 함께 가져오기 
                model: db.User,
                attributes: ['id', 'nickname'], // 비밀번호 가져오면 안되기 때문에 필터링 
                as: 'Owner'
            }],
        });
        res.json(workspace);
    } catch (e) {
        console.error(e);
        next(e);
    }
});
  
module.exports = router;