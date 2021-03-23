
export const findCustomer = (customers , id) => {
    return customers.find(cust => cust._id === id)
}