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
  
module.exports = router;