const customersInitialValue = []

const customersReducer = ( state = customersInitialValue , action ) => {
    switch(action.type){
        case 'SET-CUSTOMERS' : {
            return [...action.payload]
        }
        case 'ADD-CUSTOMER' : {
            return [...state, action.payload]
        }
        case 'REMOVE-CUSTOMER' : {
            return state.filter(cust=>cust._id === action.payload._id)
        }
        case 'EDIT-CUSTOMER' : {
            return state.map(cust=>{
                if(cust._id === action.payload._id){
                    return {...cust, ...action.payload}
                } else {
                    return {...cust}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default customersReducer