import { url } from "inspector"
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
          <div className="question">
            <h1>PORQUE APRENDER SOBRE ANCESTRALIDADE NEGRA?</h1>
          </div>
        </div>
        <div className="text">
          <div className="answer">
            <p>
              Aprender sobre ancestralidade negra  <span>é crucial por várias razões</span>, que incluem a valorização da identidade, o fortalecimento da comunidade, 
              a promoção da diversidade e inclusão, e a educação e conscientização.
            </p>

            <p>
              Conhecer a história e as raízes culturais <span>ajuda as pessoas negras a desenvolverem um senso de identidade e orgulho de sua herança</span>.  
              Promovendo o empoderamento ao proporcionar uma compreensão mais profunda de suas origens e realizações históricas. 
              Aumentando também  a <span>autoestima e a confiança</span>, especialmente entre os jovens, que muitas vezes podem sentir-se desconectados de sua herança cultural.
            </p>

            <p>
              Projetos de ancestralidade criam espaços para a construção de <span>redes de apoio e solidariedade</span> dentro da comunidade negra,
              permitem o compartilhamento de experiências e histórias que <span>reforçam laços comunitários</span>, fomentando  um ambiente acolhedor 
              e seguro onde membros da comunidade podem se expressar livremente. Contribuindo para o <span>desenvolvimento</span> de uma identidade comunitária forte e resiliente.
            </p>

            <p>
              Estudar e conhecer um pouco mais sobre a Ancestralidade Negra não só <span>enriquece</span> a compreensão individual e coletiva da história e cultura negras,
              mas também <span>fortalece</span> comunidades, promove a <span>diversidade e inclusão</span>, e educa o público sobre a importância de combater o racismo. Esses projetos 
              são essenciais para construir uma sociedade mais justa e equitativa, onde todos possam celebrar e <span>valorizar suas raízes</span> e <span>contribuições culturais</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="slider">
        <div className="title">pao de bata</div>
        
        <div className="card">
          <div className="info"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ut voluptatum similique temporibus ratione incidunt, mollitia iusto odit, veritatis illum harum necessitatibus libero nisi odio soluta. Consequatur nobis minima perferendis?</div>
        </div>
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
