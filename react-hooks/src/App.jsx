// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// Custom CSS
import "./App.css";
// Pages & Components
// import BasicHooks from './pages/BasicHooks'
// import LogInLogOut from "./pages/LogInLogOut";
import CreateReadDelete from "./pages/CRD";

function App() {

  return (
    <>
      {/* <BasicHooks/> */}
      {/* <LogInLogOut/> */}
      <CreateReadDelete/>
    </>
  );
}

export default App;
