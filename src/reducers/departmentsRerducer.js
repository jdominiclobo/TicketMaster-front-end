const departmentsInitialValue = []

const departmentsReducer = ( state = departmentsInitialValue , action ) => {
    switch(action.type){
        case 'SET-DEPARTMENTS' : {
            return [...action.payload]
        }
        case 'ADD-DEPARTMENT' :{
            return [...state, action.payload]
        }
        case 'EDIT-DEPARTMENT' :{
            return state.map(dept => {
                if(dept._id === action.payload._id){
                    return {...dept, ...action.payload}
                } else {
                    return {...dept}
                }
            })
        }
        case 'REMOVE-DEPARTMENT' : {
            return state.filter(dept=>dept._id !== action.payload._id)
        }
        default : {
            return [...state]
        }
    }
}

export default departmentsReducer