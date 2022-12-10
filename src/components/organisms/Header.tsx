import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../../contexts/GlobalContext";

const Header = () => {
  const { count } = useGlobalContext();
  return (
    <Container style={{ background:"#003049"}}>
      <nav>
        <ul>  
          <li>
            <Link style={{ color: "white " }} to={"/singin"}>CREER UN COMPTE</Link>
          </li>
          <li>
            <Link style={{ color: "white " }} to={"/"}>PROGRAMME</Link>
          </li>
          <li>
            <Link style={{ color: "white " }} to={"/panier"}>Panier</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  border-bottom: 1px solid black;
  text-align: center;
  transition: all 0.2s ease;

  & ul {
    padding: 0;
    list-style-type: none;
  }

  & li {
    display: inline-block;
    padding: 4px 12px;
    border: 1px solid black;
    border-radius: 3px;
    margin: 0 12px;
  }
`;
