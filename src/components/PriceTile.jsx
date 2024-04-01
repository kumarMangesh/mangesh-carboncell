import * as React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function PriceTile({ currencyData }) {
  return (
    <Box textAlign="left">
    <Card sx={{ minWidth: 120, maxWidth: 200, color: "green" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {currencyData.code}
        </Typography>

        <Typography sx={{ mb: 1.5 }} variant="caption" color="text.secondary">
          {currencyData.description}
        </Typography>
        <Typography variant="h6">
          {currencyData.rate} {currencyData.code}
        </Typography>
      </CardContent>
    </Card>
    </Box>
  );
}
