import { Link } from "react-router-dom";

const Acceuil = () => {
    return (
      <section>
        <div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br /> 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br />
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            </p>
      </div>
      <div>
      <Link style={{ color: "grey " }} to={"/Singin"}>Creer un compte</Link>
      </div>
      </section>  
      
    );
  };
  
  export default Acceuil;
  