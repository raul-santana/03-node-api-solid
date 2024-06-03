# Gympass Style App 💪🏻🚀

Este projeto consiste no desenvolvimento de uma aplicação para check-ins em academias. Durante o desenvolvimento, foram abordados conceitos como SOLID, Design Patterns, uso de Docker para iniciar o banco de dados, JWT e Refresh Token, RBAC, TDD e diversos outros conceitos.


## RFs (Requisitos funcionais) --> Ação que deve acontecer

- [X] Deve ser possível se cadastrar;
- [X] Deve ser possível se autenticar;
- [X] Deve ser possível obter o perfi de um usuário logado;
- [X] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [X] Deve ser possível o usuário obter o seu histórico de check-ins;
- [X] Deve ser possível o usuário buscar academias próximas;
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [X] Deve ser possível o usuário realizar check-in em uma academia;
- [X] Deve ser possível validar o check-in de um usuário;
- [X] Deve ser possível cadastrar uma academia


## RNs (Regras de negócios) --> Condições para acontecer ou não

- [X] O usuário não deve poder se cadastrar com um e-mail já cadastrado;
- [X] O usuário não pode fazer 2 check-ins no mesmo dia;
- [X] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;



## RNFs (Requisitos não-funcionais) --> Assuntos técnicos, qual tecnologia/estratégia será utilizada para tal ação

- [X] A senha do usuário precisa estar criptografada;
- [X] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [X] Todas as listas de dados precisam estar paginadas com até 20 itens por página;
- [X] O usuário deve ser identificado por um JWT (JSON Web Token);



## ⚒️ Tecnologias Utilizadas

    - **Fastify**
    - **Prisma**
    - **PostgreSQL**
    - **bcryptjs**
    - **zod**
    - **vitest**

## 🆘 Como Executar o Projeto

### Pré-requisitos

- Docker e Docker Compose instalados
- Node.js e npm instalados

### Passos para execução

1. Clone o repositório:
    ```bash
    git clone https://github.com/raul-santana/03-node-api-solid
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd 03-node-api-solid
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o Docker Compose para configurar o banco de dados:
    ```bash
    docker-compose up -d
    ```
5. Configure as variáveis de ambiente no arquivo `.env` com as informações necessárias.
6. Execute as migrações do banco de dados:
    ```bash
    npm run prisma migrate dev
    ```
7. Inicie a aplicação em modo de desenvolvimento:
    ```bash
    npm run dev
    ```
8. Para compilar a aplicação:
    ```bash
    npm run build
    ```
9. Para iniciar a aplicação em produção:
    ```bash
    npm start
    ```
10. Para rodar os testes unitários:
    ```bash
    npm run test
    ```
11. Para rodar os testes unitários em modo watch:
    ```bash
    npm run test:watch
    ```
12. Para rodar os testes de integração:
    ```bash
    npm run test:e2e
    ```
13. Para rodar os testes de integração em modo watch:
    ```bash
    npm run test:e2e:watch
    ```
14. Para verificar a cobertura de testes:
    ```bash
    npm run test:coverage
    ```
15. Para rodar os testes com interface gráfica:
    ```bash
    npm run test:ui
    ```
16. Para fazer o linting do código:
    ```bash
    npm run lint
    ```

## 🚀 Contribuições

Contribuições são bem-vindas! Por favor, siga os passos abaixo para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-nova-funcionalidade`.
3. Faça as alterações desejadas e adicione testes quando necessário.
4. Commit suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`.
5. Faça o push para a branch: `git push origin minha-nova-funcionalidade`.
6. Envie um pull request.