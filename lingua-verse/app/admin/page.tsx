import { isAdmin } from "@/lib/admin";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";



const App  = dynamic (() => import("./app"), {ssr: false});

const AdminPage = async() => {
    const getisAdmin = await isAdmin();

    if(!isAdmin) {
        redirect("/");
    }
    return(
        <App/>
    );
};

export default AdminPage;