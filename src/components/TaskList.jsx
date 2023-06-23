import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0){
        return (
            <h1 className="text-white text-4xl text-left font-bold">
                No hay tareas aún
            </h1>
        );
    }
    return (
        <div className="grid auto-rows-auto auto-cols-auto grid-cols-3 gap-4">
            {tasks.map((task) => (
                <TaskCard task={task} key={task.id} />
            ))}
        </div>
    );
};

export default TaskList;
