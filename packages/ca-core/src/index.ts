import { UseCase } from "./@types/UseCase";
import {
  Entity,
  Identifier,
  UniqueEntityId,
  ValueObj,
  WatchedList,
} from "./domain";
import { BaseRepo } from "./infra/BaseRepo";
import { Mapper } from "./infra/Mapper";
import { BaseController } from "./interfaces/BaseController";
import { AppError } from "./logic/AppError";
import { Result } from "./logic/Result";
import { UseCaseError } from "./logic/UseCaseError";
import { shallowEqualArrays, shallowEqualObjects } from "./util/shallowEqual";

/**
 * Export `@types`, `logic`, `util`
 */
export {
  UseCase,
  AppError,
  Result,
  UseCaseError,
  shallowEqualObjects,
  shallowEqualArrays,
};

/**
 * Export `Domain`, `Infra`, `Interfaces`
 */
const Domain = {
  Entity,
  Identifier,
  UniqueEntityId,
  ValueObj,
  WatchedList,
};

const Infra = {
  BaseRepo,
  Mapper,
};

const Interfaces = {
  BaseController,
};

export { Domain, Infra, Interfaces };
