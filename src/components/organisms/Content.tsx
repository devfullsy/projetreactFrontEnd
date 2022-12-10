import { Route, Routes } from "react-router-dom";
import { useGlobalContext } from "../../contexts/GlobalContext";
import Login from "../../pages/Login";
import MenuPage from "../../pages/MenuPage";
import Singin from "../../pages/Singin";

const Content = () => {
  const { incrementCount } = useGlobalContext();
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="singin" element={<Singin />} />
      <Route path="" element={<MenuPage incrementCount={incrementCount} />} />
      <Route path="panier" element={<div>Mon panier</div>} />
    </Routes>
  );
};

export default Content;
