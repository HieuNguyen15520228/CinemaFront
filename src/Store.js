var redux = require('redux');
//Tạo các thuộc tính sử dụng chung cho các component
var oldState = {
    username: '',
    email: '',
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    phone: '',
    avatar: '',
    loginState: false,
    film:'',
    date:'',
    seatID:'',
    time:'',
    cinema:'',
    ticketNumber:'',
    price:'',
    seatData: [],
    tempItem:{},
    bookingItem: []
}
const reducer = (state = oldState, action) => {
    //Các case sẽ thực hiện update các thuộc tính tương ứng
    switch (action.type) {
        case "USER_INFO": 
            return { ...state }
        case "LOG_IN":
            return {
                ...state,
                username: action.username,
                email: action.email,
                firstname: action.firstname,
                lastname: action.lastname,
                dateOfBirth: action.dateOfBirth,
                phone: action.phone,
                avatar: action.avatar,
                loginState: action.loginState
            }
        case "USER_UPDATE": //?
            return {
                ...state,
                username: action.username,
                firstname: action.firstname,
                lastname: action.lastname,
                phone: action.phone,
                avatar: action.avatar,
            }
        case "LOG_OUT":
            return {
                ...state,
                loginState: false
            }
        case "BOOKING":
            return{
                ...state,
                seatID:action.seatID,
                ticketNumber: action.ticketNumber,
                price: action.price
            }
        case "BOOKING_1":
            return {
                ...state,
                film: action.film
            }
        case "BOOKING_2":
            return{
                ...state,
                date:action.date,
                cinema:action.cinema,
                time:action.time
            }
        case "SLOT":
            return{
                ...state,
                seatData: action.seatData
            }
            case "TEMP_ITEM_FILM":
            return{
                ...state,
                tempItem:{
                    film:action.film
                }
            }
            case "TEMP_ITEM":
            return{
                ...state,
                tempItem:{
  
                    date:action.date,
                    time:action.time,
                    cinema:action.cinema
                },
            }
            case "ADD_BOOKING_LIST":
            return{
                ...state,
                bookingItem: state.bookingItem.concat(action.item)
            }
            case "CHANGE_AVATAR":
            return{
                ...state,
                avatar:state.avatar
            }
        default:
            return state
    }
}
var store = redux.createStore(reducer);
export default store;
