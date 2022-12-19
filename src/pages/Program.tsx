
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Program = () => {
  /*fetch('http://localhost:3001/programs/program')
        .then((response)=>{
          response.json()
          .then((resultat:any)=>{
              console.log(resultat);
          })
        });
*/

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
			      <tr><th>NIVEAU</th><th>SEANCES POUR DEBUTANTS</th><th>SEANCES POUR AVANCES</th><th>ALIMENTATION</th><th>SECHE</th><th>PRISE DE MASSE</th></tr>
		      </thead>
            {data.map((item:any)=>
		      <tbody key={item.id}>
			      <tr><td style={{ backgroundColor: '#003049' , color: 'white'}}>{item.niveau}</td><td>{item.seanceDebutant}</td><td>{item.seanceAvance}</td><td>{item.alimentation}</td><td>{item.seche}</td><td>{item.masse}</td></tr>
		      </tbody>)}
        </table>
      </div>
    </section>
  );
};

export default Program;
