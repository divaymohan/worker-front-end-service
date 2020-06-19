import axios from "axios";

async function getCustService(customer_Id) {
  const custUrl = "http://localhost:3001/api/hiring/customers/";
  const oldCust = await axios.get(`${custUrl}${customer_Id}`);
  return oldCust;
}
async function getAddress(custmer_id) {
  const addUrl = "http://localhost:3001/api/hiring/address/";
  const address = await axios.get(`${addUrl}${custmer_id}`);
  return address;
}
async function updateCusService(_id, data) {
  const custUrl = "http://localhost:3001/api/hiring/customers/";

  const customer = await axios.put(`${custUrl}${_id}`, {
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
  return customer;
}
async function UpdateAddress(_id, customer) {
  const address_url =
    "http://localhost:3001/api/hiring/customers/update/address/";
  const data = await axios.put(`${address_url}${_id}`, {
    country: customer.country,
    city: customer.city,
    area: customer.area,
    landmark: customer.landmark,
    pin: customer.pin,
    street: customer.street,
    houseNumber: customer.houseNumber,
  });
  return data;
}
export { getCustService, getAddress, updateCusService, UpdateAddress };
