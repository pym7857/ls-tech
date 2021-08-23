const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /api/hashtags
  try {
    const hashtags = await db.Hashtag.findAll({
      attributes: ['name'],
      order: [['createdAt', 'DESC']],
    });
    res.json(hashtags);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;