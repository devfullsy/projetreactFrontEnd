
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Program = () => {
const [data,setdata]= useState([]);
const fetchdata = () =>{
  axios.get('http://localhost:3001/programs/program')
        .then((res)=>{
          setdata(res.data);
        });
}

  useEffect(()=>{
    fetchdata();
  });

  return (
    <section>
      <div>
        <table>
          <thead>
			      <tr><th>NIVEAU</th><th>NOMBRES DE SEANCES </th><th>ALIMENTATION</th><th>SECHE</th><th>PRISE DE MASSE</th></tr>
		      </thead>
            {data.map((item:any)=>
		      <tbody key={item.id}>
			      <tr><td style={{ backgroundColor: '#003049' , color: 'white'}}>{item.niveau}</td><td>{item.seances}</td><td>{item.alimentation}</td><td>{item.seche}</td><td>{item.masse}</td></tr>
		      </tbody>)}
        </table>
      </div>
      <div>
        <Link to={"/commentaire"}>
        <button style={{ backgroundColor: '#003049' , color: 'white'}} className='btn' id="btnid"> donner votre avis </button>
        </Link>
      </div>
    </section>
  );
};

export default Program;
