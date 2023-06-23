import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
    const [title, setTitle] = useState("");
    const [user, setUser] = useState("");
    const [taskInfo, setTaskInfo] = useState("");
    // Destructurando el objeto que devuelve useContext() para acceder a un valor
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (title === "") alert("El titulo de la tarea no puede estar vacío");
        // else if (user === "") alert("Debes ingresar tu usuario");
        // else if (taskInfo === "")
        //     alert("La información de la tarea no puede estar vacía");
        // else 
        createTask(title, user, taskInfo);
        setTitle("");
        setUser("");
        setTaskInfo("");
    };

    return (
        <div className="max-w-md mx-auto">
            <form
                onSubmit={handleSubmit}
                className="bg-slate-800 p-10 pb-6 mb-10 rounded-md"
            >
                <h1 className="text-white text-2xl font-bold mb-4">Add Task</h1>
                <input
                    type="text"
                    placeholder="Task Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus
                    className="bg-slate-200 p-2 w-full mb-2 text-lg rounded-sm outline-none text-gray-800"
                />
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    className="bg-slate-200 p-2 w-full mb-2 text-lg rounded-sm outline-none text-gray-800"
                />
                <textarea
                    placeholder="Task Info"
                    onChange={(e) => setTaskInfo(e.target.value)}
                    value={taskInfo}
                    className="bg-slate-200 p-2 w-full mb-2 text-lg rounded-sm outline-none text-gray-800"
                    style={{ resize: "none" }}
                ></textarea>
                <button className="bg-indigo-600 px-3 py-1 mt-2 text-white rounded-md hover:bg-indigo-500">
                    Guardar
                </button>
            </form>
        </div>
    );
};

export default TaskForm;
