import React from "react";
import styles from "../styles/Filter.module.css";

function Filter() {
    return (
        <div className={styles.filter}>
            <select>
                <option value="input-order">Sort by Input Order</option>
                <option value="description">Sort by Description</option>
                <option value="status">Sort by Status</option>
            </select>

            <button>Clear List</button>
        </div>
    );
}

export default Filter;
