<h1 align="center" >
  <img src=".github/logo.png" title="FastFeet" width="200px"/>
</h1>

<h3 align="center">FastFeet - Sistema de gerenciamento de uma transportadora ficticia.</h3>

<p align="center">
  <img align="center" src=".github/mobile.png" border="0" height="300"/>

  <img align="center" src=".github/mobileDashboard.png" border="0" height="300" style="margin: 10px"/>

  <img align="center" src=".github/details.png" border="0" height="300"/>
</p>
<p align="center">
  <img align="center" src=".github/dashboard.png" border="0" height="300"/>
</p>

<h2>💾 Instalação</h2>

<h3> Instalação - Backend</h3>

<h4>1. Configurando Docker</h4>

 - Crie um database PostgresSQL e redis
 - Crie um arquivo .env seguindo o formato do .env.example


<h4>2. Execute os comandos abaixo</h4>

```bash
# Clone o repositório
$ git clone https://github.com/rodrigosakamoto/FastFeet.git

# Em seguida execute:

$ cd FastFeet
$ cd backend

$ yarn

$ yarn sequelize db:migrate
$ yarn sequelize db:seed:all

$ yarn dev
$ yarn queue
```

<h3> Instalação - Frontend 💻 </h3>

<h4>Execute os comandos abaixo</h4>

```bash
$ cd FastFeet
$ cd web

# Em seguida execute:

$ yarn

$ yarn start
```


<h3> Instalação - Mobile 📱(Android) </h3>

<h4>Execute os comandos abaixo</h4>

```bash
$ cd FastFeet
$ cd mobile
# Em seguida execute:

$ yarn

$ yarn android
$ yarn start
```


---
By [Rodrigo Sakamoto](https://www.linkedin.com/in/rodrigo-sakamoto/) 
