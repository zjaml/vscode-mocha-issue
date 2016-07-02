import ExtendableError from './ExtendableError'

export class EmailAlreadyTakenError extends ExtendableError {
  constructor(m) {
    super(m);
  }
}
