import http from "./http-common";

class UserService {
  getAll() {
    return http.get("/users");
  }
  getshowLogUser(token) {
    return http.get(`/userlog?token=${token}`);
  }

  signup(data) {
    return http.post("/users",  {
      email:'dev@gmail.com',
      username:'devd',
      password:'m38rmF$',
      name:{
          firstname:'dev',
          lastname:'Doe'
      },
      address:{
          city:'kilcoole',
          street:'7835 new road',
          number:3,
          zipcode:'12926-3874',
          geolocation:{
              lat:'-37.3159',
              long:'81.1496'
          }
      },
      phone:'1-570-236-7033'
  });
  }

  login(data) {
    return http.post("/auth/login", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }
}

export default new UserService();
