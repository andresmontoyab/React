import axios from 'axios';

class AuthenticationService {

    executeBasicAuthentication(username, password){
        return axios.get('http://localhost:8585/basicauth', {headers: { authorization: this.createBasicAuthToken(username, password)}})
    }

    executeJwtAuthentication(username, password){
        return axios.post('http://localhost:8585/authenticate', 
        {
            username,
            password
        })
    }

    registerSuccesfullLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    registerSuccesfullLoginWithToken(username, token) {
        sessionStorage.setItem('authenticatedUser', username);
        this.setupAxiosInterceptors(this.createJwtToken(token));
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ':' + password);
    }

    createJwtToken(token) {
        return 'Bearer ' + token;
    }

    logout() {
        console.log("Logging out")
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
       let user = sessionStorage.getItem('authenticatedUser')
       if (user === null) return false
       return true
    }

    getLoggedInUsername() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(basicAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService();