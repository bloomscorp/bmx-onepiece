import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/database-config';
import { LOG_TYPE } from '../enum/log-type';
import TenantModel from '../../tenant/orm/tenant-orm';

const LogDataModel = sequelize.define(
	'logData',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		logType: {
			type: DataTypes.ENUM(...Object.values(LOG_TYPE)),
			allowNull: false,
		},
		message: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dataDump: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		createdBy: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: TenantModel,
				key: 'id',
			},
		},
	},
	{
        underscored: true,
		timestamps: true,
		freezeTableName: true,
        tableName: 'log_data',
        modelName: 'logData',
	}
);

TenantModel.hasMany(LogDataModel, {
	as: 'logs',
	foreignKey: { name: 'createdBy', allowNull: true },
});
LogDataModel.belongsTo(TenantModel, {
	as: 'tenant',
	foreignKey: { name: 'createdBy', allowNull: true },
});

export default LogDataModel;
