const express = require('express');
const db = require('../models');

const router = express.Router();

/* 모든 워크스페이스 가져오기 라우터 */
router.get('/', async (req, res, next) => { // GET /workspaces/SIT
    try {
        const workspaces = await db.Workspace.findAll({ 
            include: [{ // 소유자 정보도 함께 가져오기 
                model: db.User,
                attributes: ['id', 'nickname'], // 비밀번호 가져오면 안되기 때문에 필터링 
                as: 'Owner',
            }],
            order: [['createdAt', 'ASC']], // DESC는 내림차순, ASC는 오름차순
        });
        //console.log('ddd', workspaces);
        res.json(workspaces);
    } catch (e) {
        console.error(e);
        next(e);
    }
});
  
module.exports = router;