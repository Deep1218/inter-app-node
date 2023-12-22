class ResponseBuilder {
  private status!: number;
  private message?: string;
  private error!: string;
  private data: any;

  static badRequest(msg: string) {
    const rb = new ResponseBuilder();
    rb.status = 400;
    rb.error = "Failed";
    rb.message = msg;

    return rb;
  }
}
