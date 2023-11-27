import CircleIcon from "@mui/icons-material/Circle";
import { Typography } from "@mui/material";

interface Props {
  text?: string;
}

export const NotStartedBadge = ({ text = "Not started" }: Props) => (
  <Typography
    sx={{
      display: "inline",
      fontSize: "16px",
      paddingLeft: "7px",
      paddingRight: "9px",
      background: "#e3e2e0",
      color: "#32302c",
      borderRadius: "20px",
    }}
  >
    <CircleIcon
      sx={{
        fontSize: "12px",
        color: "#91918e",
        marginRight: "3px",
      }}
    />
    {text}
  </Typography>
);

export const InProgressBadge = ({ text = "In progress" }: Props) => (
  <Typography
    sx={{
      display: "inline",
      fontSize: "16px",
      paddingLeft: "7px",
      paddingRight: "9px",
      background: "#d7e4ee",
      color: "#32302c",
      borderRadius: "20px",
    }}
  >
    <CircleIcon
      sx={{
        fontSize: "12px",
        color: "#6c96bb",
        marginRight: "3px",
      }}
    />
    {text}
  </Typography>
);

export const DoneBadge = ({ text = "Done" }: Props) => (
  <Typography
    sx={{
      display: "inline",
      paddingLeft: "7px",
      paddingRight: "9px",
      background: "#DFECDC",
      color: "#233729",
      borderRadius: "20px",
    }}
  >
    <CircleIcon
      sx={{
        fontSize: "12px",
        color: "#77997E",
        marginRight: "3px",
      }}
    />
    {text}
  </Typography>
);
