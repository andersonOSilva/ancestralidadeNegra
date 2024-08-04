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
      <div>
          slide
      </div>
      <div>
          galeria
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
