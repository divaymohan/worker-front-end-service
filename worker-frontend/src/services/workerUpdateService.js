import axios from "axios";

async function getWorkerService(worker_Id) {
  const custUrl = "http://localhost:3001/api/hiring/workers/";
  const oldCust = await axios.get(`${custUrl}${worker_Id}`);
  return oldCust;
}
async function getAddress(custmer_id) {
  const addUrl = "http://localhost:3001/api/hiring/address/";
  const address = await axios.get(`${addUrl}${custmer_id}`);
  return address;
}
async function updateWorkerService(_id, data) {
  const custUrl = "http://localhost:3001/api/hiring/workers/";

  const worker = await axios.put(`${custUrl}${_id}`, {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    userName: data.userName,
    password: data.password,
    middleName: data.middleName,
    phoneNumber: data.phoneNumber,
    address: {
      city: data.city,
      area: data.area,

      pin: data.pin,
    },
  });
  return worker;
}
async function UpdateAddress(_id, worker) {
  const address_url =
    "http://localhost:3001/api/hiring/workers/update/address/";
  const data = await axios.put(`${address_url}${_id}`, {
    country: worker.country,
    city: worker.city,
    area: worker.area,
    landmark: worker.landmark,
    pin: worker.pin,
    street: worker.street,
    houseNumber: worker.houseNumber,
  });
  return data;
}
export { getWorkerService, getAddress, updateWorkerService, UpdateAddress };
