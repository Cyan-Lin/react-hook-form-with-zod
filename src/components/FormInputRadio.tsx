import { Controller, Control } from "react-hook-form";
import { Option } from "@/interfaces/I_forms";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { SxProps } from "@mui/system/styleFunctionSx";
import { FormValuesSchema } from "@/models/formValidation";

type Props = {
  name: keyof FormValuesSchema;
  control: Control<FormValuesSchema>;
  label: string;
  sx: SxProps;
  options: Option[];
  required?: boolean;
};

const FormInputRadio = (props: Props) => {
  const { name, control, label, sx, options, required } = props;

  const renderRadioOptions = () => {
    return options.map((option) => (
      <FormControlLabel
        key={option.value}
        label={option.label}
        value={option.value}
        control={<Radio />}
      />
    ));
  };

  return (
    <FormControl sx={sx} fullWidth required={required}>
      <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup row onChange={onChange} value={value}>
            {renderRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default FormInputRadio;
