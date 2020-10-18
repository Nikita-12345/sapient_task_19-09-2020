import { FILTERED_LIST, FILTERED_LIST_BY_LAUNCH, FILTERED_LIST_BY_LAING } from '../Actions/constants';

const initialState = [];
let yearFilter = false;
let launchFilter = false;
export const filteredListReducer = (state = initialState, action) => {
    switch(action.type){
        case FILTERED_LIST :
            yearFilter = true;
            state =  [...action.payload.data]
            return state;

        case FILTERED_LIST_BY_LAUNCH : 
            launchFilter = true;
            if(yearFilter === true){
                state = action.payload.data.filter(data=> data.launch_year === state[0].launch_year);
                return state;
            }
            else{
                return  [...action.payload.data];
            }            

        case FILTERED_LIST_BY_LAING :
            if(launchFilter === true && yearFilter === true){
                state = action.payload.data.filter(data=> (data.rocket.first_stage.cores[0].land_success === state[0].rocket.first_stage.cores[0].land_success) && 
                (data.launch_year === state[0].launch_year));
                console.log('state', state);
                return state;
            }
            else if(yearFilter === true){
                state = action.payload.data.filter(data=> data.launch_year === state[0].launch_year && data.launch_year === state[0].launch_year);
                return state;
            }
            else{
                return  [...action.payload.data];
            }     
        default: return state;
    }
}
