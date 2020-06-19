import axios from "axios";

const workerByIdUrl = `http://localhost:3001/api/hiring/workers/`;
async function getWorkers(id) {
  const url = `${workerByIdUrl}${id}`;
  const workers = await axios.get(url);
  return workers;
}

export default getWorkers;
