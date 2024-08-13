import { unAuthGetEntityHandler } from "bmx-behemoth-ts";
import { NVerseAuthorityResolver } from "bmx-nverse-ts";
import { Request, Response, NextFunction } from "express";
import alfredLog from "../../alfred/log-book";
import { LocalGatekeeper } from "../../nverse/local-gatekeeper";
import { TenantSanitizer } from "../../nverse/sanitizer/tenant-sanitizer";
import { NewTenantValidator } from "../../nverse/validator/new-tenant-validator";
import { TenantDaoController } from "../../tenant/dao/tenant-dao-controller";
import { USER_ROLE } from "../../tenant/enum/user-role";
import { Tenant } from "../../tenant/interface/tenant";
import { UserRole } from "../../tenant/interface/user-role";

export class AuthHandler {

	private _newTenantValidator = new NewTenantValidator();
	private _tenantSanitizer = new TenantSanitizer();
	private _gateKeeper = new LocalGatekeeper();
	private _nverseAuthorityResolver = new NVerseAuthorityResolver<Tenant, USER_ROLE, UserRole>();
	private _tenantDaoController = new TenantDaoController();

	public loginHandler = (req: Request, res: Response, next: NextFunction): void => {
		unAuthGetEntityHandler(
			req,
			res,
			'loginHandler'
		).then(data => {
            
            alfredLog.info(
                'loginHandler',
                JSON.stringify(req.body) || null,
                req.originalUrl,
                (req as any)?.tenant?.id || null
            );

            next();

        }).catch(e => {
            alfredLog.error(
                e.message,
                e.stack,
                req.originalUrl,
                (req as any)?.tenant?.id || null
            )
			res.status(401).send({
				success: false,
				message: e.message
			});
		});
	}
}