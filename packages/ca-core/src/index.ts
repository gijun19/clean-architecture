import { UseCase } from "./@types/UseCase";
import { Entity, UniqueEntityId, ValueObj, WatchedList } from "./domain";
import { BaseRepo } from "./infra/BaseRepo";
import { BaseMapper } from "./infra/BaseMapper";
import { BaseController } from "./interfaces/BaseController";
import * as AppErrors from "./logic/AppError";
import { Result } from "./logic/Result";
import { UseCaseError } from "./logic/UseCaseError";
import { shallowEqualArrays, shallowEqualObjects } from "./util/shallowEqual";

/**
 * Export `@types`, `logic`, `util`
 */
export {
  UseCase,
  Result,
  UseCaseError,
  shallowEqualObjects,
  shallowEqualArrays,
};

export { AppErrors };

/**
 * Export `Domain`, `Infra`, `Interfaces`
 */
const Domain = {
  Entity,
  UniqueEntityId,
  ValueObj,
  WatchedList,
};

const Infra = {
  BaseRepo,
  BaseMapper,
};

const Interfaces = {
  BaseController,
};

export { Domain, Infra, Interfaces };
