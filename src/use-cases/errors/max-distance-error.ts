export class MaxDistanceError extends Error {
  constructor() {
    super('The distance is greater than the maximum distance.')
  }
}
