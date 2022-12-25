import { useForm} from 'react-hook-form';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () =>{
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) =>{
    const mail=data.email;
    const pwd=data.password;
    Axios.get(`http://localhost:3001/users/${mail}/${pwd}`)
    .then(resp => {
        
      navigate("/program");    
    });

  };
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>SE CONNECTER</h2>
                
                <span>tous les champs sont oubligatoires </span>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                  <input type="email"       {...register("email", { required : true })} placeholder='email   *' />
                  {errors.email?.type === "required" && "l'email est obligatoire "}
                  <input type="password"    {...register("password",{ required : true })} placeholder='mot de passe *' />
                  {errors.password?.type === "required" && "le mot de passe est obligatoire "}
                  
                  <button style={{ backgroundColor: '#003049' , color: 'white'}} className='btn'>CONNEXION</button>
                  
                </form>
            </div>
        </div>
    </section>
  ) ;
};

export default Login;
