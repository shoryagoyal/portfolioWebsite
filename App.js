import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AchievementsList from "./components/Achievement/AchievementsList";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <h1>Home</h1>
      <AchievementsList />
      <Footer />
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Home />);
