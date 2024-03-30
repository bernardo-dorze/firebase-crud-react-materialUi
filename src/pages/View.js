import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { useParams, Link } from "react-router-dom";
import "./View.css";
import Button from "@mui/material/Button";

const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fireDb
      .child(`clientes/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);

  console.log("user", user);
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>Detalhes do cliente</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Nome: </strong>
          <span>{user.nome}</span>
          <br />
          <br />
          <strong>Cnpj: </strong>
          <span>{user.cnpj}</span>
          <br />
          <br />
          <strong>Bairro: </strong>
          <span>{user.bairro}</span>
          <br />
          <br />
          <strong>Cep: </strong>
          <span>{user.cep}</span>
          <br />
          <br />
          <strong>Cidade: </strong>
          <span>{user.cidade}</span>
          <br />
          <br />
          <strong>Endereco: </strong>
          <span>{user.endereco}</span>
          <br />
          <br />
          <strong>Estado: </strong>
          <span>{user.estado}</span>
          <br />
          <br />
          <strong>Numero: </strong>
          <span>{user.numero}</span>
          <br />
          <br />
          <strong>Segmento da empresa: </strong>
          <span>{user.segmentoEmpresa}</span>
          <br />
          <br />
          <Link to="/">
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ marginBottom: 2 }}
            >
              VOLTAR
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
