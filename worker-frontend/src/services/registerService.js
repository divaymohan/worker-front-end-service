import axios from "axios";

async function registerUser(user) {
  if (user.roll == "worker") {
    const url = "http://localhost:3001/api/hiring/workers/";
    const response = await axios.post(url, user);
    return response;
  } else {
    const url = "http://localhost:3001/api/hiring/customers/";
    const response = await axios.post(url, user);
    return response;
  }
}

export default registerUser;
