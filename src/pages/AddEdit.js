import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddEdit.css";
import fireDb from "../firebase";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const initialState = {
  nome: "",
  cnpj: "",
  bairro: "",
  cep: "",
  cidade: "",
  endereco: "",
  estado: "",
  numero: "",
  segmentoEmpresa: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const {
    nome,
    cnpj,
    bairro,
    cep,
    cidade,
    endereco,
    estado,
    numero,
    segmentoEmpresa,
  } = state;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !nome ||
      !cnpj ||
      !bairro ||
      !cidade ||
      !endereco ||
      !estado ||
      !numero ||
      !segmentoEmpresa ||
      !cep
    ) {
      toast.error("Por favor preencha todos os dados");
    } else {
      fireDb.child("clientes").push(state, (err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Cliente adicionado com sucesso");
        }
      });
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="text"
          name="nome"
          label="Nome"
          placeHolder="Seu nome aqui"
          value={nome}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          type="number"
          id="cnpj"
          name="cnpj"
          placeholder="Seu cnpj aqui"
          value={cnpj}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          type="text"
          id="bairro"
          name="bairro"
          placeholder="Seu bairro aqui"
          value={bairro}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          type="number"
          id="cep"
          name="cep"
          placeholder="Seu cep aqui"
          value={cep}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          type="text"
          id="cidade"
          name="cidade"
          placeholder="Sua cidade aqui"
          value={cidade}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          type="text"
          id="endereco"
          name="endereco"
          placeholder="Seu endereço aqui"
          value={endereco}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          type="text"
          id="estado"
          name="estado"
          placeholder="Seu estado aqui"
          value={estado}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          type="number"
          id="numero"
          name="numero"
          placeholder="Seu numero aqui"
          value={numero}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          type="text"
          id="segmentoEmpresa"
          name="segmentoEmpresa"
          placeholder="Segmento da sua empresa aqui"
          value={segmentoEmpresa}
          onChange={handleInputChange}
          variant="outlined"
          sx={{ marginBottom: 1 }}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ margin: 6 }}
        >
          SALVAR
        </Button>
      </form>
    </div>
  );
};

export default AddEdit;
