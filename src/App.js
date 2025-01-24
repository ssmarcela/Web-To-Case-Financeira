import React from "react";
import { Box, TextField, Button, MenuItem, Typography } from "@mui/material";

function App() {
    return (
        <Box
            component="form"
            action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00Daj00000L1nZv"
            method="POST"
            sx={{
                maxWidth: 500,
                margin: "20px auto",
                padding: 3,
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Typography variant="h4" component="h2" color="success" gutterBottom>
                Reportar Problemas com a sua Transação
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                Por favor, preencha os dados abaixo para reportar sua transação.
            </Typography>

            <input type="hidden" name="orgid" value="00Daj00000L1nZv" />
            <input type="hidden" name="retURL" value="http://google.com" />

            <TextField
                label="Nome do Contato"
                name="name"
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Telefone"
                name="phone"
                type="tel"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Descrição"
                name="description"
                fullWidth
                multiline
                rows={4}
                margin="normal"
            />
            <TextField
                label="Código da Transação"
                name="00Naj00000I8uvV"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Valor da Transação"
                name="00Naj00000I8vA1"
                type="number"
                fullWidth
                margin="normal"
            />
            <TextField
                select
                label="Tipo de Reclamação"
                name="00Naj00000I8vMw"
                fullWidth
                margin="normal"
            >
                <MenuItem value="">-- Nenhum --</MenuItem>
                <MenuItem value="Compra no cartão não reconhecida">
                    Compra no cartão não reconhecida
                </MenuItem>
                <MenuItem value="Outros">Outros</MenuItem>
                <MenuItem value="Pix enviado por engano">Pix enviado por engano</MenuItem>
                <MenuItem value="Transação desconhecida">Transação desconhecida</MenuItem>
            </TextField>

            <Button type="submit" variant="contained" color="success" fullWidth sx={{ marginTop: 2 }}>
                Enviar
            </Button>
        </Box>
    );
}

export default App;
