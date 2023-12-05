import Sequelize from 'sequelize';
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});
const Document = sequelize.define('document', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(48),
        allowNull: false
    },
    type: {
        type: Sequelize.ENUM('PDF', 'TXT', 'XDOC'),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

sequelize.sync();
export default Document; 