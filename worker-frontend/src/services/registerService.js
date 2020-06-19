import axios from "axios";

async function registerUser(user) {
  console.log(user.roll);
  if (user.roll === "worker") {
    const url = "http://localhost:3001/api/hiring/workers/";
    const response = await axios.post(url, {
      userName: user.username,
      password: user.password,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: {
        city: user.city,
        area: user.area,
        pin: user.pin,
      },
    });
    return response;
  } else {
    const url = "http://localhost:3001/api/hiring/customers/";
    const response = await axios.post(url, {
      userName: user.username,
      password: user.password,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: {
        city: user.city,
        area: user.area,
        pin: user.pin,
      },
    });
    return response;
  }
}

export default registerUser;
