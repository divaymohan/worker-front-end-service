import axios from "axios";

async function loginUser(username, password, roll) {
  const url = "http://localhost:3001/api/hiring/auth/";
  const response = await axios.post(url, {
    userName: username,
    password: password,
    roll: roll,
  });
  return response;
}

export default loginUser;
