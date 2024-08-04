import Header from "./components/header"


export default function Home() {
  return (
    <>
      <div className="header">
          <div className="menu"></div>
          <div className="middle">
            <div className="LogoProject">
              <div className="NameProject">
                <h1>PROJETO</h1>
                <div className="Ancestralidade">ANCESTRALIDADE NEGRA</div>
              </div>
              <div className="Logotipo">
                {/* imagem */}
              </div>
            </div>

            <div className="Merchan">
              <p>Relevando Histórias</p>
              <p>Construindo Futuros</p>
            </div>
          </div>
          <div className="register"></div>
      </div>
      <div className="intro">
        <div className="strap">
          <div className="arrow"></div>
          <div className="question"></div>
        </div>
        <div className="text"></div>

      </div>
      <div className="slider">
        <div className="title">pao de bata</div>
        
        <div className="card">
          <div className="info"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ut voluptatum similique temporibus ratione incidunt, mollitia iusto odit, veritatis illum harum necessitatibus libero nisi odio soluta. Consequatur nobis minima perferendis?</div>
        </div>
      </div>
      <div className="gallery">
        <div className="title">
         <h1>EVENTOS DA ULTIMA SEMANA</h1>
          <div className="underline">
            <div className="underlineTitleLeft"></div>
            <div className="underlineTitleRight"></div>
          </div>
        </div>
        <div className="pictures">
          <div className="galleryImg1"></div>

          <div className="galleryImg2"></div>

          <div className="galleryImg3"></div>

          <div className="galleryImg4"></div>
        </div>
      </div>
      <div>
          range
      </div>
      <div>
          formulario de escolas
      </div>
    </>
     
    
  );
}
