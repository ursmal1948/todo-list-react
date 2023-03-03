import { useState, useRef } from "react";
import "./style.css"

const Form = ({ title, addNewTask }) => {

    const inputRef = useRef(null)
    const setFocus = () => {
        inputRef.current.focus()
    }

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        trimmedNewTaskContent !== "" && (
            addNewTask(trimmedNewTaskContent)
        )
        setNewTaskContent("");
        setFocus();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                className="form__field"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <button
                onClick={setFocus}
                className="form__button">
                {title}
            </button>
        </form>
    )
};

export default Form;