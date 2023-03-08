import { Button, SectionButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
        tasks.length > 0 && (
            <SectionButtons>
                <Button
                    onClick={toggleHideDone}
                   >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button 
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </Button>
            </SectionButtons>
        ));
;

export default Buttons;
