import { CheckboxItem } from "@/interfaces/I_forms";
import { SxProps } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import { useEffect, useState } from "react";
import { Controller, Control, UseFormSetValue } from "react-hook-form";
import { FormValuesSchema } from "@/models/formValidation";

type Props = {
  name: keyof FormValuesSchema;
  control: Control<FormValuesSchema>;
  label: string;
  checkboxList: CheckboxItem[];
  setValue: UseFormSetValue<FormValuesSchema>;
  sx: SxProps;
  required?: boolean;
};

const FormInputCheckbox = (props: Props) => {
  const { name, control, label, checkboxList, setValue, sx, required } = props;

  const [selectedItems, setSelectedItems] = useState<CheckboxItem["value"][]>(
    []
  );

  // select的時候，修改selectedItems
  const handleSelect = (value: string) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remnant = selectedItems.filter((item) => item !== value);
      setSelectedItems(remnant);
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  // 用useEffect，selectedItems有變動時，修改form value
  useEffect(() => {
    setValue(name, selectedItems);
  }, [selectedItems]);

  const renderCheckbox = () => {
    return checkboxList.map((checkboxItem) => (
      <FormControlLabel
        key={checkboxItem.value}
        control={
          <Controller
            name={name}
            control={control}
            render={() => (
              <Checkbox onChange={() => handleSelect(checkboxItem.value)} />
            )}
          />
        }
        label={checkboxItem.label}
      />
    ));
  };

  return (
    <FormControl sx={sx} required={required}>
      <FormLabel>{label}</FormLabel>
      <FormGroup row>{renderCheckbox()}</FormGroup>
    </FormControl>
  );
};

export default FormInputCheckbox;
