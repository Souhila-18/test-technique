import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
export const Ticket = ({ date, intitule, description, children }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="div">
          {intitule}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </CardContent>
      {children}
    </Card>
  );
};
