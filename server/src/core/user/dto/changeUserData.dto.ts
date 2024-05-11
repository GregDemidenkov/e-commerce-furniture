export class ChangeUserDataDto {
  readonly id: string
  readonly firstName: string
  readonly lastName: string
  readonly fatherName: string | null
  readonly birthday: string
  readonly gender: 'male' | 'female' | null
  readonly email: string
}