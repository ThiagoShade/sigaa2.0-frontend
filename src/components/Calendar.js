import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  FormControl,
} from "@mui/material";

function Calendar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Definir calendário
      </Typography>
    </Box>
  );
}

export default Calendar;
