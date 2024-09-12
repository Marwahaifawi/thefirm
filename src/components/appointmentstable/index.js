import React, { useEffect, useState, useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import api from "../../api/api";
import { UserContext } from "../../shared/authcontext";

const AppointmentsTable = () => {
  const { user } = useContext(UserContext);
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    try {
      const response = await api.get(`/appointments?email=${user.email}`);
      setAppointments(response.data);
    } catch (error) {
      // console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, [user]);

  const handleDelete = (id) => {
    const apiUrl = `http://localhost:3006/appointments/${id}`;
    axios
      .delete(apiUrl)
      .then((response) => {
        // Handle the successful deletion, such as updating the appointments list
        getAppointments();
      })
      .catch((error) => {
        // console.error("Error deleting appointment:", error);
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Solution's Type</TableCell>
            <TableCell>Instructor's Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Additional Information</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment, index) => (
            <TableRow key={index}>
              <TableCell>{appointment.solutionTitle}</TableCell>
              <TableCell>{appointment.instructorName}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.additionalInfo}</TableCell>
              <TableCell>{appointment.phone}</TableCell>
              <TableCell>  
                <IconButton
                  color="error"
                  onClick={() => handleDelete(appointment.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppointmentsTable;
