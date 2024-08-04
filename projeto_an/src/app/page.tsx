import Header from "./components/header"
import Slider from "./components/slider";


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
          <div className="arrowQuestion"></div>
          <div className="question"></div>
        </div>
        <div className="text"></div>

      </div>
      <div className="slider">
        <div className="title">pao de bata</div>
        
        <div className="card">
          <div className="info"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ut voluptatum similique temporibus ratione incidunt, mollitia iusto odit, veritatis illum harum necessitatibus libero nisi odio soluta. Consequatur nobis minima perferendis?</div>
        </div>

        <Slider></Slider>
      </div>
      <div className="gallery">
        <div className="title">batata de pao</div>
        <div className="pictures">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
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
