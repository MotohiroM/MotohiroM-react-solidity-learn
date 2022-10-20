/**
 * HTTP Status Code
 */
export const HTTP_STATUS_CODE = {
  OK: 200,
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  MOVED_TEMPORARILY: 302,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  REQUEST_TIMEOUT: 408,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
} as const;

/**
 * Error Message
 */
export const ERROR_MESSAGE = {
  METAMASK_DONT_INSTALL: 'Plese MetaMask Install.',
} as const;

export const ERROR_DISCRIPTION = {
  METAMASK: 'metamask',
} as const;
