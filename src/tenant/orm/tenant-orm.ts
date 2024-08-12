import { DataTypes } from 'sequelize';
import { sequelize } from '../../database/database-config';
import { NVerseEmailEncoder } from 'bmx-nverse-ts';
import { GENDER } from '../enum/gender';

const _emailEncoder: NVerseEmailEncoder = new NVerseEmailEncoder(
	process.env.NVERSE_AES_KEY || '',
	process.env.NVERSE_AES_IV || ''
);

const TenantModel = sequelize.define(
	'tenant',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				isEmail: true,
			},
		},
		decryptedEmail: {
			type: DataTypes.VIRTUAL,
			allowNull: false,
			get() {
				return _emailEncoder.decode(this.getDataValue('email'));
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		isActive: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
		isDeleted: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		isSuspended: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		Uid: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		contactNumber: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		contactNumberVerified: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		emailVerified: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		profileImageUrl: {
			type: DataTypes.STRING,
		},
		gender: {
			type: DataTypes.ENUM(...Object.values(GENDER)),
			defaultValue: GENDER.UNDEFINED,
		},
	},
	{
        underscored: true,
		timestamps: true,
		freezeTableName: true,
		tableName: 'tenant',
        modelName: 'tenant',
		getterMethods: {
			_id() {
				return this.getDataValue('id');
			},
		},
		indexes: [
			{
				fields: ['name'],
				type: 'FULLTEXT',
			},
		],
	}
);

export default TenantModel;
