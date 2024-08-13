import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/database-config';
import TenantModel from './tenant-orm';
import { USER_ROLE } from '../enum/user-role';

const UserRoleModel = sequelize.define(
	'userRole',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		role: {
			type: DataTypes.ENUM(...Object.values(USER_ROLE)),
			allowNull: false,
		},
		tenantId: {
			type: DataTypes.INTEGER,
			references: {
				model: TenantModel,
				key: 'id',
			},
			allowNull: false,
		},
	},
	{
        underscored: true,
		timestamps: true,
		freezeTableName: true,
		tableName: 'user_role',
        modelName: 'userRole',
		getterMethods: {
			_id() {
				return this.getDataValue('id');
			},
		},
	}
);

TenantModel.hasMany(UserRoleModel, {
    as: 'roles',
	foreignKey: { name: 'tenantId', allowNull: false},
});
UserRoleModel.belongsTo(TenantModel, {
    as: 'tenant',
	foreignKey: { name: 'tenantId', allowNull: false },
});

export default UserRoleModel;
