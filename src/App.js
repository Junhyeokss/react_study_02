import Content01 from "./components/Content01";
import Content02 from "./components/Content02";
import Content03 from "./components/Content03";
import Footer from "./components/Footer";
import Header from "./components//Header";
import { Link, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import { Data } from "./data/Data";
import { useEffect, useState } from "react";

const App = () => {
  const [itm, setItm] = useState([]);
  const getItm = async () => {
    const itm = await fetch(
      "https://desipossa.github.io/shop_cra/assets/data.json"
    ).then((r) => r.json());
    console.log(itm);
    setItm(itm);
  };

  useEffect(() => {
    getItm();
  }, []);

  return (
    <>
      <Header />
      <section>
        {itm.slice(130, 150).map((it) => {
          return (
            <div>
              <Link to={`/Detail/${it.id}`}>
                <img src={it.image_link}></img>
              </Link>
            </div>
          );
        })}
      </section>
      <Routes>
        <Route path="/" element={<Content01 />} />
        <Route path="/01" element={<Content01 />} />
        <Route path="/02" element={<Content02 />} />
        <Route path="/03" element={<Content03 />} />
        <Route path="/Detail/:id" element={<Detail itm={itm} />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
