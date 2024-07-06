import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="m-0 p-0 box-border font-roboto antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative overflow-x-hidden bg-slate-50 text-slate-950">
      <Header />
      <div>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
