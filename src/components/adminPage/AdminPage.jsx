import { Link, Outlet } from "react-router-dom";
import AdminDetails from "../adminDetails/AdminDetails";
import { Button } from "@mui/material";

function AdminPage() {

    return(
        <>
        <AdminDetails/> 
         {/* <Link to="./services" > services</Link>|
         <Link to="./meeting">meeting</Link>
    <br/>     
         <Outlet /> */}
         <div className="buttons">
          <Button> <Link to="./services">services</Link></Button>
           
          <Button><Link to="./meetings">meetings</Link></Button>
          </div><br/>
        <Outlet />
   </>
    )

}
export default AdminPage
