import { Controller, Control } from "react-hook-form";
import MuiTextField from "./MuiTextField";
import { FormValuesSchema } from "@/models/formValidation";
import { SxProps } from "@mui/system/styleFunctionSx";

type Props = {
  name: keyof FormValuesSchema;
  control: Control<FormValuesSchema>;
  label: string;
  fullWidth: boolean;
  required?: boolean;
  error?: boolean;
  sx: SxProps;
  placeholder?: string;
  helperText?: string;
};

const FormInputText = (props: Props) => {
  const { name, control, label, ...textFieldProps } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, onBlur },
        // fieldState: { error },
        // formState,
      }) => (
        <MuiTextField
          label={label}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          {...textFieldProps}
        />
      )}
    />
  );
};

export default FormInputText;
