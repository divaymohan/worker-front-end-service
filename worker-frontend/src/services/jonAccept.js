import axios from "axios";

async function acceptJob(_id) {
  const url = "http://localhost:3001/api/hiring/job/accept/";
  const result = await axios.put(`${url}${_id}`, {
    isAccepted: true,
  });
  return result;
}
export { acceptJob };
