const express = require('express');
const db = require('../models');
const { isLoggedIn } = require('./middleware');

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

/* 워크스페이스 생성 라우터 */
router.post('/', isLoggedIn, async (req, res, next) => { // POST /workspace
    try {
      const newWorkspace = await db.Workspace.create({
        name: req.body.newWorkspace,
        url: req.body.newUrl,
        OwnerId: req.user.id, // 누가 썼는지 알아야됨 
      });
      const createdWorkspace = await db.Workspace.findOne({
        where: { id: newWorkspace.id },
        include: [{
          model: db.User,
          attributes: ['id', 'nickname'], // 비밀번호 가져오면 안되기 때문에 필터링 
          as: 'Owner',
        }],
      });
      res.json(createdWorkspace);
    } catch (e) {
      console.error(e);
      next(e);
    }
});

/* 채널1 생성 라우터 */
router.post('/ch1', isLoggedIn, async (req, res, next) => { // POST /workspace/ch1
  try {
    const ws = await db.Workspace.findOne({
      where: { url: req.body.currentUrl }
    });
    const newChannel1 = await db.Channel1.create({
      name: req.body.newMainPage,
      url: req.body.newMainPageUrl,
      OwnerWorkspaceId: ws.id,
    });
    const createdChannel1 = await db.Channel1.findOne({
      where: { id: newChannel1.id },
      include: [{
        model: db.Workspace,
        attributes: ['id', 'name', 'url'], // 비밀번호 가져오면 안되기 때문에 필터링 
        as: 'OwnerWorkspace',
      }],
    });
    res.json(createdChannel1);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

/* 채널2 생성 라우터 */
router.post('/ch2', isLoggedIn, async (req, res, next) => { // POST /workspace/ch2
  try {
    const ch1 = await db.Channel1.findOne({
      where: { id: req.body.mainPageId } // TODO: 여기 버그날듯 ? 
    });
    const newChannel2 = await db.Channel2.create({
      name: req.body.newSubPage,
      url: req.body.newSubPageUrl,
      OwnerChannelId: ch1.id,
    });
    const createdChannel2 = await db.Channel2.findOne({
      where: { id: newChannel2.id },
      include: [{
        model: db.Channel1,
        attributes: ['id', 'name', 'url'], // 비밀번호 가져오면 안되기 때문에 필터링 
        as: 'OwnerChannel',
      }],
    });
    res.json(createdChannel2);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
  
module.exports = router;