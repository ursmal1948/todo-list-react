import { useState, useRef } from "react";
import {StyledForm, Field, Button } from "./styled";

const Form = ({ title, addNewTask, className }) => {

    const inputRef = useRef(null)
    const setFocus = () => {
        inputRef.current.focus();
    };

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        trimmedNewTaskContent !== "" && (
            addNewTask(trimmedNewTaskContent)
        );
        setNewTaskContent("");
        setFocus();
    };

    return (
        <StyledForm className={className} onSubmit={onFormSubmit}>
            <Field
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button
                onClick={setFocus}
                >
                {title}
            </Button>
        </StyledForm>
    );
};

export default Form;