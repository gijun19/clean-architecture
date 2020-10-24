export abstract class BaseController<HandlerRequest, HandlerResult> {
  protected abstract execute(
    payload: HandlerRequest
  ): Promise<void | HandlerResult>;
}
