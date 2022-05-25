import EmojiPicker from "./emojiPicker";
import { useRef } from "react";

import styles from "./emojiPicker.module.scss"

export default function EmojiPickerInput(){
     const InputRef = useRef(null);

    return ( 
        <div className={styles.inputContainer}>
        <input ref={InputRef}/>
        <EmojiPicker ref={InputRef}/>
     </div>
    );
}