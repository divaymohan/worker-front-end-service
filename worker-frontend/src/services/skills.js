import axios from "axios";
import Worker from "./../components/body/centreBody/worker";

async function addSkills(_id, skill_id) {
  const url = "http://localhost:3001/api/hiring/workers/add/skill/";
  const result = await axios.put(`${url}${_id}`, {
    skills: [skill_id],
  });
  return result;
}

export { addSkills };
