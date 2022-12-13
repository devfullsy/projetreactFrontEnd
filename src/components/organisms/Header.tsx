import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container style={{ background:"#003049"}}>
      <nav>
        <ul> 
          <li>
            <Link style={{ color: "white " }} to={"/"}>HOME</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  border-bottom: 1px solid black;
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
