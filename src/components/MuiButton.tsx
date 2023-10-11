import Button, { ButtonProps } from "@mui/material/Button";

// type Props = {
//   type?: "outlined" | "contained";
//   text: string;
//   color?:
//     | "inherit"
//     | "primary"
//     | "secondary"
//     | "success"
//     | "error"
//     | "info"
//     | "warning"
//     | "dadago";
//   onClick?: any;
// };

interface CustomButtonProps extends ButtonProps {
  text: string;
}

const MuiButton: React.FC<CustomButtonProps> = ({ text, ...props }) => {
  return <Button {...props}>{text}</Button>;
};

export default MuiButton;
