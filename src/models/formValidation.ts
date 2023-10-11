import { z } from "zod";

const ONLY_LETTERS_DIGITS_SYMBOLS =
  /^[A-Za-z0-9.\s'!"#$%&()*+,°\-.\/:;<=>?@[\]^_`{|}~\\` ’]+$/; //"限英文、符號、數字"
const ONLY_ENGLISH_SPACE = /^[a-zA-Z\s]+$/; // 限英文、空格
const ONLY_DIGITS_PLUS_SIGN = /^[\d+]+$/;
const ONLY_DIGITS = /^[\d]+$/;

// creating a schema for strings
const formValuesSchema = z.object({
  addressType: z.string().min(1, "Required"),
  country: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required").max(15),
  firstName: z.string().min(2).max(30),
  companyName: z.string().min(2),
  email: z.string().email().min(5),
  postalCode: z
    .string()
    .min(3)
    .max(10)
    .regex(new RegExp(ONLY_LETTERS_DIGITS_SYMBOLS), "限英文、符號、數字、空格")
    .optional()
    .or(z.literal("")),
  province: z
    .string()
    .regex(new RegExp(ONLY_ENGLISH_SPACE), "限英文、空格")
    .optional()
    .or(z.literal("")),
  city: z
    .string()
    .min(1, "Required")
    .regex(new RegExp(ONLY_LETTERS_DIGITS_SYMBOLS), "限英文、符號、數字、空格"),
  address: z
    .string()
    .min(1, "Required")
    .regex(new RegExp(ONLY_LETTERS_DIGITS_SYMBOLS), "限英文、符號、數字、空格"),
  countryCode: z
    .string()
    .min(1, "Required")
    .regex(new RegExp(ONLY_DIGITS_PLUS_SIGN), "限數字、+"),
  areaCode: z
    .string()
    .regex(new RegExp(ONLY_DIGITS_PLUS_SIGN), "限數字、+")
    .optional()
    .or(z.literal("")),
  phoneNumber: z
    .string()
    .min(1, "Required")
    .regex(new RegExp(ONLY_DIGITS), "限數字"),
  contactNumber: z
    .string()
    .regex(new RegExp(ONLY_DIGITS_PLUS_SIGN), "限數字、+")
    .optional()
    .or(z.literal("")),
  extension: z.string().regex(new RegExp(ONLY_DIGITS), "限數字").optional(),
  // exampleDate: z.instanceof(dayjs as unknown as typeof Dayjs),
  exampleDate: z.coerce.date(),
  favoriteFruitList: z.array(z.string()), // array of strings
  volumn: z.number(),
});

type FormValuesSchema = z.infer<typeof formValuesSchema>;

export default formValuesSchema;

export type { FormValuesSchema };
