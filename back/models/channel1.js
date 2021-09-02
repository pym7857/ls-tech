module.exports = (sequelize, DataTypes) => {
    const Channel1 = sequelize.define('Channel1', { // 테이블명은 channel1s
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
  
    Channel1.associate = (db) => {
        db.Channel1.belongsTo(db.Workspace, { as: "OwnerWorkspace", foreignKey: "OwnerWorkspaceId" }); // 테이블에 WorkspaceId 컬럼이 생겨요
        db.Channel1.hasMany(db.Channel2, { as: "OwnedChannel", foreignKey: "OwnerChannelId" });
    };
  
    return Channel1;
};