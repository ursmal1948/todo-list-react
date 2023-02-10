import { useState } from "react";
import "./style.css"

const Form = ({ title, addNewTask}) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
            event.preventDefault();
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                className="form__field"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <button className="form__button">{title}</button>
        </form>
    )
};

export default Form;