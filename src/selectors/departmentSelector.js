export const findDepartment = (department, id) => {
    return department.find(dept=>dept._id===id)
}