import alfredLog from '../alfred/log-book';
import {RaintreeActionCode} from './raintree-action-code';
import {RaintreeMessage} from './raintree-message';
import {RaintreeResponse} from './raintree-response';

const response = (result: RaintreeResponse, res: any): void => {
    let status: number = RaintreeActionCode.httpStatus(result.actionCode || 200);
    delete result.actionCode;
    if (result.jwt) {
        res.status(status).send({jwt: result.jwt});
    } else {
        res.status(status).send(result);
    }
};

const Raintree = (result: RaintreeResponse, req: any, res: any, next: any): void => {
    if (result) {
        if (result.actionCode || result.actionCode === 0) {
            alfredLog.info(
                result.message,
                null,
                req.originalUrl,
                req?.tenant?.id || null
            );
            response(result, res);
        } else {
            if (result.message) {
                alfredLog.error(
                    result.message,
                    result?.stack,
                    req.originalUrl,
                    req?.tenant?.id || null
                );
                res.status(500).send({
                    success: false,
                    message: result.message
                });
            } else {
                alfredLog.error(
                    RaintreeMessage.SERVER_FAILURE,
                    result?.stack,
                    req.originalUrl,
                    req?.tenant?.id || null
                );
                res.status(500).send({
                    success: false,
                    message: RaintreeMessage.SERVER_FAILURE
                });
            }
            next();
        }
    } else {
        next();
    }
};

export {Raintree};
