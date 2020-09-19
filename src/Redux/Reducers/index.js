import { FILTERED_LIST, FILTERED_LIST_BY_LAUNCH, FILTERED_LIST_BY_LAING } from '../Actions/constants';
// import { combineReducers } from "redux";


const initialState = [];

export const filteredListReducer = (state = initialState, action) => {
    switch(action.type){
        case FILTERED_LIST :
            return [...action.payload.data];

        case FILTERED_LIST_BY_LAUNCH :
            return [...action.payload.data];

        case FILTERED_LIST_BY_LAING :
            return [...action.payload.data];

        default: return state;
    }
}

// const filteredListByLaunchReducer = (state = initialState, action) => {
//     switch(action.type){
//         case FILTERED_LIST_BY_LAUNCH :
//             // state = action.payload
//             // console.log('in reducer',(state));
//             return [...state, {...action.payload}];

//         default: return state;
//     }
// }

// const filteredListByLayingReducer = (state = initialState, action) => {
//     switch(action.type){
//         case FILTERED_LIST_BY_LAING :
//             // state = action.payload
//             // console.log('in reducer',(state));
//             return [...state, {...action.payload}];;

//         default: return state;
//     }
// }

// export const rootReducer = combineReducers({
//     filteredListReducer, listReducer, filteredListByLaunchReducer, filteredListByLayingReducer
//   });