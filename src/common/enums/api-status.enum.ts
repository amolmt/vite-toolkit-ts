enum ApiStatus {
  NONE,
  LOADING,
  SUCCESS,
  ERROR,
}

enum HttpStatusCode {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

enum HttpHeader {
  CONTENT_TYPE = 'Content-Type',
  AUTHORIZATION = 'Authorization',
  TENANT_ID = 'TenantId',
  ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin',
}

export { ApiStatus, HttpStatusCode, HttpHeader };
