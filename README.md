# Web-To-Case Financeira

Este projeto foi desenvolvido utilizando React e integra um formulário Web-to-Case com Salesforce, permitindo que clientes reportem problemas relacionados a transações financeiras, como PIX não reconhecidos ou incorretos.

## 🎯 Objetivo

O formulário coleta dados do cliente e envia diretamente para a Salesforce, criando automaticamente registros no objeto Case para análise e atendimento.

---

## 📋 Funcionalidades

-**1- Formulário Responsivo:

- **Campos essenciais para reportar problemas:
- **Nome do contato.
- **E-mail.
- **Telefone.
- **Descrição do problema.
- **Código e valor da transação.
- **Validação básica nos campos obrigatórios.
- **Integração com Salesforce:

- **2- Dados enviados via Web-to-Case criam automaticamente um registro no objeto Case.
- **Campos configurados para suportar o fluxo de atendimento.
- **Estilização Moderna com Material-UI:

- **3- Uso de componentes como TextField, Button e Typography.
- **Design responsivo e profissional.
  
---

## 🛠️ Tecnologias Utilizadas

- **React: Para a criação de uma interface dinâmica e responsiva.
- **Material-UI (MUI): Para estilização e design moderno do formulário.
- **Salesforce Web-to-Case: Integração direta com Salesforce para criação automática de casos.
- **Git/GitHub: Para controle de versão e armazenamento do código.

---

## **⚙️ Scripts Disponíveis**
No diretório do projeto, você pode executar:

### **`npm start`**
Inicia o app no modo de desenvolvimento.  
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

- A página será recarregada automaticamente ao fazer alterações no código.
- Possíveis erros e mensagens do lint aparecerão no console.

### **`npm run build`**
Cria o app para produção na pasta `build`.  
- O app é otimizado para melhor performance.
- Os arquivos são minificados e possuem hashes nos nomes.
  
---

## **📌 Próximos Passos**
- Adicionar validações personalizadas no formulário.
- Enviar um template de e-mail para o endereço inserido no formulário com os dados submetidos e uma estimativa de tempo de resposta após a criação do caso na Salesforce.
- Criar um componente personalizado para que uma pessoa possa selecionar as transações que deseja tratar e indicar se serão aprovadas ou não.
- Enviar um e-mail ao usuário informando a aprovação ou rejeição da transação, incluindo o motivo.

---

Visualização do Formulário

<img width="725" alt="image" src="![alt text](image-1.png)" />

Preenchimento das Informações

<img width="721" alt="image" src="![alt text](image-2.png)" />

Registro criado na Salesforce no objeto Caso(Case).

<img width="730" alt="image" src="![alt text](image-3.png)" />
