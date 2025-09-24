# Projeto: Random Node Customizado para n8n

Este repositório contém um **conector customizado para o n8n**, chamado **Random**, que gera números verdadeiramente aleatórios utilizando a API do [Random.org](https://www.random.org/).

O node recebe dois parâmetros: `Min` e `Max`, ambos inteiros, e retorna um número aleatório dentro desse intervalo.

---

## 📦 Instalar Dependências

No diretório do seu node customizado (`.n8n/custom/n8n-nodes-random`), execute:

```bash
npm install
Isso instalará todas as dependências necessárias para o node.

🚀 Executar o Serviço Localmente (Docker)
1. Subir infraestrutura com Docker Compose

Na raiz do projeto, execute:

docker-compose up -d


Isso criará dois serviços:

n8n: disponível em http://localhost:5678

PostgreSQL: banco de dados utilizado pelo n8n.

2. Parar a infraestrutura

Para parar o serviço:

docker-compose down

⚙ Configurar o Ambiente

As variáveis de ambiente estão definidas no arquivo docker-compose.yml:

environment:
  DB_TYPE: postgresdb
  DB_POSTGRESDB_HOST: postgres
  DB_POSTGRESDB_PORT: 5432
  DB_POSTGRESDB_DATABASE: n8n
  DB_POSTGRESDB_USER: n8n
  DB_POSTGRESDB_PASSWORD: n8n
  N8N_SECURE_COOKIE: "false"
  N8N_BASIC_AUTH_ACTIVE: "true"
  N8N_BASIC_AUTH_USER: admin
  N8N_BASIC_AUTH_PASSWORD: admin
  N8N_CUSTOM_EXTENSIONS: /home/node/.n8n/custom
  N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS: "true"
  N8N_RUNNERS_ENABLED: "true"
  N8N_BLOCK_ENV_ACCESS_IN_NODE: "false"


Certifique-se de que o caminho configurado em N8N_CUSTOM_EXTENSIONS aponta corretamente para a pasta onde seu node customizado está.

🧪 Executar Testes

Não há testes unitários automatizados inclusos neste projeto por enquanto.
Para validar o node:

Compile o código:

npm run build


Reinicie o container do n8n:

docker-compose down
docker-compose up -d


Abra o editor do n8n:

http://localhost:5678


Crie um workflow, adicione o node Random, configure Min e Max e execute.

📄 Estrutura do Projeto
Desafio-custom-node-n8n/
├── docker-compose.yml
├── .n8n/
│   └── custom/
│       └── n8n-nodes-random/
│           ├── src/
│           │   └── Random.node.ts
│           ├── dist/
│           │   ├── Random.node.js
│           │   └── index.js
│           ├── package.json
│           ├── tsconfig.json
│           └── random.svg
├── README.md

ℹ Informações Adicionais

Sempre que modificar o código do node, execute:

npm run build


Certifique-se de reiniciar o n8n após alterações no node:

docker-compose down
docker-compose up -d


O node Random utiliza a API do Random.org
 para gerar números verdadeiramente aleatórios.