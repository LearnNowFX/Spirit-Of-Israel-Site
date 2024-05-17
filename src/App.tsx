import { useStyles } from "./app.style";
import { ROUTES } from "./routes/routes";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const styles = useStyles();

  return (
    <div style={styles.container}>
      <BrowserRouter>
        <Header />
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
