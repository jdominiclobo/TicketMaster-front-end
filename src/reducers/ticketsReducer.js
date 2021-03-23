const ticketsStateInitialValue = []

const ticketsReducer = (state = ticketsStateInitialValue ,action) => {
    switch(action.type){
        case 'SET-TICKETS' : {
            return [...action.payload]
        }
        case 'ADD-TICKET' : {
            return [].concat(state,action.payload)
        }
        case 'EDIT-TICKET' : {
            return state.map( tkt => {
                if( tkt._id === action.payload._id){
                    return {...tkt,...action.payload}
                } else {
                    return {...tkt}
                }
            })
        }
        case 'REMOVE-TICKET' : {
            return state.filter(tkt => tkt._id !== action.payload._id)
        }
        default : {
            return [...state]
        }
    }
}

export default ticketsReducer