import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useHistory } from "react-router-dom";
import { useTickets } from "../useTickets";
import { Ticket } from "../components/ticket";
export const OwnerPage = () => {
  const [filter, setFilter] = React.useState("all");
  const history = useHistory();
  const [tickets] = useTickets();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            paddingBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <Stack spacing={2}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography component="h1" variant="h5">
                Liste des tickets
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  onClick={() => history.push("/owner/create")}
                >
                  Nouveau
                </Button>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Filtre
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    label="Age"
                    onChange={(event) => setFilter(event.target.value)}
                    value={filter}
                  >
                    <MenuItem value={"all"}>Tous</MenuItem>
                    <MenuItem value={"done"}>Fait</MenuItem>
                    <MenuItem value={"waiting"}>À faire</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
            {tickets
              .filter(
                ({ done }) =>
                  filter === "all" ||
                  (filter === "done" && done) ||
                  (filter === "waiting" && !done)
              )
              .map(({ intitule, description, date }) => (
                <Ticket
                  intitule={intitule}
                  description={description}
                  date={date}
                />
              ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
