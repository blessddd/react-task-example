import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
    const { deleteTask } = useContext(TaskContext);

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md max-w-md">
            <h1 className="font-bold text-2xl capitalize overflow-hidden">
                {task.title}
            </h1>
            <h2 className="text-sm text-gray-200 py-2 overflow-hidden whitespace-normal">
                User: {task.user}
            </h2>
            <h3 className="text-sm text-gray-400 overflow-hidden whitespace-normal">
                Task Info: {task.taskInfo}
            </h3>
            <button
                className="bg-red-500 px-2 py-1 mt-4 rounded-md hover:bg-red-400"
                onClick={() => deleteTask(task.id)}
            >
                Eliminar Tarea
            </button>
        </div>
    );
};

export default TaskCard;
