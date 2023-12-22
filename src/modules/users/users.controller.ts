import { Users } from "./schemas/user.schema";

class UserController {
  public Users = new Users();
  signUp(req, res) {
    const { name, email, mobile, type } = req.body;
  }
}
