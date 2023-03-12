import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import { Container } from "./Container/index";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { useTasks } from "./useTasks";
import { GlobalStyle } from "./styles/globalStyles";
import { Header } from "./Header/index"

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const {
    tasks, 
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks()

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Container>
        <Header>Lista zadań</Header>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} title="Dodaj zadanie" />}
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
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
