import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/router";
import { AllProviders } from "./Providers/AllProviders";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <AllProviders>
              <Router />
          </AllProviders>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
