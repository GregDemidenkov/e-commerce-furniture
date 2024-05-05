import { options } from "../model/sortOptions"

export default (value: string) => {
  let optionElement = options[0];

  options.forEach(opt => {
    if (opt.value === value) optionElement = opt;
  })

  return optionElement;
}