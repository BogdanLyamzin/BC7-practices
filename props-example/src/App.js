import HeaderMenu from "./components/HeaderMenu";

import data from "./data";

function App() {
  return (
    <div className="App">
      <HeaderMenu items={data.headerMenu} title="Верхнее меню" />
    {/*
        HeaderMenu({items: data.headerMenu, title: "Верхнее меню"})
    */}
    </div>
  );
}

export default App;
