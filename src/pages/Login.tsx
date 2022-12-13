import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Axios from 'axios';

const Login = () =>{
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) =>{
    const mail=data.email;
    const pwd=data.password;
   // Axios.get(`localhost:3001/users/${mail}/${pwd}`)
   /* Axios.get('http://localhost:3001/users/',{
      params :{
        email :mail,
        password:pwd
      }
    })*/
    Axios.get(`http://localhost:3001/users/${mail}/${pwd}`)
    .then(res=>{
      console.log(res);
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
                  <Link to={"/program"}>
                  <button style={{ backgroundColor: '#003049' , color: 'white'}} className='btn'>CONNEXION</button>
                  </Link>
                </form>
            </div>
        </div>
    </section>
  ) ;
};

export default Login;
