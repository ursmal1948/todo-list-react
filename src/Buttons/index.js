import React from 'react';
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => {
    return tasks.length > 0 && (
        <div className="section__buttons">
            <button className="buttons__button hideShowButton">
                {hideDoneTasks === false ? "Ukryj" : "Pokaż"} ukończone
            </button>
            <button className=" buttons__button completeAllButton"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;
