import { useState } from "react";
import { RouterApp } from "./router/routerApp";

function App() {
  //jhacer un loading mientras carga la pagina

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 4000);



  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <h1>Cargando...</h1>
        </div>
      ) : (
        <RouterApp />
      )}
    </div>

  );
}

export default App;
