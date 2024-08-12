import { Tenant } from '../interface/tenant';
import { NVerseEmailEncoder, NverseTenantDaoController } from 'bmx-nverse-ts';
import TenantModel from '../orm/tenant-orm';
import { Model } from 'sequelize';
import UserRoleModel from '../orm/user-role-orm';

export class TenantDaoController extends NverseTenantDaoController<Tenant> {
	private _emailEncoder: NVerseEmailEncoder = new NVerseEmailEncoder(
		process.env.NVERSE_AES_KEY || '',
		process.env.NVERSE_AES_IV || ''
	);

	public retrieveUserByEncryptedEmail = async (
		email: string
	): Promise<Tenant> => {
		try {
			const existTenant: Model<any> | null = await TenantModel.findOne({
				where: {
					email: email,
				},
				include: [
					{
						model: UserRoleModel,
						as: 'roles', //this should be the same as the name of the association
					},
				],
			});

			if (!existTenant) {
				return {} as Tenant;
			}
            
			return existTenant.toJSON() as Tenant;
		} catch (e: any) {
			console.error(e.message, e.stack);
			return {} as Tenant;
		}
	};

	public retrieveUserByEmail = async (email: string): Promise<Tenant> => {
		try {
            const existTenant: Model<any> | null = await TenantModel.findOne({
				where: {
					email: this._emailEncoder.encode(email),
				},
				include: [
					{
						model: UserRoleModel,
						as: 'roles', //this should be the same as the name of the association
					},
				],
			});

			if (!existTenant) {
				return {} as Tenant;
			}
            
			return existTenant.toJSON() as Tenant;
		} catch (e: any) {
			console.error(e.message, e.stack);
			return {} as Tenant;
		}
	};
}
