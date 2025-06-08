import { useState } from "react";

interface Props {
	onAddTask: (task: string) => void;
}
function TaskInput({ onAddTask }: Props) {
	let [task, setTask] = useState("");
	function handleSubmit(e: any) {
		e.preventDefault();
		setTask("");
		task != "" && onAddTask(task);
	}
	return (
		<form className="task-input" onSubmit={(e) => handleSubmit(e)}>
			<h1>Add A Task</h1>
			<input
				type="text"
				value={task}
				placeholder="Add task"
				onChange={(e) => setTask(e.target.value)}
			/>
		</form>
	);
}

export default TaskInput;
