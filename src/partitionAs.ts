import iterablePartitionAs from '@extra-iterable/partition-as';
import type {mapFn} from './_types';

/**
 * Segregates values by similarity.
 * @param x an array
 * @param fn map function (v, i, x)
 * @param ths this argument
 * @returns Map {key => values}
 */
function partitionAs<T, U=T>(x: Iterable<T>, fn: mapFn<T, T|U>=null, ths: object=null): Map<T|U, T[]> {
  return iterablePartitionAs(x, fn, ths);
}
export default partitionAs;
