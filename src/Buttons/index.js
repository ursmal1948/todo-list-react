import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    return (
        tasks.length > 0 && (
            <div className="section__buttons">
                <button
                    onClick={toggleHideDone}
                    className="buttons__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}

                >
                    Ukończ wszystkie
                </button>
            </div>
        ))
};

export default Buttons;
