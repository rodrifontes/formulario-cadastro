import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
                name="senha"
                label="E-mail"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                id="senha"
                name="senha"
                onBlur={validarCampos}
                label="Senha"
                type="password"
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                required
                variant="outlined"
                margin="normal"
                fullWidth />
            <Button
                type="submit"
                variant="contained"
                color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;