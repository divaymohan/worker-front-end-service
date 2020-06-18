import axios from "axios";
const fetchUrl = "http://localhost:3001/api/hiring/work/";
async function getWorks() {
  const works = await axios.get(fetchUrl);
  return works;
}

export default getWorks;
