import axios from "axios";

async function getWorks() {
  const fetchUrl = "localhost:3001/api/hiring/work/";
  const works = await axios.get(fetchUrl);
  console.log(work);
  return works;
}

export default getWorks;
