import { useState } from "react";
import styles from "../styles/AddItem.module.css";
import Emoji from "./Emoji";

function AddItem(props) {
    const { setItems } = props;
    const [item, setItem] = useState({ packed: false, count: 1, name: "" });

    function hadleCountChange(e) {
        setItem((item) => ({ ...item, count: +e.target.value }));
    }

    function handleNameChange(e) {
        setItem((item) => ({ ...item, name: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setItems((items) => [...items, item]);
        setItem({ packed: false, count: 1, name: "" });

        // Get Items from Local Storage
        // const items = JSON.parse(localStorage.getItem("travel-list")) || [];

        // // Add newItems into items
        // items.push(item);

        // // Set updated items to LocalStorage
        // localStorage.setItem("travel-list", JSON.stringify(items));
    }

    return (
        <div className={styles.addItem}>
            <p>
                What do you need for your <Emoji txt="😍" /> trip ?
            </p>
            <form onSubmit={handleSubmit}>
                <select onChange={hadleCountChange} value={item.count}>
                    {new Array(10).fill(0).map(function (_, index) {
                        return (
                            <option value={`${index + 1}`} key={index}>
                                {index + 1}
                            </option>
                        );
                    })}
                </select>

                <input
                    type="text"
                    value={item.name}
                    onChange={handleNameChange}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddItem;
