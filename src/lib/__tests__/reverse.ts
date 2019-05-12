import { reverse } from '../reverse'
import { pipe } from '../pipe'

test('Reverse a singular array', () => {
  const arrayPayload: number[] = [0,1,2,3,4,5,6,7,8,9]
  expect(reverse(arrayPayload)).toEqual([9,8,7,6,5,4,3,2,1,0])
})

test('Reverse a numerical array via composition', () => {
  const arrayPayload: number[] = [0,1,2,3,4,5,6,7,8,9]
  const reversedPaylod = pipe(
    reverse
  )(arrayPayload)
  expect(reversedPaylod).toEqual([9,8,7,6,5,4,3,2,1,0])
})

test('Reverse a numerical array via composition, two way', () => {
  const arrayPayload: number[] = [0,1,2,3,4,5,6,7,8,9]
  const reversedPaylod = pipe(
    reverse,
    reverse
  )(arrayPayload)
  expect(reversedPaylod).toEqual(arrayPayload)
})

test('Reverse a string array via composition', () => {
  const arrayPayload: string[] = ['a', 'b', 'c', 'd']
  const reversedPaylod = pipe(
    reverse
  )(arrayPayload)
  expect(reversedPaylod).toEqual(['d', 'c', 'b', 'a'])
})

test('Reverse a string array via composition', () => {
  const arrayPayload: string[] = ['a', 'b', 'c', 'd']
  const reversedPaylod = pipe(
    reverse
  )(arrayPayload)
  expect(reversedPaylod).toEqual(arrayPayload)
})
