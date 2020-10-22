export const getCustomers = (state) => state.customers;
export const getCustomerByDni = (state, dni) => state.customers.find(c => c.dni === dni)