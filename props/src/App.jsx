import "./App.css";
import Card from "./components/Card";

function App() {
  const cardFun = (e) => {
   return (
      alert(e)
   )
  };
  return (
    <>
    
      <section className="flex flex-col justify-center items-center m-10 mt-60 p-2 w-full h-screen">
        <Card
          name="SAAD"
          eaduction="Staff Engineer, Algolia"
          para="I am saad and i am Good boy"
          img="https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          cardFun={cardFun}
        />
        <Card
          name="Rosy"
          eaduction="Engineering from japan"
          para="I am Rosy and i am bad boy"
          img="https://images.pexels.com/photos/950208/pexels-photo-950208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          cardFun={cardFun}
        />
        <Card
          name="James"
          eaduction="Engineering from paris"
          para="I am James and i am prety boy"
          img="https://images.pexels.com/photos/981980/pexels-photo-981980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          cardFun={cardFun}
        />
      </section>
    </>
  );
}

export default App;
