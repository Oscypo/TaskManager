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
		<form
			className="bg-white p-8 rounded-lg shadow-lg "
			onSubmit={(e) => handleSubmit(e)}
		>
			<h1 className="text-3xl font-bold text-gray-800 text-center">
				Task Manager
			</h1>
			<input
				className="border-2 border-gray-300 p-2 rounded-lg w-full mt-4"
				type="text"
				value={task}
				placeholder="Add task"
				onChange={(e) => setTask(e.target.value)}
			/>
		</form>
	);
}

export default TaskInput;
