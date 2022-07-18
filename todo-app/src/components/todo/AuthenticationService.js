import axios from 'axios'
import { API_URL } from '../../constant'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    executeAuthenticationService(username, password) {

        return axios.get(`${API_URL}/basicauth`, {
            headers: {
                authorization: this.createBasicAuthToken(username, password)
            }
        })
    }

    executeJwtAuthenticationService(username, password) {

        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)

    }

    createJwtAuthToken(token) {
        return 'Bearer ' + token
    }

    registerSuccessfulLogin(username, password) {
        //let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    registerSuccessfulLoginForJwt(username, token) {
        //let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createJwtAuthToken(token))
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }
    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user == null) return false
        else return true
    }
    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user == null) return ''
        else return user
    }

    setupAxiosInterceptors(token) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()