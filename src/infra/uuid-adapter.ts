import { UuidValidator } from "../domain/contracts/uuid-validator.contract";
import { validate } from 'uuid'

export class UuidAdapter implements UuidValidator {
  isValid(value: string): boolean {
    return validate(value)
  }
}