import { SxProps } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";

// type Props = {
//   fullWidth?: boolean;
//   sx: SxProps;
//   label: string;
//   required?: boolean;
//   placeHolder?: string;
//   isError?: boolean;
//   helperText?: string;
// };

interface CustomTextFieldProps {
  sx: SxProps;
  fullWidth: boolean;
}

const MuiTextField: React.FC<CustomTextFieldProps & TextFieldProps> = ({
  sx,
  ...props
}) => {
  return <TextField variant="outlined" sx={sx} {...props} />;
};

export default MuiTextField;
