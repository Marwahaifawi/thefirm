import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import ButtonApp from "../../shared/button";
import BookingStepper from "../bookingstepper";
import { UserContext } from "../../shared/authcontext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const BookingModal = ({ solutionTitle, setOpen }) => {
  const [opens, setOpens] = React.useState(false);
  const handleOpen = () => {
    if (user) {
      setOpens(true);
    } else {
      alert("Please Sign in");
    }
  };
  const handleClose = () => setOpens(false);
  const { user } = useContext(UserContext); // Access the user context

  return (
    <div>
      <ButtonApp onClick={handleOpen} variant={"contained"}>
        Book Now
      </ButtonApp>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={opens}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={opens}>
          <Stack p={4} sx={style} width={"50%"} height={"75%"}>
            <Typography
              color={"primary"}
              textAlign={"center"}
              id="transition-modal-title"
              variant="h5"
            >
              Book An Appointment for {solutionTitle}
            </Typography>
            <BookingStepper
              onClose={handleClose}
              solutionTitle={solutionTitle}
              setOpen={setOpen}
              user={user}
            />
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
