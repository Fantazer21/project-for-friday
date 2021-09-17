import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { enterNewPasswordReducer } from "../enterNewPassword/enterNewPassword-reducer";
import { loginReducer } from "../Login/login-reducer";
import {passwordRecoveryReducer} from "../PasswordRecovery/passwordRecovery-reducer";
import { profileReducer } from "../Profile/profile-reducer";
import { registrationReducer } from "../registartion/registration-reducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    PasswordRecovery: passwordRecoveryReducer,
    newPassword: enterNewPasswordReducer,
    profile: profileReducer,
    registration: registrationReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))