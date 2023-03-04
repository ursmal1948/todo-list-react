import React, { useEffect, useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import { StyledContainer } from './Container/styled';
import { StyledHeader } from './Header/styled';
import { ThemeProvider } from 'styled-components';
import {theme} from "./theme"

const getInitialTasks = () => {
    const tasksFromLocalStorage = localStorage.getItem("tasks");

    return tasksFromLocalStorage
        ? JSON.parse(tasksFromLocalStorage)
        : [];
};

function App() {
    const [hideDone, setHideDone] = useState(false)
    const [tasks, setTasks] = useState(getInitialTasks); 

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone)
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }))
    }

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => (
            { ...task, done: true, }
        )));
    }

    const addNewTask = (newTaskContent) => {

        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };

    return (
        <ThemeProvider theme={theme}>
        <StyledContainer>
            <StyledHeader title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={
                <Form
                addNewTask={addNewTask}
                title="Dodaj zadanie" />
                }
            />
            <Section
                title="Lista zadań"
                extraHeaderContent={
                    <Buttons 
                    tasks={tasks}
                    hideDone={hideDone}
                    toggleHideDone={toggleHideDone}
                    setAllDone={setAllDone}
                    />
                }
                body=
                {
                    <Tasks
                        tasks={tasks}
                        hideDone={hideDone}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                    />
                }
            />
        </StyledContainer>
        </ThemeProvider>
    );
}

export default App;
