import axios from "axios";

async function cancleJob(_id) {
  const url = "http://localhost:3001/api/hiring/job/cancle/";
  const result = await axios.put(`${url}${_id}`, {
    isCancled: true,
  });
  return result;
}
export { cancleJob };
