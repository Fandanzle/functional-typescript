import { Function } from './function'

export function compose<
  FN extends Array<Function<any, any>>,
  R extends
    FN extends [] ? FF :
    FN extends [Function<infer A, any>] ? (a: A) => ReturnType<FF> :
    FN extends [any, Function<infer A, any>] ? (a: A) => ReturnType<FF> :
    FN extends [any, any, Function<infer A, any>] ? (a: A) => ReturnType<FF> :
    FN extends [any, any, any, Function<infer A, any>] ? (a: A) => ReturnType<FF> :
    FN extends [any, any, any, any, Function<infer A, any>] ? (a: A) => ReturnType<FF> :
    FN extends [any, any, any, any, any, Function<infer A, any>] ? (a: A) => ReturnType<FF> :
    FN extends [any, any, any, any, any, any, Function<infer A, any>] ? (a: A) => ReturnType<FF> :
    Function<any, ReturnType<FF>>,
    FF extends Function<any, any>,
> (func: FF, ...funcs: FN): R {
  const allFuncs = [func, ...funcs]
  return function composed (raw: any) {
    return allFuncs.reduceRight((memo, func) => func(memo), raw)
  } as R
}

// Traditional
export const compose1 = <P, A>(...fns: any[]) =>
  (payload: P): A => {
    const reduced = fns.reduceRight(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
    return reduced
  }

export const compose2 = <P, A, B>(...fns: any[]) =>
  (payload: P): A | B => {
    return fns.reduceRight(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
  }

export const compose3 = <P, A, B, C>(...fns: any[]) =>
  (payload: P): A | B | C => {
    return fns.reduceRight(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
  }

export const compose4 = <P, A, B, C, D>(...fns: any[]) =>
  (payload: P): A | B | C | D => {
    return fns.reduceRight(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
  }

export const compose5 = <P, A, B, C, D>(...fns: any[]) =>
  (payload: P): A | B | C | D => {
    return fns.reduceRight(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
  }

export const compose6 = <P, A, B, C, D, E>(...fns: any[]) =>
  (payload: P): A | B | C | D | E => {
    return fns.reduceRight(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
  }
