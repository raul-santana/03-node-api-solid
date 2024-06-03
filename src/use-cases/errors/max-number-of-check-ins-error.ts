export class MaxNumberOfCheckInsError extends Error {
  constructor() {
    super('The number of check-ins peaked on this date.')
  }
}
