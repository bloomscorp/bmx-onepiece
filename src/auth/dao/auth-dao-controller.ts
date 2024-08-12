import { NVerseEmailEncoder, NverseJwtService, NversePasswordEncoder } from "bmx-nverse-ts";
import { AuthorityTokenResponse } from "../../restful/authority-token-response";
import { ProfileResponse } from "../../restful/profile-response";
import { TenantDaoController } from "../../tenant/dao/tenant-dao-controller";
import { RaintreeResponse, RaintreeActionCode } from "bmx-raintree-ts";
import { Tenant } from "../../tenant/interface/tenant";
import { AuthRequest } from "../interface/auth-request";

export class AuthDAOController {

	private _response: ProfileResponse = new ProfileResponse();
	private _authResponse: AuthorityTokenResponse = new AuthorityTokenResponse();
	private _tenantDaoController: TenantDaoController = new TenantDaoController();
	private _jwtService: NverseJwtService = new NverseJwtService();

    private _emailEncoder: NVerseEmailEncoder =
		new NVerseEmailEncoder(process.env.NVERSE_AES_KEY || '', process.env.NVERSE_AES_IV || '');
	private _passwordEncoder: NversePasswordEncoder =
		new NversePasswordEncoder(process.env.NVERSE_PASSWORD_KEY || '');


    public login = async (authRequest: AuthRequest): Promise<RaintreeResponse> => {

        if (!authRequest.username || !authRequest.password) {
            return this._response
                .prepareActionResponse(RaintreeActionCode.INCORRECT_INFORMATION);
        }

        const tenant: Tenant = await this._tenantDaoController
            .retrieveUserByEmail(authRequest.username);
        
        if (!tenant || Object.keys(tenant).length === 0) {
            return this._response
                .prepareActionResponse(RaintreeActionCode.INCORRECT_INFORMATION);
        }

        if (!this._passwordEncoder.matches(authRequest.password, tenant.password)) {
            return this._response
                .prepareActionResponse(RaintreeActionCode.INCORRECT_INFORMATION);
        }

        return {
            actionCode: RaintreeActionCode.FETCH_SUCCESS,
            success: true,
            message: RaintreeActionCode.message(RaintreeActionCode.FETCH_SUCCESS),
            jwt: this._jwtService.generateToken(tenant.email),
        };
    }

}