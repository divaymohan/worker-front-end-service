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
export { getCustService, getAddress };
