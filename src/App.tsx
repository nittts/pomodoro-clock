import Router from "./routes/index.routes";
import Global from "./styles/globalStyle";

function App() {
  return (
    <div className="App">
      <Global />
      <Router />
    </div>
  );
}

export default App;
