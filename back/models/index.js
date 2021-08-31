const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Channel = require('./channel')(sequelize, Sequelize);
db.Workspace = require('./workspace')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) { // associate쓰려면 위 3줄과 같은걸 먼저 코딩해줘야됨 (=join문을 자바스크립트로 컨트롤)
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;