import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/MyCard";
import Heder from "./components/Heder";
import MyFooter from "./components/Footer";

function App() {
  return (
    <>
      <div className="title-css">
        <Heder title="Adopta un perrito" />
      </div>
      <main className="mycard-css">
        <Cards
          className="card"
          image="https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg"
          title="Buddy"
          text="
          Buddy es un perro juguetón y amigable. Su pelaje suave y claro 
          te hará querer acariciarlo todo el tiempo. Es el compañero perfecto para cualquier hogar."
          color="success"
          tagText="Galés Corgi"
        />
        <Cards
          image="	https://cdn.pixabay.com/photo/2016/01/29/20/54/dog-1168663_1280.jpg"
          title="Daisy"
          text="
          Daisy es una perrita enérgica y llena de vitalidad. 
          Con su pelaje marron y su nariz negra, te hará sonreír todos los días. 
          ¿Listo para darle a Daisy un hogar amoroso?"
          color="primary"
          tagText="Bernhardiner"
        />
        <Cards
          image="	https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036_1280.jpg"
          title="Rex"
          text="
          Rex es un perrito tranquilo y cariñoso. lo convierten en un perro único. Está listo para convertirse en tu compañero constante."
          color="danger"
          tagText=" Labrador"
        />
        <Cards
          image="	https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_1280.jpg"
          title="Lucy"
          text="
          Lucy es una perra inteligente y leal. Su pelaje suave y color miel brilla al sol. 
          ¿Quieres darle a Lucy un hogar donde pueda sentirse amada?"
          color="warning"
          tagText="Galés Corgi"
        />
      </main>
      <footer className="footer-css">
        <MyFooter
          footer="
              ¡Bienvenido a nuestra Galería de Adopción! Aquí, encontrarás una
              amplia variedad de adorables amigos peludos y emplumados que están
              buscando un hogar amoroso. Cada animal en nuestra galería tiene su
              propia historia única y está ansioso por encontrar a su familia
              perfecta. Explora nuestra galería y conoce a perros juguetones,
              gatos cariñosos, conejos simpáticos, pájaros encantadores y muchos
              otros compañeros leales que están listos para compartir su amor
              contigo. En nuestra misión de unir a personas con mascotas, hemos
              reunido a estos rescatados y adoptables que buscan cariño y
              atención.
           
              "
        />
      </footer>
    </>
  );
}

export default App;
