import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import { toastrSuccess, toastrWarning } from '../../Services/ToasterService';

class AuthService {

    noAuthRoutes = ['reset-link','membership-payment','complete-profile','login','register','forgot-password','info','confirm-email','intro','marketplace'];

    isAuthRoutes(pathname) {
        return !(this.noAuthRoutes.indexOf(pathname.split('/')[1]) !== -1 || pathname === '/')
    }
    
    login(formData) {
        return Axios.post(API_BASE_URL + "api/validate_user", formData)
            .then(({ data }) => {
                //console.log(data);
                if (data.status === 'success') {
                    localStorage.setItem("userData", JSON.stringify(data.userData));
                    toastrSuccess(data.message);
                } else {
                    toastrWarning(data.message);
                }
                return data;
            }).catch(err => console.log(err));
    }

    logout(history) {
        localStorage.removeItem("userData");
        history.push('login');
    }

    register() {
     
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('userData'));
    }
}

export default new AuthService();