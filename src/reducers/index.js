import { FETCH_START, FETCH_FAIL, FETCH_SUCCESS} from './../actions'
const initialState = {
    data:[
      {
          activity:"Organize your movie collection",
          type: 'busywork',
          participants: 1,
      }
    ],
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    console.log('2',action.payload)
    switch(action.type){
        case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error:''
      };
      case FETCH_FAIL:
        return {
          ...state,
          isFetching:false,
          error:action.payload
        };
        case FETCH_SUCCESS:
          return {
            ...state,
            data: action.payload,
            isFetching:false,
            error:''
          };
        default:
            return state;
    }
}

