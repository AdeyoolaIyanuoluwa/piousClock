import "./index.scss";
import { React,ReactDOM, App, RootWrapper } from "./_root-imports";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootWrapper>
      <App />
    </RootWrapper>
  </React.StrictMode>
);
