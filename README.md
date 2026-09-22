# 🧮 Calculadora em React

Uma calculadora simples e funcional construída com **React**, no estilo visual de uma calculadora de celular (fundo escuro, botões redondos e display no topo).

## ✨ Funcionalidades

- Operações básicas: soma, subtração, multiplicação e divisão
- Uso de parênteses para expressões mais complexas
- Cálculo de porcentagem
- Botão **AC** para limpar o display
- Botão **=** para calcular o resultado da expressão
- Tratamento de erro: exibe `Error` caso a expressão digitada seja inválida

## 🛠️ Tecnologias

- [React](https://react.dev/) (via [Create React App](https://github.com/facebook/create-react-app))
- [Material UI](https://mui.com/) (`@mui/material`) — usado para o container responsivo
- CSS puro para a estilização da calculadora

## 📁 Estrutura do Projeto

\```
Calculadora-em-React-master/
├── public/
│   └── index.html
└── src/
    ├── App.js                     # Componente raiz, renderiza a Calculadora
    ├── App.css
    ├── index.js                   # Ponto de entrada da aplicação
    └── components/
        ├── calculadora.jsx        # Lógica e interface da calculadora
        └── calculadora.css        # Estilos da calculadora
\```

## 🚀 Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) instalado.

\```bash
# Clone o repositório
git clone https://github.com/<seu-usuario>/Calculadora-em-React.git

# Entre na pasta do projeto
cd Calculadora-em-React

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
\```

A aplicação estará disponível em `http://localhost:3000`.

### Outros comandos

\```bash
npm run build   # Gera a versão de produção
npm test        # Roda os testes
\```

## 💡 Como usar

1. Clique nos números e operadores para montar a expressão desejada
2. Use `%` para transformar o valor atual em porcentagem
3. Clique em `=` para calcular o resultado
4. Clique em `AC` para limpar o display e começar de novo

## ⚠️ Observação técnica

O cálculo da expressão é feito atualmente com `eval()`, que funciona bem para o propósito de aprendizado deste projeto, mas **não é recomendado em aplicações de produção** por questões de segurança (permite execução de código arbitrário). Uma evolução natural seria substituir por uma biblioteca de avaliação de expressões matemáticas segura, como [`mathjs`](https://mathjs.org/) ou [`expr-eval`](https://www.npmjs.com/package/expr-eval).

## 📌 Possíveis melhorias futuras

- Substituir `eval()` por um parser de expressões seguro
- Suporte a teclado (digitar números/operadores sem clicar)
- Histórico de cálculos
- Testes automatizados cobrindo a lógica da calculadora
