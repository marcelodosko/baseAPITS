import Users, { UserClass } from "../models/users";

export default class UsersServices {
    constructor(){};
    public saveUser = async (user?: UserClass) => {
        try {
            const newuser = new Users({
                firstName: "Marcelo",
                lastName: "R"
            });
            const result = await newuser.save();
            return result;
        } catch (err) {
            console.error(err)
            throw new Error("error saving user")
        }
    }
}