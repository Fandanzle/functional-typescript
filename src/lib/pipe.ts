import { Function } from './function'

export function pipe<
  F1 extends Function<any, any>,
  FN extends Array<Function<any, any>>,
  R extends
    FN extends [] ? F1 :
    FN extends [Function<infer A, any>] ? (a: A) => ReturnType<F1> :
    FN extends [Function<infer A, any>, any] ? (a: A) => ReturnType<F1> :
    FN extends [Function<infer A, any>, any, any] ? (a: A) => ReturnType<F1> :
    FN extends [Function<infer A, any>, any, any, any] ? (a: A) => ReturnType<F1> :
    FN extends [Function<infer A, any>, any, any, any, any] ? (a: A) => ReturnType<F1> :
    FN extends [Function<infer A, any>, any, any, any, any, any] ? (a: A) => ReturnType<F1> :
    FN extends [Function<infer A, any>, any, any, any, any, any, any] ? (a: A) => ReturnType<F1> :
    Function<any, ReturnType<F1>>
> (func: F1, ...funcs: FN): R {
  const allFuncs = [func, ...funcs]
  return function composed (raw: any) {
    return allFuncs.reduce((memo, func) => func(memo), raw)
  } as R
}

// Traditional
export const pipe1 = <P, A>(...fns: any[]) =>
  (payload: P): A => {
    const reduced = fns.reduce(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
    return reduced
  }

export const pipe2 = <P, A, B>(...fns: any[]) =>
  (payload: P): A | B => {
    return fns.reduce(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
  }

export const pipe3 = <P, A, B, C>(...fns: any[]) =>
  (payload: P): A | B | C => {
    return fns.reduce(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
  }

export const pipe4 = <P, A, B, C, D>(...fns: any[]) =>
  (payload: P): A | B | C | D => {
    return fns.reduce(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
  }

export const pipe5 = <P, A, B, C, D>(...fns: any[]) =>
  (payload: P): A | B | C | D => {
    return fns.reduce(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
  }

export const pipe6 = <P, A, B, C, D, E>(...fns: any[]) =>
  (payload: P): A | B | C | D | E => {
    return fns.reduce(
      (accumalator, currentFunction) => currentFunction(accumalator),
      payload
    )
  }
