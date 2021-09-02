module.exports = (sequelize, DataTypes) => {
    const Channel2 = sequelize.define('Channel2', { // 테이블명은 channel2s
        name: {
            type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, // 필수
            unique: true, // 고유한 값
        },
        url: {
            type: DataTypes.STRING(30),
            allowNull: false, // 필수
            unique: true, // 고유한 값
        },
    }, {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글이 저장돼요
    });
  
    Channel2.associate = (db) => {
        db.Channel2.belongsTo(db.Channel1, { as: "OwnerChannel", foreignKey: "OwnerChannelId" }); // 테이블에 WorkspaceId 컬럼이 생겨요
    };
  
    return Channel2;
};