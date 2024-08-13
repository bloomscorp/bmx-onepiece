import {RaintreeMessage} from "./raintree-message";

export class RaintreeActionCode {

	public static NO_ACTION: number = 0;

	public static INSERT_SUCCESS: number = 1;
	public static UPDATE_SUCCESS: number = 2;
	public static DELETE_SUCCESS: number = 3;
	public static FETCH_SUCCESS: number = 4;

	public static INSERT_FAILURE: number = -1;
	public static UPDATE_FAILURE: number = -2;
	public static DELETE_FAILURE: number = -3;
	public static FETCH_FAILURE: number = -4;

	public static NOT_UNIQUE: number = -5;
	public static INCORRECT_INFORMATION: number = -6;
	public static UNAUTHORIZED_ACCESS: number = -7;
	public static PARTIAL_UPDATE_FAILURE: number = -8;

	public static message(code: number): string {
		switch (code) {
			case RaintreeActionCode.INSERT_SUCCESS: return RaintreeMessage.INSERT_SUCCESS;
			case RaintreeActionCode.UPDATE_SUCCESS: return RaintreeMessage.UPDATE_SUCCESS;
			case RaintreeActionCode.DELETE_SUCCESS: return RaintreeMessage.DELETE_SUCCESS;
			case RaintreeActionCode.FETCH_SUCCESS: return RaintreeMessage.NO_ACTION;

			case RaintreeActionCode.INSERT_FAILURE: return RaintreeMessage.INSERT_FAILURE;
			case RaintreeActionCode.UPDATE_FAILURE: return RaintreeMessage.UPDATE_FAILURE;
			case RaintreeActionCode.DELETE_FAILURE: return RaintreeMessage.DELETE_FAILURE;
			case RaintreeActionCode.FETCH_FAILURE: return RaintreeMessage.FETCH_FAILURE;

			case RaintreeActionCode.NOT_UNIQUE: return RaintreeMessage.NOT_UNIQUE;
			case RaintreeActionCode.INCORRECT_INFORMATION: return RaintreeMessage.INCORRECT_INFORMATION;
			case RaintreeActionCode.UNAUTHORIZED_ACCESS: return RaintreeMessage.AUTHORIZATION_DENIED;
			case RaintreeActionCode.PARTIAL_UPDATE_FAILURE: return RaintreeMessage.PARTIAL_UPDATE_FAILURE;

			default: return RaintreeMessage.NO_ACTION;
		}
	}

	public static httpStatus(code: number): number {
		switch (code) {
			case RaintreeActionCode.INSERT_SUCCESS: return 200;
			case RaintreeActionCode.UPDATE_SUCCESS: return 200;
			case RaintreeActionCode.FETCH_SUCCESS: return 200;
			case RaintreeActionCode.DELETE_SUCCESS: return 200;

			case RaintreeActionCode.INSERT_FAILURE: return 400;
			case RaintreeActionCode.UPDATE_FAILURE: return 400;
			case RaintreeActionCode.DELETE_FAILURE: return 400;
			case RaintreeActionCode.FETCH_FAILURE: return 404;

			case RaintreeActionCode.NOT_UNIQUE: return 409;
			case RaintreeActionCode.INCORRECT_INFORMATION: return 400;
			case RaintreeActionCode.UNAUTHORIZED_ACCESS: return 401;
			case RaintreeActionCode.PARTIAL_UPDATE_FAILURE: return 400;
			default: return 500;
		}
	}
}
