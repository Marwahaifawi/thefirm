import "./App.css";
import { dashboardTheme } from "./dashboardTheme";
import Router from "./routes";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={dashboardTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
