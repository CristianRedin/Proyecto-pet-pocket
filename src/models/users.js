const cliente=(sequelize,type)=>{
    return sequelize.define('Users', {
        idGerente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullname: type.STRING,
        name: type.STRING,
        email: type.STRING(99),
        password: type.STRING,
        
        crearGerente:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updateGerente: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false
    })
}
module.exports = cliente