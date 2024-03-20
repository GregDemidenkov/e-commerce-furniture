import moment from "moment";

export default class Validator {

  static emailValidator = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static nameValidator = (name: string) => {
    const regex = /^[A-Za-zА-Яа-я]+$/;
    return regex.test(name) && name?.length <= 30;
  }

  static passwordValidator = (password: string) => {
    const regexDigit = /\d/;
    
    return regexDigit.test(password) && password?.length > 8;
  }

  static dateValidator = (date: string) => {
    const dateString = moment(date, 'DD.MM.YYYY', true).toDate();

    const currentDate = moment();
    if (moment(dateString).isAfter(currentDate) || moment(dateString).year() < 1900) {

      return false;
    }

    return moment(dateString).isValid();
  }
}