import axios from "axios";

async function getWorks() {
  const fetchUrl = "localhost:3001/api/hiring/work/";
  const work = await axios.get(fetchUrl);
  console.log(work);
}
module.exports = {
  getWorks,
};
