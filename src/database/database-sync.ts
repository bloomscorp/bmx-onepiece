import TenantModel from '../tenant/orm/tenant-orm';
import UserRoleModel from '../tenant/orm/user-role-orm';

export const syncDatabase = async (): Promise<void> => {
	try {
		await TenantModel.sync();
		await UserRoleModel.sync();
	} catch (e: any) {
		console.error(e.message);
	}
};
