import Typography from "@mui/material/Typography";

type Props = {
  textContent: string;
  textVariant: "subtitle2";
  textType: "error";
};

const MuiTypography = (props: Props) => {
  const { textContent, textVariant, textType } = props;

  return (
    <Typography variant={textVariant} color={textType} gutterBottom>
      {textContent}
    </Typography>
  );
};

export default MuiTypography;
