import UserService from "@/services/users.service";
import { BaseSeeder } from "./base";

export default class UserSeeder extends  BaseSeeder {
    private userService = new UserService();
    public async seed() {
        // console.log("Seedin");
        await this.userService.createUser({
            email: "test@gmail.com",
            password: "123456",
        });
        
        // set admin
        let user = await this.userService.findUserByEmail("test@gmail.com");
        user.admin = true;
        await user.save();
    }
}