import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Filter from "./components/Filter";
import AddItem from "./components/AddItem";
import "./index.css";

import Footer from "./components/Footer";

const appStyle = {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "7rem 5rem 1fr 4rem auto",
};

function App() {
    const [items, setItems] = useState([]);

    return (
        <div style={appStyle}>
            <Header />
            <AddItem setItems={setItems} />
            <ItemList items={items} />
            <Filter />
            <Footer />
        </div>
    );
}

export default App;
