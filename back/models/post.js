module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', { // 테이블명은 posts
      title: {
        type: DataTypes.STRING(50), // 50자 이하 
        allowNull: false,
      },
      subTitle: {
        type: DataTypes.STRING(100), // 100자 이하 
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT, // 매우 긴 글
        allowNull: false,
      },
    }, {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci',
    });
    Post.associate = (db) => {
      db.Post.belongsTo(db.User); // 테이블에 UserId 컬럼이 생겨요 (=belongs To 일때)  --> as 해놓으면 as이름대로 Id 컬럼이 생겨요 
      db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
      db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
    };
    return Post;
  };