import * as axios from 'axios';
import { setCurrentPage } from '../redux/users-reducer';
const baseUrl = 'https://social-network.samuraijs.com/api/1.0'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "e7309978-fab0-4fff-9813-d3c02f29515e"
    }


})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?=${currentPage}&count=${pageSize}`)

            .then(response => {
                return response.data;

            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);

    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);

    }


}

export const authAPI = {
    me() {
        return instance.get(`auth/me`) ;
    }


}




// export const followUser =({u.id})=> {
//   return instance.delete(`/follow/${u.id}`)
//   .then(response =>{
//       return response.data;
//   });

// }

