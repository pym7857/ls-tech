module.exports = (sequelize, DataTypes) => {
    const Workspace = sequelize.define('Workspace', { // 테이블명은 workspaces
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
  
    Workspace.associate = (db) => {
        db.Workspace.belongsTo(db.User, { as: "Owner", foreignKey: "OwnerId" }); // 테이블에 UserId 컬럼이 생겨요
    };
  
    return Workspace;
};