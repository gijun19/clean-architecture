export abstract class BaseHandler<HandlerRequest, HandlerResult> {
  protected abstract execute(
    payload: HandlerRequest
  ): Promise<void | HandlerResult>;
}
