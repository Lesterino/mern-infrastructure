import * as usersAPI from "./users-api"

export const signUp = async(userData) => {
    try {
        const token = await usersAPI.signUp(userData);
        return token;
    } catch {
        throw new Error("Invalid Sign Up");
    }
}