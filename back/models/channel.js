module.exports = (sequelize, DataTypes) => {
    const Channel = sequelize.define('Channel', { // 테이블명은 channels
        name1: {
            type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, // 필수
            unique: true, // 고유한 값
        },
        name2: {
            type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, // 필수
            unique: true, // 고유한 값
        },
    }, {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글이 저장돼요
    });
  
    Channel.associate = (db) => {
        db.Channel.belongsTo(db.Workspace, { as: "OwnerWorkspace", foreignKey: "OwnerWorkspaceId" }); // 테이블에 WorkspaceId 컬럼이 생겨요
    };
  
    return Channel;
};