# App

Gympass style app.

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
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;



## RNFs (Requisitos não-funcionais) --> Assuntos técnicos, qual tecnologia/estratégia será utilizada para tal ação

- [X] A senha do usuário precisa estar criptografada;
- [X] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [X] Todas as listas de dados precisam estar paginadas com até 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);