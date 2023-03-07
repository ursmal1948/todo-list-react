import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import { StyledContainer } from "./Container/styled";
import { StyledHeader } from "./Header/styled";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { useTasks } from "./useTasks";
import { GlobalStyle } from "./styles/globalStyles";

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
      <StyledContainer>
        <GlobalStyle />
        <StyledHeader title="Lista zadań" />
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
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
