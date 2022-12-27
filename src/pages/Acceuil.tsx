import styled from "styled-components";
import { Link } from "react-router-dom";

const Acceuil = () => {
  return (
    <Section>
      <h1>PRESENTATION DU SITE</h1>
      <main>
        <p style={{ color: "black" }} >
          bienvenue sur votre site de conseil de musculartion. <br />
          Sur ce site vos aurai toutes les informations qui vous permettrons de bien <br />
          apprehender le monde de la musculation.
          vous aurez des programmes de sport et un programme alimentaire <br />
          pour chaque niveau, que vous soyez debutant ou avancé.

        </p>
      </main>
      <div>
        <label>J'accepte les conditions</label>
        <input type="checkbox" id="" name="" /><br />
        <Link style={{ color: "white " }} to={"/Singin"}>CREER UN COMPTE</Link>
      </div>
    </Section>

  );
};

export default Acceuil;

const Section = styled.main`
  border-bottom: 1px black;
  transition: all 0.2s ease;

 
`;