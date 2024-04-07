import Validator from "@/shared/utils/validator";
import { FormState, FormStateErrors } from "../model/types";

export default (formState: FormState) => {
  const newErrors: FormStateErrors = {} as FormStateErrors;

  if(!Validator.emailValidator(formState.email)) {
    newErrors.email = 'Почта введена некорректно';
  }
  if (!Validator.nameValidator(formState.firstName)) {
    newErrors.firstName = 'Имя должно содержать только буквы';
  }
  if (!Validator.nameValidator(formState.lastName)) {
    newErrors.lastName = 'Фамилия должна содержать только буквы';
  }
  if (!Validator.passwordValidator(formState.password)) {
    newErrors.password = 'Пароль должен содержать больше 8 символов и хотя бы одну цифру';
  }
  if (!Validator.dateValidator(formState.birthday)) {
    newErrors.birthday = 'Некорректная дата рождения';
  }
  
  if (Object.keys(newErrors).length !== 0) {
    return newErrors;
  } else {
    return null;
  }
};
