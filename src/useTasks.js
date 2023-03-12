
import { useLocalStorageState } from "./useLocalStorageState"; 

export const useTasks = () => {

    const [tasks, setTasks] = useLocalStorageState()

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };
    
    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => (
            task.id === id ? {...task, done:!task.done} : task
        )
        ))
    };
    
    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => (
            { ...task, done: true, }
        )));
    };
    
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

    return {tasks, removeTask, toggleTaskDone, setAllDone, addNewTask};

};