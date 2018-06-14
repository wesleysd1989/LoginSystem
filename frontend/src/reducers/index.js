import { combineReducers } from 'redux'
import AuthReducer from '../auth/AuthReducer/'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

export default combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    auth: AuthReducer
})