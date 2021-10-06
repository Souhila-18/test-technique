import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useHistory, useLocation } from "react-router-dom";
import { useTickets } from "../useTickets";
import { Ticket } from "../components/ticket";
export const DoPage = () => {
  const history = useHistory();
  const {
    state: { id, intitule, description, date },
  } = useLocation();
  const [, , updateTicket] = useTickets();
  const handleSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      updateTicket({
        id,
        remarques: data.get("remarques"),
        done: true,
      });
      history.push("/");
    },
    [history, id, updateTicket]
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
        <Stack spacing={2} component="form" onSubmit={handleSubmit} noValidate>
          <Typography component="h1" variant="h5">
            Ticket à envoyer
          </Typography>
          <Ticket intitule={intitule} description={description} date={date} />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Remarques"
            id="remarques"
            name="remarques"
            autoFocus
            multiline
            minRows={3}
          />
          <label htmlFor="contained-button-file">
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
            />
            <Button
              fullWidth
              variant="outlined"
              component="span"
              startIcon={<AttachFileIcon />}
              sx={{ padding: 1 }}
            >
              Joindre un document
            </Button>
          </label>
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
              Envoyer
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};
