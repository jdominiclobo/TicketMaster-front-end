const employeesInitialValue = []

const employeesReducer = ( state = employeesInitialValue , action ) => {
    switch(action.type){
        case 'GET-EMPLOYEES' : {
            return [...action.payload]
        }
        case 'ADD-EMPLOYEE' : {
            return [...state, action.payload]
        }
        case 'EDIT-EMPLOYEE' : {
            return state.map(emp =>{
                if(emp._id === action.payload._id){
                    return {...emp,...action.payload}
                } else {
                    return {...emp}
                }
            })
        }
        case 'REMOVE-EMPLOYEE' : {
            return state.filter(emp => emp._id !== action.payload._id )
        }
        default : {
            return [...state]
        }
    }
}

export default employeesReducer