import { Outlet } from "react-router-dom";
import HeaderApp from "../../shared/header";
import FooterApp from "../../shared/footer";
import UserProvider from "../../shared/authcontext";
const LayoutApp = () => {
  return (
    <UserProvider>
      <HeaderApp />
      <Outlet />
      <FooterApp />
    </UserProvider>
  );
};

export default LayoutApp;
