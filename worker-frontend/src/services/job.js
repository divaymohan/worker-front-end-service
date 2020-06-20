import axios from "axios";

async function postJob(W_Id, C_Id) {
  const jobUrl = "http://localhost:3001/api/hiring/";
  const job = await axios.post(jobUrl, {
    customerId: C_Id,
    workerId: W_Id,
  });
  return job;
}
async function history(roll, _id) {
  const urlHistory = "http://localhost:3001/api/hiring/history/";
  const result = await axios.post(`${urlHistory}${roll}`);
  return result;
}
export { postJob, history };
