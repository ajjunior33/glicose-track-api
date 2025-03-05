import {IUser} from "../../User/interface/user.interface";

export interface IAuth {
    user: IUser;
    access_token: string;
}