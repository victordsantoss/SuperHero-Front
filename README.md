<h1 align="center">
    <br>Super Hero - Front<br/>
    ReactJS
</h1>

# 🚀 O Projeto

Esse projeto consiste no consumo da [SuperHero Api ](https://akabab.github.io/superhero-api/api/) para listar, favoritar, editar e excluir personagens. 

<a id="tecnologias"></a>

# 🔩 Tecnologias
- [React.js](https://pt-br.reactjs.org/)
- [Docker](https://www.docker.com/)

# 🔩 Screenshots

<div>
    <h2>Home Page</h2>
    <img src="./src/assets/screenshots/home.png" width="700px">
    <h2>Busca</h2>
    <img src="./src/assets/screenshots/search.png" width="700px">
    <h2>Detalhes</h2>
    <img src="./src/assets/screenshots/inspect.png" width="700px">
    <h2>Favoritos</h2>
    <img src="./src/assets/screenshots/favorites.png" width="700px">
    <h2>Mobile - Home</h2>
    <img src="./src/assets/screenshots/mobile-home.png" width="400px">
    <h2>Mobile - Favorites</h2>
    <img src="./src/assets/screenshots/mobile-favorites.png" width="400px">
    <h2>Navegação Mobile</h2>
    <video src="https://user-images.githubusercontent.com/52058094/197916595-cc8e7588-518a-4619-b38f-dd6ab7f49244.mov" controls="controls" style="maxwidth: 730px;">

</div>


## 🏃 Executando
> Usando Docker-Compose:
``` shell
docker-compose up
```
> Usando dockerfile:
``` shell
docker build -t super-hero-front ./  
```
``` shell
docker run --name super-hero-front-container -p 3000:3000 super-hero-front
```
> Usando npm diretamente:
``` shell
npm install (lembrando de estar com o node v16.11)
```
``` shell
npm start
```