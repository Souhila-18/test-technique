import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import { useHistory } from "react-router-dom";
import { useTickets } from "../useTickets";
export const CreatePage = () => {
  const history = useHistory();
  const [, createTicket] = useTickets();
  const [date, setDate] = React.useState(null);

  const handleSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      createTicket({
        intitule: data.get("intitule"),
        description: data.get("description"),
        date: data.get("date"),
      });
      history.push("/owner");
    },
    [createTicket, history]
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Typography component="h1" variant="h5">
          Créer un nouveau ticket
        </Typography>
        <Stack spacing={2} component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Intitulé"
            id="intitule"
            name="intitule"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Description"
            id="description"
            name="description"
            autoFocus
            multiline
            minRows={3}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date limite"
              id="date"
              name="date"
              value={date}
              onChange={(value) => setDate(value)}
              renderInput={(params) => <TextField name="date" {...params} />}
            />
          </LocalizationProvider>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              type="cancel"
              variant="text"
              color="error"
              onClick={() => history.goBack()}
            >
              Annuler
            </Button>
            <Button type="submit" variant="contained">
              Enregistrer
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};
