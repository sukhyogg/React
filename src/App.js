import Form from "./Components/Form";
import Data from "./Components/Data";

function App() {
  return (
    <>
    <h3 style={{textAlign: "center"}}>JSON Server Example</h3>
    <div>&nbsp;</div>
    <div className="container-fluid">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-3">
        <Form />
      </div>
      <div class="col-sm-3">
        <Data />
      </div>
      <div class="col-sm-3"></div>
    </div>
    </div>

    </>
  );
}

export default App;
