import AsidePanel from "../asidePanel/AsidePanel";
import MainDashboard from "../mainDashboard/MainDashboard";
import "./App.scss";

const App = () => {
  return (
    <main>
      <div className="main-wrapper">
        <AsidePanel />
        <MainDashboard />
      </div>
    </main>
  );
};

export default App;
