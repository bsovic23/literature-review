import decode from 'jwt-decode';

class AuthService {
    // retrieve data saved in token
    getProfile() {
        return decode(this.getToken());
    }

    // see if user is still logged in
    loggedIn() {
        // see if there is a saved token and valid exp
        const token = this.getToken();

        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
              return true;
            } else {
              return false;
            }
          } catch (err) {
            return false;
          }
        }
      
        // retrieve token from localStorage
        getToken() {
          // Retrieves the user token from localStorage
          return localStorage.getItem('id_token');
        }
      
        // set token to localStorage and reload page to homepage
        login(idToken) {
          // Saves user token to localStorage
          localStorage.setItem('id_token', idToken);
      
          window.location.assign('/home');
        }
      
        // clear token from localStorage and force logout with reload
        logout() {
          // Clear user token and profile data from localStorage
          localStorage.removeItem('id_token');
          // this will reload the page and reset the state of the application
          window.location.assign('/home');
        }
      }

export default new AuthService();