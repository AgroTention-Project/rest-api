class HttpError extends Error {
  constructor(
    public message: string,
    public code: number
  ) {
    super(message);
  }

  getResponse() {
    return {
      success: false,
      error: this.message,
    };
  }

  getCode() {
    return this.code;
  }
}

export default HttpError;
