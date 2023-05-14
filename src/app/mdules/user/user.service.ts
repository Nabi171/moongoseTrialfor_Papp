import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload);
    await user.save();
    console.log(user.fullName());
    return user;
};

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
};

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
    return user;
};


export const getAdminUsersFromDB = async (payload: string) => {
    const admins = await User.getAdminUsers();
    return admins;

};

//class >attach>method>direct call using class
//user newuser
//user .instance methods
//uyser.getAdminUsers()
