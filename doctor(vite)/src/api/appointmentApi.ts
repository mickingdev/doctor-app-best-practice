import axios from "axios";

const APPOINTMENT_URL = "/appointment";

const createAppointment = (data) => {
  axios.post(`${APPOINTMENT_URL}/create`, data).then((res) => res);
};

export { createAppointment };
