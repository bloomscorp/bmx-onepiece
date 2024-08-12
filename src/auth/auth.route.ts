import { Router } from 'express';
import { RequestMapper } from '../request-mapper';
import { AuthController } from './controller/auth-controller';
import { RequestHandler } from 'express';

const router: Router = Router();

const authController: AuthController = new AuthController();

router
	.post(
        RequestMapper.LOGIN, 
        authController.login as RequestHandler
    )
	.get(
		RequestMapper.GET_AUTHORITY_TOKEN,
		authController.authResolver as RequestHandler
	)
	.post(
        RequestMapper.REGISTER, 
        authController.register as RequestHandler
    )
	.get(
        RequestMapper.PROFILE, 
        authController.getProfile as RequestHandler
    );

export default router;
