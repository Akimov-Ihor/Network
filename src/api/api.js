import * as axios from 'axios';
const baseUrl='https://social-network.samuraijs.com/api/1.0'

const instance =axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY":"e7309978-fab0-4fff-9813-d3c02f29515e"
    }
    

})

export const usersAPI = {
    getUsers(currentPage =1,pageSize=10){
        return instance.get(`/users?=${currentPage}&count=${pageSize}`)
            .then(response=>{
                return response.data;
            });
        },
        follow(userId){
        return  instance.post(`/follow/${userId}`)

        },
        
        
        unfollow(userId){
          return  instance.delete(`/follow/${userId}`)
           }
}





// export const followUser =({u.id})=> {
//   return instance.delete(`/follow/${u.id}`)
//   .then(response =>{
//       return response.data;
//   });

// }

