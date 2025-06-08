import TaskInput from "./components/TaskInput";
import { useState } from "react";
import TasksDisplay from "./components/TasksDisplay";

interface Task {
	title: string;
	completed: boolean;
}
function App() {
	function handleComplete(taskToComplete: Task) {
		setTasks(
			tasks.map((task) =>
				task.title == taskToComplete.title ? { ...task, completed: true } : task
			)
		);
	}
	let [tasks, setTasks] = useState<Task[]>([]);
	return (
		<>
			<TaskInput
				onAddTask={(task: string) =>
					setTasks([...tasks, { title: task, completed: false }])
				}
			></TaskInput>
			<TasksDisplay
				tasks={tasks}
				onComplete={(task: Task) => handleComplete(task)}
				onDelete={(tasktoDelete: Task) =>
					setTasks(tasks.filter((task) => task.title !== tasktoDelete.title))
				}
			></TasksDisplay>
		</>
	);
}

export default App;
