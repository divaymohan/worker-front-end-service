import axios from "axios";

async function updateJobRating(_id, value) {
  const url = "http://localhost:3001/api/hiring/job/rating/";
  const result = axios.put(`${url}${_id}`, {
    rating: value,
  });
  return result;
}

export { updateJobRating };
