export class RaintreeMessage {
    
    public static readonly NO_ACTION: string = '';
    public static readonly FETCH_FAILURE: string = 'Failed to fetch results.';
    public static readonly AUTHORIZATION_DENIED: string = 'Authorization has been denied.';
    public static readonly INSERT_SUCCESS: string = 'The request is successfully added to database.';
    public static readonly UPDATE_SUCCESS: string = 'The request is successfully updated to database.';
    public static readonly DELETE_SUCCESS: string = 'The request is successfully deleted from database.';
    public static readonly INSERT_FAILURE: string = 'The request failed to add to database.';
    public static readonly NOT_UNIQUE: string = 'The request is not unique.';
    public static readonly UPDATE_FAILURE: string = 'The request failed to update the database.';
    public static readonly PARTIAL_UPDATE_FAILURE: string = 'Some instances failed to update the database while others were successful.';
    public static readonly INCORRECT_INFORMATION: string = 'The request contains incorrect information.';
    public static readonly DELETE_FAILURE: string = 'The request failed to delete from database.';
    public static readonly SERVER_FAILURE: string = 'Server failed while trying to process your request.';
    
    // --------------- Error messages -----------------
    public static readonly GENERIC_EXCEPTION: string = 'An exception occurred while trying to authorize a request.';
    public static readonly NO_CREDENTIALS: string = 'Some credentials were missing with the authentication request.';
    public static readonly NO_BEARER_IN_HEADER: string = 'The bearer token was not found with the authentication request.';
    public static readonly NULL_USERNAME: string = 'The username could not be fetched from the authentication request.';
    public static readonly NON_NULL_SECURITY_CONTEXT_AUTHENTICATION: string = 'The authentication in the security context was non-null.';
    public static readonly INVALID_JWT_TOKEN: string = 'The JWT token provided was invalid.';
    public static readonly INVALID_PASSWORD: string = 'The password provided was invalid.';
}
