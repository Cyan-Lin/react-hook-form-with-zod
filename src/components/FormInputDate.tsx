import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Control, Controller } from "react-hook-form";
import { FormValuesSchema } from "@/models/formValidation";
import { SxProps } from "@mui/material";
import FormControl from "@mui/material/FormControl";

type Props = {
  name: keyof FormValuesSchema;
  control: Control<FormValuesSchema>;
  label: string;
  sx: SxProps;
  error: boolean;
};

const FormInputDate = (props: Props) => {
  const { name, control, sx, ...datePickerProps } = props;

  return (
    <FormControl sx={sx}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              onChange={(value) => onChange(value?.toLocaleString())}
              value={value}
              {...datePickerProps}
              format="YYYY-MM-DD"
            />
          </LocalizationProvider>
        )}
      />
    </FormControl>
  );
};

export default FormInputDate;
