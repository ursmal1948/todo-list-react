import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
    { id: 1, content: "Zrobić pranie", done: true },
    { id: 4, content: "Pójść na spacer", done: false },
    { id: 2, content: "Powtórzyć gramatyke", done: true },
];
const hideDone = false;

function App() {
    const [hideDone, setHideDone] = useState(false)

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone)
    };

    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form title="Dodaj zadanie" />}
            />
            <Section
                title="Lista zadań"
                extraHeaderContent={
                    <Buttons tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                    />
                }
                body={
                    <Tasks tasks={tasks} hideDone={hideDone} />
                }
            />

        </Container>
    );
}

export default App;
