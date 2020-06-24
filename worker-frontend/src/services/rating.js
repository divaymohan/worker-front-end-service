import axios from "axios";
import { history } from "./job";
async function updateJobRating(_id, value) {
  const url = "http://localhost:3001/api/hiring/job/rating/";
  const result = await axios.put(`${url}${_id}`, {
    rating: value,
  });
  const { data: WorkerHistory } = await history(
    "worker",
    result.data.worker._id
  );
  console.log(WorkerHistory);

  let rate = 0;
  let count = 0;
  for (let i = 0; i < WorkerHistory.length; i++) {
    console.log(WorkerHistory[i]);
    if (WorkerHistory[i].jobRating) {
      rate += WorkerHistory[i].jobRating;
      count++;
    }
  }
  rate = parseInt(Math.round(rate / count));
  console.log(rate, value);
  const rurl = "http://localhost:3001/api/hiring/workers/add/rating/";
  await axios.put(`${rurl}${result.data.worker._id}`, {
    rating: rate,
  });
  return result;
}

export { updateJobRating };
