class CustomError extends Error {
  public statusCode: number

  constructor(statusCode: number, message: string) {
    super(message) // 'Error' breaks prototype chain here
    this.statusCode = statusCode
    Object.setPrototypeOf(this, new.target.prototype) // restore prototype chain
  }
}

const createError = (statusCode: number, message: string) => {
  const err = new CustomError(statusCode, message)
  return err
}

export const UNSUPPORTED_METHOD_ERROR = new CustomError(
  405,
  "Unsupported method"
)

export default createError
