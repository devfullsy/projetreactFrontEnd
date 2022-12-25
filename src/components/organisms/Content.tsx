import { Route, Routes } from "react-router-dom";
import Acceuil from "../../pages/Acceuil";
import Commentaire from "../../pages/Commentaire";
import Login from "../../pages/Login";
import Program from "../../pages/Program";
import Singin from "../../pages/Singin";

const Content = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="singin" element={<Singin />} />
      <Route path="program" element={<Program />} />
      <Route path="commentaire" element={<Commentaire/>} />
      <Route path="" element={<Acceuil/>} />
    </Routes>
  );
};

export default Content;
