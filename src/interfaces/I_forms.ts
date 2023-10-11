import { Dayjs } from "dayjs";

interface FormValuesD {
  addressType: string;
  country: string;
  lastName: string;
  firstName: string;
  companyName: string;
  email: string;
  postalCode: string;
  province: string;
  city: string;
  address: string;
  countryCode: string;
  areaCode: string;
  phoneNumber: string;
  contactNumber: string;
  extension: string;
  exampleDate: Dayjs;
  favoriteFruitList: string[];
  volumn: number;
}

interface Option {
  label: string;
  value: string;
}

interface Dropdown {
  name: string;
  value: string;
}

interface CheckboxItem {
  label: string;
  value: string;
}

interface SliderValue {
  value: number;
}

export type { FormValuesD, Option, Dropdown, CheckboxItem, SliderValue };
