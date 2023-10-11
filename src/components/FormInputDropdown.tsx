import { Controller, Control } from "react-hook-form";

import { Dropdown } from "@/interfaces/I_forms";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SxProps } from "@mui/system/styleFunctionSx";
import { FormValuesSchema } from "@/models/formValidation";

type Props = {
  name: keyof FormValuesSchema;
  label: string;
  control: Control<FormValuesSchema>;
  sx: SxProps;
  dropdownList: Dropdown[];
  required?: boolean;
  error: boolean;
};

const FormInputDropdown = (props: Props) => {
  const { label, name, control, sx, dropdownList, required, ...dropdownProps } =
    props;

  const renderDropdownItems = () => {
    return dropdownList.map((item) => (
      <MenuItem key={item.value} value={item.value}>
        {item.name}
      </MenuItem>
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, onBlur } }) => (
        <FormControl sx={sx} fullWidth required={required}>
          <InputLabel>{label}</InputLabel>
          <Select
            value={value}
            label={label}
            onChange={onChange}
            onClose={onBlur}
            {...dropdownProps}
          >
            {renderDropdownItems()}
          </Select>
        </FormControl>
      )}
    />
  );
};

export default FormInputDropdown;
