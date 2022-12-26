import { ThemeProvider } from "./components/themeProvider/ThemeProvider";
import { Router } from "./Router";

export const App = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};
