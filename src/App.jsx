import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
    return (
        <main>
            <div className="container mx-auto p-10">
                <TaskForm />
                <TaskList />
            </div>
        </main>
    );
};

export default App;
