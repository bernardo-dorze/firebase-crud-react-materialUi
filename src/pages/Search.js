// import React, { useState, useEffect } from "react";
// import { useLocation, Link, useParams } from "react-router-dom";
// import fireDb from "../firebase";
// import "./Search.css";

// const Search = () => {
//   const [data, setData] = useState({});

//   const useQuery = () => {
//     return new URLSearchParams(useLocation().search);
//   };

//   let query = useQuery();
//   let search = query.get("id");
//   console.log("search", search);

//   useEffect(() => {
//     searchData();
//   }, [search]);

//   const searchData = () => {
//     fireDb
//       .child(`clientes/${search}`)
//       .on("value", (snapshot) => {
//         if (snapshot.val()) {
//           const data = snapshot.val();
//           setData(data);
//         }
//       });
//   };
//   console.log(`clientes/${search}`);

//   return (
//     <>
//       <div style={{ marginTop: "100px" }}>
//         <table className="styled-table">
//           <thead>
//             <tr>
//               <th style={{ textAlign: "center" }}>No.</th>
//               <th style={{ textAlign: "center" }}>Nome</th>
//               <th style={{ textAlign: "center" }}>Cnpj</th>
//               <th style={{ textAlign: "center" }}>Bairro</th>
//               <th style={{ textAlign: "center" }}>Cep</th>
//               <th style={{ textAlign: "center" }}>Cidade</th>
//               <th style={{ textAlign: "center" }}>Endereço</th>
//               <th style={{ textAlign: "center" }}>Estado</th>
//               <th style={{ textAlign: "center" }}>Numero</th>
//               <th style={{ textAlign: "center" }}>Segmento da Empresa</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys([data]).map((id, index) => {
//               console.log(data);
//               return (
//                 <tr key={id}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{data.nome}</td>
//                   <td>{data.cnpj}</td>
//                   <td>{data.bairro}</td>
//                   <td>{data.cep}</td>
//                   <td>{data.cidade}</td>
//                   <td>{data.endereco}</td>
//                   <td>{data.estado}</td>
//                   <td>{data.numero}</td>
//                   <td>{data.segmentoEmpresa}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Search;
