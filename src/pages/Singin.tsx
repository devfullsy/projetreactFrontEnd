import { useForm } from 'react-hook-form';
import bgImg from '../assets/kingk.jpg';

const Singin = () =>{

  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
      <section>
          <div className="register">
              <div className="col-1">
                  <h2>Sign In</h2>
                  <span>register and enjoy the service</span>
  
                  <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                      <input type="text" {...register("username")} placeholder='username' />
                      <input type="text" {...register("password")} placeholder='password' />
                      <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                      <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                      {errors.mobile?.type === "required" && "Mobile Number is required"}
                      {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                      <br /><button className='btn'>Sign In</button>
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
