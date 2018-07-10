import * as types from './actionTypes';
import axios from 'axios';
import localStorage from 'localStorage';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import toastr from 'toastr';
import jwt_decode from 'jwt-decode';

export function fetchProfilesSuccess(profile) {
   //debugger;
    return { type: types.FETCH_CUSTOMER_SUCCESS, profile};
 }
 
 export function signinUser({ email, password}, history ) {
  return function(dispatch, getState) {
      //debugger;
    // Submit email/password to the server
    axios.post(`${types.ROOT_URL}/users/login`, { email, password })
      .then(response => {
        dispatch({ type: types.AUTH_USER });
       
        localStorage.setItem('token', response.data.auth_token);
        const MAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${response.data.auth_token}`
        };
        const userId = jwt_decode(response.data.auth_token).user_id;
        const emailID = jwt_decode(response.data.auth_token).email_id;
        dispatch(customerTokenSuccess(response.data.auth_token,userId,emailID));
        dispatch(fetchUserLotto(userId)); 
        //toastr.remove();
        toastr.success('Logged In');
        //dispatch(fetchCustomerProfiles(userId,MAPI_HEADERS));
        history.push('/');
      })
      .catch(error => {
        //debugger;
        toastr.error('Bad Login Info, Make sure you are signing with correct Email and Password');
        throw(error);
      });
  };
}

export function signupUser({ email, password, password_confirmation, user_type }, history) {
  return function(dispatch) {
    debugger;
    axios.post(`${types.ROOT_URL}/users`, { email, password, password_confirmation, user_type })
      .then(response => { 
        toastr.success('User registered successfully');
        dispatch(fetchAllCustomers());
        history.push('/adminpage');
      })
      .catch(error => {
        //dispatch(authError('Sign up Info'));
        toastr.error('Bad Sign up Info, Make sure you are using Email address');
        throw(error);
      });
  };
}

export function customerTokenSuccess(auth_token,userId,emailID) {
    return {
      type: types.CUSTOMER_TOKEN_SUCCESS,
      auth_token: auth_token,
      userId: userId,
      emailID: emailID
    };
  }
  
 //LOG OUT FUNCTION
export function resetAuth(history){
  return function(dispatch){
      dispatch({ type: types.RESET_CUSTOMER_TOKEN});
      dispatch({type: types.UNAUTH_USER });
      localStorage.removeItem('token');
      //dispatch(changeAppRoot('login'));
      toastr.success('Signed out');
      history.push('/');
    };
}

export function fetchCustomerProfiles(user) {
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
    //debugger;
    return function(dispatch) {
        dispatch(beginAjaxCall());
        return axios.get(`${types.ROOT_URL}/customers/${user}`,
        {headers: GAPI_HEADERS }).then(profile => {
            //debugger;
            dispatch(fetchProfilesSuccess(profile.data));
        }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error fetching your profile');
            throw(error);
        });
    };
}
//PLAY LOTTO
export function playLotto({ user_id,lotteryId,drawingDate,closingDate,state,doubleJackpotAllowed,
     drawingType, jackpot_0, jackpot_1, jackpot_2, jackpot_3, jackpot_4, jackpot_5,lottoJackpot,
     marketingJackpot,price }, history) {
    debugger;
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
  return function(dispatch, getState) {
    axios.post(`${types.ROOT_URL}/lotteries`, { user_id,lotteryId,drawingDate,closingDate,state,doubleJackpotAllowed,
     drawingType, jackpot_0, jackpot_1, jackpot_2, jackpot_3, jackpot_4, jackpot_5,lottoJackpot,
     marketingJackpot,price },
    {headers: GAPI_HEADERS }).then(res => { 
          dispatch(createUserLottoSuccess(res.data));
          dispatch(fetchUserLotto(user_id));
      }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error submitting your numbers');
            throw(error);
    });
  };
}
export function createUserLottoSuccess(lotto_new) {
   //debugger;
    return { type: types.PLAY_LOTTO_SUCCESS, lotto_new};
 }
export function createLottoWin({user_id,lotteryId, drawnDate, state, drawingType,
      jackpot_0, jackpot_1, jackpot_2, jackpot_3, jackpot_4, jackpot_5, 
      lottoJackpot, marketingJackpot, jackpotAmount,marketingJackpotAmount,payoutAmount}) {
    debugger;
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
  return function(dispatch, getState) {
    axios.post(`${types.ROOT_URL}/lotto_wins`, { user_id,lotteryId, drawnDate, state, drawingType,
      jackpot_0, jackpot_1, jackpot_2, jackpot_3, jackpot_4, jackpot_5, 
      lottoJackpot, marketingJackpot, jackpotAmount,marketingJackpotAmount,payoutAmount},
    {headers: GAPI_HEADERS }).then(res => { 
          dispatch(createLottoWinSuccess(res.data));
      }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error adding lotto win details');
            throw(error);
    });
  };
}
 export function createLottoWinSuccess(new_lotto_wins) {
   //debugger;
    return function(dispatch){ 
        dispatch({type: types.ADD_LOTTO_WIN_SUCCESS, new_lotto_wins});
    };
 }
          
//FETCH USER LOTTO DETAILS
export function fetchUserLotto(user_id)  {
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
  return function(dispatch, getState) {
    axios.get(`${types.ROOT_URL}/users/${user_id}/my_lotteries`, 
      {headers: GAPI_HEADERS }).then(res => { 
          dispatch(fetchUserLottoSuccess(res.data));
        }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error fetching your profile');
            throw(error);
      });
  };
}

export function fetchUserLottoSuccess(lotto) {
   //debugger;
    return { type: types.FETCH_USER_LOTTO_SUCCESS, lotto};
 }
 
//FETCH LOTTO WINS DETAILS
export function fetchLottoWins()  {
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
  const user_id = jwt_decode(mytoken).user_id;
  return function(dispatch, getState) {
    axios.get(`${types.ROOT_URL}/users/${user_id}/my_lotto_wins`, 
      {headers: GAPI_HEADERS }).then(res => { 
          dispatch(fetchLottoWinsSuccess(res.data));
        }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error fetching your lotto wins');
            throw(error);
      });
  };
}

export function fetchLottoWinsSuccess(lotto_wins) {
   debugger;
    return { type: types.FETCH_LOTTO_WIN_SUCCESS, lotto_wins};
 } 
 
//FETCH ALL CUSTOMERS
export function fetchAllCustomers()  {
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
  const user_id = jwt_decode(mytoken).user_id;
  return function(dispatch, getState) {
    axios.get(`${types.ROOT_URL}/users/${user_id}/lotto_customers`, 
      {headers: GAPI_HEADERS }).then(res => { 
          dispatch(fetchAllCustomersSuccess(res.data));
        }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error fetching your lotto wins');
            throw(error);
      });
  };
}

export function fetchAllCustomersSuccess(lotto_customers) {
   //debugger;
    return { type: types.FETCH_ALL_CUSTOMERS_SUCCESS, lotto_customers};
 }  
 
//CREATE MEGA MILLIONS RESULT 
export function createMegaMillionsResult({jackpot_0, jackpot_1, jackpot_2, jackpot_3, jackpot_4, 
jackpot_5,drawnDate}) {
    debugger;
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
  return function(dispatch, getState) {
    axios.post(`${types.ROOT_URL}/mega_millions_results`, {jackpot_0, jackpot_1, jackpot_2, jackpot_3, 
    jackpot_4, jackpot_5,drawnDate},
    {headers: GAPI_HEADERS }).then(res => { 
          dispatch(createMegaMillionsResultSuccess(res.data));
      }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error adding lotto win details');
            throw(error);
    });
  };
} 
export function createMegaMillionsResultSuccess(mega_millions_new) {
   //debugger;
    return { type: types.MEGA_MILLIONS_RESULT_SUCCESS, mega_millions_new};
 }
//FETCH LAST MEGA MILLIONS RESULT
export function fetchLastMegaMillionsResult()  {
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
  return function(dispatch, getState) {
    axios.get(`${types.ROOT_URL}/mega_millions_results`, 
      {headers: GAPI_HEADERS }).then(res => { 
          //debugger;
          dispatch(fetchLastMegaMillionsResultSuccess(res.data));
        }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error fetching your lotto wins');
            throw(error);
      });
  };
}

export function fetchLastMegaMillionsResultSuccess(megamillions) {
   //debugger;
    return { type: types.FETCH_LAST_MEGA_MILLIONS_RESULT_SUCCESS, megamillions};
 }   
//CREATE EURO MILLIONS RESULT 
export function createEuroMillionsResult({jackpot_0, jackpot_1, jackpot_2, jackpot_3, jackpot_4, 
jackpot_5,drawnDate}) {
    //debugger;
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
  return function(dispatch, getState) {
    axios.post(`${types.ROOT_URL}/euro_millions_results`, {jackpot_0, jackpot_1, jackpot_2, jackpot_3, 
    jackpot_4, jackpot_5,drawnDate},
    {headers: GAPI_HEADERS }).then(res => { 
          dispatch(createEuroMillionsResultSuccess(res.data));
      }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error adding lotto win details');
            throw(error);
    });
  };
} 
export function createEuroMillionsResultSuccess(euro_millions_new) {
   //debugger;
    return { type: types.EURO_MILLIONS_RESULT_SUCCESS, euro_millions_new};
 } 
//FETCH LAST EURO MILLIONS RESULT
export function fetchLastEuroMillionsResult()  {
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
  return function(dispatch, getState) {
    axios.get(`${types.ROOT_URL}/euro_millions_results`, 
      {headers: GAPI_HEADERS }).then(res => { 
          dispatch(fetchLastEuroMillionsResultSuccess(res.data));
        }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error fetching your lotto wins');
            throw(error);
      });
  };
}

export function fetchLastEuroMillionsResultSuccess(euromillions) {
   //debugger;
    return { type: types.FETCH_LAST_EURO_MILLIONS_RESULT_SUCCESS, euromillions};
 } 
//CREATE EURO GO MILLIONS RESULT 
export function createEuroMillionsGoResult({jackpot_0, jackpot_1, jackpot_2, jackpot_3, 
jackpot_4, jackpot_5,jackpot_6,drawnDate}) {
    debugger;
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
  return function(dispatch, getState) {
    axios.post(`${types.ROOT_URL}/euro_millions_go_results`, {jackpot_0, jackpot_1, jackpot_2, 
    jackpot_3, jackpot_4, jackpot_5,jackpot_6,drawnDate},
    {headers: GAPI_HEADERS }).then(res => { 
          dispatch(createEuroMillionsGoResultSuccess(res.data));
      }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error adding lotto win details');
            throw(error);
    });
  };
} 
export function createEuroMillionsGoResultSuccess(euro_millions_go_new) {
   //debugger;
    return { type: types.EURO_MILLIONS_GO_RESULT_SUCCESS, euro_millions_go_new};
 } 
//FETCH LAST EURO MILLIONS GO RESULT
export function fetchLastEuroGoMillionsResult()  {
    const mytoken = localStorage.getItem('token');
    const GAPI_HEADERS = {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${mytoken}`
     };
  return function(dispatch, getState) {
    axios.get(`${types.ROOT_URL}/euro_millions_go_results`, 
      {headers: GAPI_HEADERS }).then(res => { 
          dispatch(fetchLastEuroMillionsGoResultSuccess(res.data));
        }).catch(error => {
           dispatch(ajaxCallError(error));
           toastr.error('Error fetching your euro millions go results');
            throw(error);
      });
  };
} 
export function fetchLastEuroMillionsGoResultSuccess(euromillionsgo) {
   //debugger;
    return { type: types.FETCH_LAST_EURO_MILLIONS_GO_RESULT_SUCCESS, euromillionsgo};
 }
 