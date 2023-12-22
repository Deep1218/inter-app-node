import { Constants } from "../../helpers/Constants";
import { Users } from "./schemas/user.schema";

export class UserMiddlerware {
  async checkUserExists(req: any, res: any, next: any) {
    const { mobile } = req.body;
    const user = new Users();
    const foundUser = user.collection.find({ mobile });
    if (foundUser) {
      return res
        .status(400)
        .json(ResponseBuilder.badRequest(Constants.Responses.USER_EXISTS));
    }
    next();
  }
}
