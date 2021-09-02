import http from "./http-common";

class UserService {
  signup(data) {
    return http.post("/users", data);
  }

  login(data) {
    return http.post("/auth/login", data);
  }
}

export default new UserService();
