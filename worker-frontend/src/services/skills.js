import axios from "axios";
import Worker from "./../components/body/centreBody/worker";

async function getSkills() {
  const url = "";
  const skills = await axios.get(url);
  return skills;
}
async function addSkills(_id, skill) {}

export { getSkills, addSkills };
