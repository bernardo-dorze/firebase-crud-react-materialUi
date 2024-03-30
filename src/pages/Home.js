import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Home = () => {
  const [data, setData] = useState({});
  // const [search, setSearch] = useState("");

  // const navigate = useNavigate();

  useEffect(() => {
    fireDb.child("clientes").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, []);

  const onDelete = (id) => {
    if (window.confirm("Tem certeza que deseja deletar este cliente ?")) {
      fireDb.child(`clientes/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Cliente deletado com sucesso!");
        }
      });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate(`/search?id=${search}`);
  //   setSearch("");
  // };
  return (
    <div style={{ marginTop: "100px" }}>
      <Link to="/novo">
        <Button
          variant="outlined"
          size="Large"
          sx={{ margin: 3, fontSize: 18 }}
        >
          NOVO
        </Button>
      </Link>
      {
        // Ferramenta de pesquisa:
      }
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputField"
          placeholder="Digite o id do cliente..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form> */}
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Nome</th>
            <th style={{ textAlign: "center" }}>Cnpj</th>
            <th style={{ textAlign: "center" }}>Bairro</th>
            <th style={{ textAlign: "center" }}>Cep</th>
            <th style={{ textAlign: "center" }}>Cidade</th>
            <th style={{ textAlign: "center" }}>Endereço</th>
            <th style={{ textAlign: "center" }}>Estado</th>
            <th style={{ textAlign: "center" }}>Numero</th>
            <th style={{ textAlign: "center" }}>Segmento da Empresa</th>
            <th style={{ textAlign: "center" }}>Ação</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].nome}</td>
                <td>{data[id].cnpj}</td>
                <td>{data[id].bairro}</td>
                <td>{data[id].cep}</td>
                <td>{data[id].cidade}</td>
                <td>{data[id].endereco}</td>
                <td>{data[id].estado}</td>
                <td>{data[id].numero}</td>
                <td>{data[id].segmentoEmpresa}</td>
                <td>
                  <IconButton aria-label="delete" onClick={() => onDelete(id)}>
                    <DeleteIcon />
                  </IconButton>
                  <Link to={`/view/${id}`}>
                    <IconButton aria-label="view">
                      <VisibilityIcon />
                    </IconButton>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
