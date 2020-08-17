import React from 'react';

function HelloMessage(props) {
  return (
      <html lang='en'>
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="/stylesheets/index.css" />
            <script src="/javascripts/script.js"></script>
            <title>About-me</title>
        </head>
        <body>
            <header>
                <nav class="nav-bar">
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#portifolio">Portifólio</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
                </nav>
            </header>
            <div class="buttom-top" >
                <a href="#top" title="Go to top!"
                >
                <img src="assets/top.png" alt="to top icon"/>
                </a>
            </div>
            <div class="divisor-menu-content">
                
                {/* <!-- <nav class="menu-nav">
                    <h1>Menu</h1>
                    <ul>
                    <li><a href="http://">Sobre</a></li>
                    <li><a href="http://">Portifólio</a></li>
                    <li><a href="http://">Contato</a></li>
                    </ul>
                </nav> --> */}
                <div class="div-main-ajustment">
                <main id="sobre" class="main-content">
                    <h1>Sobre mim</h1>

                    <div class="content">
                    <h1>Markus Douglas N. Siqueira</h1>
                    <h2>Jr. Fullstack developer</h2>
                    <div class="image-transform">
                        <img src="assets/facebook perfil.jpg" alt="facebook foto perfil" />
                    </div>

                    <h3>Quem eu sou?</h3>
                    <p>
                        Sou uma pessoa simples, alguém apaixonado por tecnologias, amo
                        programar e descobrir coisas novas. Tenho 23 anos, estou
                        terminando minha faculdade de Sistema de Informação, e em busca de
                        uma oportunidade para ingressar no mercado de Ti.
                    </p>
                    <h3>De onde eu sou?</h3>
                    <p>
                        Nascido em Castanhal, estado do Pará.
                    </p>
                    <h3>Quais tecnologias estou estudando atualmente?</h3>
                        <ul>
                        <li>Node.js com express.js (backend)</li>
                        <li>
                            ReactJS com styledComponents, Redux e etc... (frontend)
                        </li>
                        <li>React Native (mobile)</li>
                        </ul>
                        <br/>
                        <p>
                        Este site foi construído durante a
                        <a href="https://www.alura.com.br/imersao-css">Imersão CSS da Alura</a>
                        😻
                        </p>
                    </div>
                </main>
                <main id ="portifolio" class="main-content">
                    <h1>Portifólio</h1>

                    <div class="content">
                    <div class="galery">
                        <figure class="around-image">
                            <img src="assets/images/projetosemomni09.jpg" alt="semana Omnistack 09"/>
                            <a  href="https://github.com/makusdouglas/semanaOmnistack09">
                            <figcaption>semana Omnistack 09</figcaption>
                            </a>
                        </figure>
                        
                        <figure class="around-image">
                        <img src="assets/images/semanomnistack10.png" alt="semana Omnistack 10"/>
                        <a href="https://github.com/makusdouglas/SemanaOmnistack10">
                            <figcaption>semana Omnistack 10</figcaption>
                        </a>
                        </figure>
                        <figure class="around-image">
                        <img src="assets/images//semanaomnistack11.jpg" alt="semana Omnistack 11"/>
                        <a href="https://github.com/makusdouglas/semana-omnistack-11">
                            <figcaption>semana Omnistack 11</figcaption>
                        </a>
                        </figure>
                        <figure class="around-image">
                        <img src="assets/images/bootcamp.png" alt="Projetos bootcamp"/>
                        <a href="https://github.com/makusdouglas/Bootcamp-7.0">
                            <figcaption><p> Módulos Bootcamp Rocketseat</p></figcaption>
                        </a>
                        </figure>
                        <figure class="around-image">
                        <img src="assets/images/ux-design.jpg" alt="Aprendendo Design UX"/>
                        <a href="">
                            <figcaption>Aprendendo Design UX</figcaption>
                        </a>
                        </figure>
                        <figure class="around-image">
                        <img src="assets/images/reactnavite.png" alt="Jr. em React Native"/>
                        <a href="">
                            <figcaption>Jr. em React Native</figcaption>
                        </a>
                        </figure>
                        <figure class="around-image">
                        <img src="assets/images/reactjs.jpg" alt="Jr. em React JS"/>
                        <a href="">
                            <figcaption>Jr. em React JS</figcaption>
                        </a>
                        </figure>

                        <figure class="around-image">
                            <img src="assets/images/nodejs.png" alt="Jr. em Node.js"/>
                            <a href="">
                            <figcaption>Jr. em Node.js</figcaption>
                            </a>
                        </figure>
                    </div>
                    </div>
                </main>
            </div>
            </div>
            <footer id="contato" class="footer-bar">
                
                <h1 id="follow-me">Me acompanhe nas redes sociais:</h1>
                
            
                <section class="footer-divisor">
                <ul class="footer-icon-links">
                    <li>
                    <a href="https://www.instagram.com/markusdouglas_/">
                        <img class="icon" src="assets/insta-colored.svg" alt="instagram icon" />
                        <img src="assets/insta-name.svg" alt="instagram @" />
                    </a>
                    </li>
                    <li><a href="https://www.facebook.com/MKdouglasSK">
                        <img class="icon" src="assets/facebook.svg" alt="facebook icon" />
                        <img src="assets/MKdouglasSK.svg" alt="Facebook user" />
                    </a>
                    </li>
                    <li><a href="https://github.com/makusdouglas">
                        <img class="icon" src="assets/github.svg" alt="github icon" />
                        <img src="assets/github-name.svg" alt="github name" />
                    </a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/markus-douglas-nascimento-siqueira-8a3532165/">
                        <img class="icon" src="assets/linkedin.svg" alt="Linkedin icon" />
                        <img src="assets/linkedin-name.svg" alt="Linkedin name" />
                    </a>
                    </li>

                </ul>

                <ul class="footer-list">
                    <h2>Contatos</h2>
                    <li>Telefone: (91) 9 9163-9833</li>
                    <li>Email principal: makusdouglas@gmail.com</li>
                    <li>Email secundário: makusdouglas@hotmail.com</li>
                    
                </ul>
                </section>
                <div class="footer-bottom">
                <h1 id="my-name">Markus Douglas Nascimento Siqueira</h1>
                <div class="footer-bottom-icons">
                    <a href="https://www.instagram.com/markusdouglas_/">
                    <img src="assets/insta-colored.svg" alt="instagram icon" />
                    </a>
                    <a href="https://www.facebook.com/MKdouglasSK">
                    <img src="assets/facebook.svg" alt="facebook icon" />
                    </a>
                    <a href="https://github.com/makusdouglas">
                    <img src="assets/github.svg" alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/markus-douglas-nascimento-siqueira-8a3532165/">
                    <img src="assets/linkedin.svg" alt="Linkedin icon" />
                    </a>
                </div>
                </div>
            </footer>
        </body>

      </html>
  )

}

export default HelloMessage;