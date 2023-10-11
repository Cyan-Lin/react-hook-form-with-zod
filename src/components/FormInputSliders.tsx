import { Control, Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import { SxProps } from "@mui/material";
import { FormValuesSchema } from "@/models/formValidation";

type Props = {
  name: keyof FormValuesSchema;
  control: Control<FormValuesSchema>;
  label: string;
  sx: SxProps;
};

const FormInputSlider = (props: Props) => {
  const { name, control, label, sx } = props;

  return (
    <FormControl sx={sx}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Slider
            value={Number(value)}
            onChange={onChange}
            valueLabelDisplay="auto"
          />
        )}
      />
    </FormControl>
  );
};

export default FormInputSlider;
