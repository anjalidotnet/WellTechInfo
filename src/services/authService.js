import * as JWT from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { handleResponse } from '../helpers/handleResponse';


const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
export const LOGIN_URL = "api/auth/login";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";

export const ME_URL = "api/me";

export const authService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch('apiUrl',requestOptions)
    .then(handleResponse)
    .then(user => {
        localStorage.setItem('currentUser',JSON.stringify(user));
        return user;
    })
}

function logout() {
// remove user from local storage to log user out
localStorage.removeItem('currentUser');
currentUserSubject.next = null;
}

// export default authService