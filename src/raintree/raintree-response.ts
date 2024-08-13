export interface RaintreeResponse {
	success: boolean,
	message: string,
	actionCode?: number
	jwt?: string
	[key: string]: any
}
