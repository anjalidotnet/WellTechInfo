import { authService } from '../services/authService';

export function authHeader() {
    // return auth header with jwt-token
    const currentUser = authService.currentUserValue;
    if(currentUser && currentUser.token){
        return { Authorization:`Bearer ${currentUser.token}`};
    } else {
        return {};
    }
}