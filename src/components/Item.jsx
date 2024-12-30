import Emoji from "./Emoji";
import styles from "../styles/Item.module.css";

function Item(prop) {
    const { count, name, packed } = prop;

    return (
        <div className={styles.item}>
            <input type="checkbox" id={name} checked={packed} />
            <label htmlFor={name}>
                <span>
                    {count} {name}
                </span>
            </label>
            <button>
                <Emoji txt="❌" />
            </button>
        </div>
    );
}

export default Item;
