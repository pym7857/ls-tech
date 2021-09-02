const express = require('express');
const db = require('../models');

const router = express.Router();

/* 모든 워크스페이스 가져오기 라우터 */
router.get('/', async (req, res, next) => { 
    try {
        const workspaces = await db.Workspace.findAll({ 
            include: [{ // 소유자 정보도 함께 가져오기 
                model: db.User,
                attributes: ['id', 'nickname'], // 비밀번호 가져오면 안되기 때문에 필터링 
                as: 'Owner',
            }],
            //order: [['createdAt', 'ASC']], // DESC는 내림차순, ASC는 오름차순
        });
        //console.log('ddd', workspaces);
        res.json(workspaces);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

/* 해당 워크스페이스의 모든 채널1 가져오기 라우터 */
router.get('/:url', async (req, res, next) => { 
    try {
        //console.log('>>>> req.params', req.params);
        const ws = await db.Workspace.findOne({
            where: { url: req.params.url }
        });
        console.log('>>>> ws', ws);
        const channel1s = await db.Channel1.findAll({ 
            where: { OwnerWorkspaceId: ws.id },
            include: [{ // workspace 정보도 함께 가져오기 
                model: db.Workspace,
                attributes: ['id', 'name', 'url'], 
                as: 'OwnerWorkspace',
            }],
            //order: [['createdAt', 'ASC']], // DESC는 내림차순, ASC는 오름차순
        });
        console.log('>>>> channel1s', channel1s);
        res.json(channel1s);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

/* 해당 채널1의 모든 채널2 가져오기 라우터 */
router.get('/channel2/:id', async (req, res, next) => { 
    try {
        const channel1 = await db.Channel1.findOne({
            where: { id: req.params.id }
        });
        const channel2s = await db.Channel2.findAll({ 
            where: { OwnerChannelId: channel1.id },
            include: [{ // workspace 정보도 함께 가져오기 
                model: db.Channel1,
                attributes: ['id', 'name', 'url'], 
                as: 'OwnerChannel',
            }],
            //order: [['createdAt', 'ASC']], // DESC는 내림차순, ASC는 오름차순
        });
        res.json(channel2s);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;