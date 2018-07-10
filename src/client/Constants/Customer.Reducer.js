import * as types from './actionTypes';
import initialState from './../initialState';

export default function (state = initialState.customer, action) {
    switch (action.type) {
    case types.AUTH_USER:
    return {
        ...state,
        authenticated: true
        };
    case types.UNAUTH_USER:
    return {
        ...state,
        authenticated: false
        };
    case types.AUTH_ERROR:
    return {
        ...state,
        auth_error: action.payload
        };
    case types.FETCH_CUSTOMER_SUCCESS:
     //debugger;
         return {
         ...state,
         currentUser: action.profile,
         customerID: action.customerID
         };
    case types.RESET_CURRENT_USER:
         return {
           ...state,
           currentUser: initialState.customer.currentUser
           };
       case types.ROOT_CHANGED:
           return {
             ...state,
             root: action.root
           };
       case types.CUSTOMER_TOKEN_SUCCESS:
        //debugger;
           return {
             ...state,
             auth_token: action.auth_token,
             userId: action.userId,
             emailID: action.emailID
           };
        case types.RESET_CUSTOMER_TOKEN:
        //debugger;
             return {
                ...state,
                auth_token: initialState.customer.auth_token,
                userId: initialState.customer.userId,
                emailID: initialState.customer.emailID,
                lotto: initialState.customer.lotto,
                jackpot_new: initialState.customer.jackpot_new,
                lotto_new: initialState.customer.lotto_new
            };
      case types.CHANGE_ACCESS_FILTER:
               return {
               ...state,
               accessFilter: action.accessFilter
       };
       case types.CREATE_CUSTOMER_SUCCESS:
                return {
                ...state,
                customer: action.customer
        };
        case types.PLAY_LOTTO_SUCCESS:
                return {
                ...state,
                lotto_new: action.lotto_new
        };
        case types.ADD_LOTTO_WIN_SUCCESS:
                return {
                ...state,
                new_lotto_wins: action.new_lotto_wins
        };
        case types.FETCH_USER_LOTTO_SUCCESS:
                return {
                ...state,
                lotto: action.lotto
        };
        case types.FETCH_LOTTO_WIN_SUCCESS:
                return {
                ...state,
                lotto_wins: action.lotto_wins
        };
        case types.FETCH_ALL_CUSTOMERS_SUCCESS:
                return {
                ...state,
                lotto_customers: action.lotto_customers
        };
        case types.MEGA_MILLIONS_RESULT_SUCCESS:
                return {
                ...state,
                mega_millions_new: action.mega_millions_new
        };
        case types.FETCH_LAST_MEGA_MILLIONS_RESULT_SUCCESS:
                return {
                ...state,
                megamillions: action.megamillions
        };
        case types.EURO_MILLIONS_RESULT_SUCCESS:
                return {
                ...state,
                euro_millions_new: action.euro_millions_new
        };
        case types.FETCH_LAST_EURO_MILLIONS_RESULT_SUCCESS:
                return {
                ...state,
                euromillions: action.euromillions
        };
        case types.EURO_MILLIONS_GO_RESULT_SUCCESS:
                return {
                ...state,
                euro_millions_go_new: action.euro_millions_go_new
        };
        case types.FETCH_LAST_EURO_MILLIONS_GO_RESULT_SUCCESS:
                return {
                ...state,
                euromillionsgo: action.euromillionsgo
        };

     default:
       return state;
   }
}
