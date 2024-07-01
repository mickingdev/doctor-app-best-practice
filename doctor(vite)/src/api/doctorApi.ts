import axios from "axios";

const DOC_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/doctor`;

const getDoctors = async (params) => {
  return await axios.get(
    `${DOC_URL}`,{params}
  );
};

export { getDoctors };
