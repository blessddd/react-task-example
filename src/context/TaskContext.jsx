import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);

    const createTask = (taskTitle, username, taskInfo) => {
        let indice = tasks.length + 1;
        if(taskTitle === "" && username === "" && taskInfo === ""){
            setTasks([
                ...tasks,
                {
                    id: tasks.length,
                    title: `Task ` + indice,
                    user: "unknown",
                    taskInfo: "El usuario fue tan pajero que no agrego ni la info de la tarea"
                },
            ]);
        }
        else if(taskInfo !== ""){
            setTasks([
                ...tasks,
                {
                    id: tasks.length,
                    title: "Task " + indice,
                    user: "unknown",
                    taskInfo
                },
            ]);
        }
        else if(username !== ""){
            setTasks([
                ...tasks,
                {
                    id: tasks.length,
                    title: "Task " + indice,
                    user : username,
                    taskInfo: "El usuario fue tan pajero que no agrego ni la info de la tarea"
                },
            ]);
        } 
        else if(taskTitle !== ""){
            setTasks([
                ...tasks,
                {
                    id: tasks.length,
                    title: taskTitle,
                    user : "unknown",
                    taskInfo: "El usuario fue tan pajero que no agrego ni la info de la tarea"
                },
            ]);
        }
        else if(taskInfo === "") {
            setTasks([
                ...tasks,
                {
                    id: tasks.length,
                    title: taskTitle,
                    user: username,
                    taskInfo: "El usuario fue tan pajero que no agrego ni la info de la tarea"
                },
            ]);
        }
        else if(username === "") {
            setTasks([
                ...tasks,
                {
                    id: tasks.length,
                    title: taskTitle,
                    user: "unknown",
                    taskInfo,
                },
            ]);
        }
        else if (taskTitle === "") {
            setTasks([
                ...tasks,
                {
                    id: tasks.length,
                    title: "Task " + indice,
                    user: username,
                    taskInfo
                },
            ]);
        }
        else {
            setTasks([
                ...tasks,
                {
                    id: tasks.length,
                    title: taskTitle,
                    user: username,
                    taskInfo
                },
            ]);
        }
    };
    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                createTask,
                deleteTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
};
