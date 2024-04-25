import { auth } from "@clerk/nextjs"

const adminIds = [
 "user_2e4QtweaUp8RlIWZajusFW7BgAz"
]
export const isAdmin = async () => {
 const {userId} = await auth();

 if(!userId) {
    return false;
 }

 return adminIds.indexOf(userId) !== -1;
};