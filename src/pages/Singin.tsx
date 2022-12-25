import { useForm } from 'react-hook-form';
import bgImg from '../assets/kingk.jpg';
import { useNavigate } from "react-router-dom";
import Axios from 'axios';

const Singin = () =>{

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data: any) => {
      await Axios.post('http://localhost:3001/users/',{
        nom:data.nom,
        prenom:data.prenom,
        email:data.email,
        password:data.password,
        niveau:data.niveau,
        poid:data.poid,
        commentaire:''
      }).then(resp => {  
        navigate("/singin");    
      });
      };
    
    
    return (
      <section>
          <div className="register">
              <div className="col-1">
                  <h2>CREER UN COMPTE</h2>
                  <span>tous les champs sont oubligatoires </span>
  
                  <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"        {...register("nom",{ required : true })} placeholder='nom     *' /> 
                    {errors.nom?.type === "required" && "le nom est obligatoire "}                 
                    <input type="text"        {...register("prenom", { required : true })} placeholder='prenom  *' />
                    {errors.prenom?.type === "required" && "le prenom est obligatoire "}
                    <input type="email"       {...register("email", { required : true })} placeholder='email   *' />
                    {errors.email?.type === "required" && "l'email est obligatoire "}
                    <input type="password"    {...register("password",{ required : true })} placeholder='mot de passe *' />
                    {errors.password?.type === "required" && "le mot de passe est obligatoire "}
                    <input type="text"    {...register("niveau",{ required : true })} placeholder='niveau (débutant ou avancé) *' />
                    {errors.niveau?.type === "required" && "le niveau est obligatoire "}
                    <input type="number"      {...register("poid", { required : true })} placeholder='poid    *' /> 
                    {errors.poid?.type === "required" && "le poid est obligatoire "}
                      <button style={{ backgroundColor: '#003049' , color: 'white'}}  className ='btn'>Creer un compte</button>
                  </form>
  
              </div>
              <div className="col-2">
                <img src={bgImg} alt="" />
              </div>
          </div>
      </section>
    ) ;
};

export default Singin;
