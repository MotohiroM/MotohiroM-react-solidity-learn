import { HTTP_STATUS_CODE, ERROR_DISCRIPTION } from '../constants/errorConstants';

/**
 * error type
 */
type errorObjectType = {
    code: number,
    description: string,
    message: string,
};

/**
 * 共通エラーオブジェクト生成
 * @param {number} errorCode errorCode
 * @param {string} errorDescription errorDescription
 * @param {unkown} errorObject 既存のerror object
 * @returns {errorObjectType} error Object
 */
const commonErrorObject = (errorCode: number, errorDescription: string, errorObject: unknown): errorObjectType => {
  // error objectからerror Messageを取得
  const errorMessage = JSON.stringify(JSON.parse(JSON.stringify(errorObject as object)).message);
  const error: errorObjectType = {
    code: errorCode,
    description: errorDescription,
    message: errorMessage,
  };

  return error;
};

/**
 * metamask error
 * @param {unknown} errorObject error
 */
export const MetamaskException = (errorObject: unknown): void => {
  const error = commonErrorObject(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, ERROR_DISCRIPTION.METAMASK, errorObject);
  console.log(error);
};
