import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import FormInputText from "./FormInputText";
import MuiButton from "./MuiButton";

import FormInputRadio from "./FormInputRadio";
import FormInputDropdown from "./FormInputDropdown";
import FormInputDate from "./FormInputDate";
import FormInputCheckbox from "./FormInputCheckbox";
import FormInputSlider from "./FormInputSliders";
import formValuesSchema, { FormValuesSchema } from "@/models/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import MuiTypography from "./MuiTypography";

const extensionOptions = [
  {
    label: "公司使用",
    value: "for business use only",
  },
  {
    label: "個人使用",
    value: "for personal use only",
  },
];

const countryList = [
  {
    name: "台灣",
    value: "TW",
  },
  {
    name: "中國",
    value: "CN",
  },
  {
    name: "美國",
    value: "US",
  },
];

const fruitList = [
  {
    label: "草莓",
    value: "strawberries",
  },
  {
    label: "蘋果",
    value: "apples",
  },
  {
    label: "香蕉",
    value: "bananas",
  },
  {
    label: "火龍果",
    value: "dragon fruits",
  },
];

const defaultFormValues = {
  addressType: "",
  country: "",
  lastName: "",
  firstName: "",
  companyName: "",
  email: "",
  postalCode: "",
  province: "",
  city: "",
  address: "",
  countryCode: "",
  areaCode: "",
  phoneNumber: "",
  contactNumber: "",
  extension: "",
  exampleDate: undefined,
  favoriteFruitList: [],
  volumn: 30,
};

const AddressForm = () => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValuesSchema>({
    mode: "onBlur",
    defaultValues: defaultFormValues,
    resolver: zodResolver(formValuesSchema),
  });

  const onSubmit: SubmitHandler<FormValuesSchema> = (data) => {
    console.log("onSubmit", data);
  };

  const onError: SubmitErrorHandler<FormValuesSchema> = (data) => {
    console.log("onError", data);
  };

  return (
    <div className="">
      <Container maxWidth="sm">
        <Box m={2} pt={3}>
          <FormInputRadio
            name={"addressType"}
            label={"地址類型"}
            options={extensionOptions}
            control={control}
            sx={{ my: 1 }}
            required
          />
          {errors.addressType && errors.addressType.message && (
            <MuiTypography
              textContent={errors.addressType.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputDropdown
            name={"country"}
            label={"國家"}
            control={control}
            sx={{ my: 1 }}
            dropdownList={countryList}
            required
            error={!!errors.country}
          />
          {errors.country && errors.country.message && (
            <MuiTypography
              textContent={errors.country.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            required
            sx={{ my: 1 }}
            name={"lastName"}
            label={"姓"}
            control={control}
            error={!!errors.lastName}
          />
          {errors.lastName && errors.lastName.message && (
            <MuiTypography
              textContent={errors.lastName.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            required
            sx={{ my: 1 }}
            name={"firstName"}
            label={"名"}
            control={control}
            error={!!errors.firstName}
          />
          {errors.firstName && errors.firstName.message && (
            <MuiTypography
              textContent={errors.firstName.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            required
            sx={{ my: 1 }}
            name={"companyName"}
            label={"公司名稱"}
            control={control}
            error={!!errors.companyName}
          />
          {errors.companyName && errors.companyName.message && (
            <MuiTypography
              textContent={errors.companyName.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            required
            sx={{ my: 1 }}
            name={"email"}
            placeholder={"輸入多筆電子信箱時，請用 “ , ” 分隔"}
            label={"電子郵件"}
            control={control}
            error={!!errors.email}
          />
          {errors.email && errors.email.message && (
            <MuiTypography
              textContent={errors.email.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            sx={{ my: 1 }}
            name={"postalCode"}
            label={"郵遞區號"}
            control={control}
            error={!!errors.postalCode}
          />
          {errors.postalCode && errors.postalCode.message && (
            <MuiTypography
              textContent={errors.postalCode.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            sx={{ my: 1 }}
            name={"province"}
            label={"省分"}
            control={control}
            error={!!errors.province}
          />
          {errors.province && errors.province.message && (
            <MuiTypography
              textContent={errors.province.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            required
            sx={{ my: 1 }}
            name={"city"}
            label={"城市"}
            control={control}
            error={!!errors.city}
          />
          {errors.city && errors.city.message && (
            <MuiTypography
              textContent={errors.city.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            required
            sx={{ my: 1 }}
            name={"address"}
            label={"地址"}
            control={control}
            error={!!errors.address}
          />
          {errors.address && errors.address.message && (
            <MuiTypography
              textContent={errors.address.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            required
            sx={{ my: 1 }}
            name={"countryCode"}
            label={"國碼"}
            control={control}
            error={!!errors.countryCode}
          />
          {errors.countryCode && errors.countryCode.message && (
            <MuiTypography
              textContent={errors.countryCode.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            sx={{ my: 1 }}
            name={"areaCode"}
            label={"區碼"}
            control={control}
            error={!!errors.areaCode}
          />
          {errors.areaCode && errors.areaCode.message && (
            <MuiTypography
              textContent={errors.areaCode.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            required
            sx={{ my: 1 }}
            name={"phoneNumber"}
            label={"手機"}
            control={control}
            error={!!errors.phoneNumber}
          />
          {errors.phoneNumber && errors.phoneNumber.message && (
            <MuiTypography
              textContent={errors.phoneNumber.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            sx={{ my: 1 }}
            name={"contactNumber"}
            label={"聯繫電話"}
            control={control}
            error={!!errors.contactNumber}
          />
          {errors.contactNumber && errors.contactNumber.message && (
            <MuiTypography
              textContent={errors.contactNumber.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputText
            fullWidth
            sx={{ my: 1 }}
            name={"extension"}
            label={"分機號碼"}
            control={control}
            error={!!errors.extension}
          />
          {errors.extension && errors.extension.message && (
            <MuiTypography
              textContent={errors.extension.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputDate
            name={"exampleDate"}
            label={"範例日期"}
            control={control}
            sx={{ width: "100%", my: 1 }}
            error={!!errors.exampleDate}
          />
          {errors.exampleDate && errors.exampleDate.message && (
            <MuiTypography
              textContent={errors.exampleDate.message}
              textVariant={"subtitle2"}
              textType={"error"}
            />
          )}

          <FormInputCheckbox
            name={"favoriteFruitList"}
            label={"選擇喜歡的水果種類"}
            control={control}
            checkboxList={fruitList}
            setValue={setValue}
            sx={{ width: "100%", my: 1 }}
            required
          />

          <FormInputSlider
            name={"volumn"}
            label={"調整音量大小"}
            control={control}
            sx={{ width: "100%", my: 1 }}
          />

          <Box
            mt={3}
            display={"flex"}
            justifyContent={"center"}
            width={"100%"}
            gap={3}
          >
            <MuiButton variant={"outlined"} text="返回" color={"dadago"} />
            <MuiButton
              variant={"contained"}
              text="確定"
              color={"dadago"}
              onClick={handleSubmit(onSubmit, onError)}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default AddressForm;
