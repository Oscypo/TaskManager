interface Task {
	title: string;
	completed: boolean;
}
interface Props {
	tasks: Task[];
	onComplete: (task: Task) => void;
}
function TasksDisplay({ tasks, onComplete }: Props) {
	return (
		<ul className="bg-gray-100 rounded-lg shadow-lg mt-4 flex flex-col">
			<h1 className="text-3xl font-bold text-gray-800 border-b-2 p-4 bg-gradient-to-r from-gray-100 to-gray-300">
				Your Tasks
			</h1>
			{tasks.length == 0 && <p className="p-4">No tasks yet...</p>}
			{tasks.map((task: Task) => {
				return (
					<li
						key={task.title}
						onClick={() => onComplete(task)}
						className=" p-4 border-b-1 cursor-pointer bg-white"
					>
						{task.title} {task.completed ? "✅" : "❌"}
					</li>
				);
			})}
		</ul>
	);
}

export default TasksDisplay;
