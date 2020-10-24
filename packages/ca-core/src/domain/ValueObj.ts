import { shallowEqualObjects } from "../util/shallowEqual";

interface ValueObjProps {
  [index: string]: any;
}

/**
 * @desc ValueObj's are objects that we determine their
 * equality through their structrual property.
 */

export abstract class ValueObj<T extends ValueObjProps> {
  public readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props);
  }

  public equals(vo?: ValueObj<T>): boolean {
    if (vo === null || vo === undefined) {
      return false;
    }
    if (vo.props === undefined) {
      return false;
    }
    return shallowEqualObjects(this.props, vo.props);
  }
}
