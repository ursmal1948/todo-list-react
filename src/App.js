import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
    { id: 1, content: "Zrobić pranie", done: true },
    { id: 2, content: "Powtórzyć słówka", done: true },
];
const hideDoneTasks = false;

function App() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section title="Dodaj nowe zadanie"
                body={<Form />}
            />
            <Section title="Lista zadań"
                extraHeaderContent={
                    <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
                }
                body={
                    <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
                }
            />

        </Container>
    );
}

export default App;
