import { useState, useEffect } from "react";

export const useLocalStorageState = () => {
    const getInitialTasks = () => 
JSON.parse(localStorage.getItem("tasks")) || [] ;

const [tasks, setTasks] = useState(getInitialTasks); 
    
useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks])

    return [tasks, setTasks]
}