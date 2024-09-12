import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import BookingModal from "../bookingmodal";
const BookingCard = ({ image, description, title , setOpen }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        paddingTop: 1,
        borderRadius: 2,
        border: "1px solid rgba(15, 179, 175, 0.4)",
        boxShadow: "0px 0px 13px rgba(0, 0, 0, 0.09)",
      }}
    >
      <CardMedia sx={{ height: 200, borderRadius: 5 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography mb={2} variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Divider variant="middle" />
        <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
          <BookingModal setOpen={setOpen} solutionTitle={title} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
