import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import { useHistory } from "react-router-dom";
import { Ticket } from "../components/ticket";
import { useTickets } from "../useTickets";
export const TicketsPage = () => {
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
            </Stack>
            {tickets.map(({ id, intitule, description, date }) => (
              <Ticket intitule={intitule} description={description} date={date}>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() =>
                      history.push({
                        pathname: "/do",
                        state: { id, intitule, description, date },
                      })
                    }
                  >
                    Faire
                  </Button>
                </CardActions>
              </Ticket>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
