import { useState, useRef } from "react";
import {StyledForm, Input, Button } from "./styled";

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
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
            />
            <Button>
                {title}
            </Button>
        </StyledForm>
    );
};

export default Form;