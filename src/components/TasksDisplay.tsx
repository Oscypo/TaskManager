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
		<ul className="task-list">
			{tasks.map((task: Task) => {
				return (
					<li key={task.title} onClick={()=>onComplete(task)}>
						{task.title} {task.completed ? "✅" : "❌"}
					</li>
				);
			})}
		</ul>
	);
}

export default TasksDisplay;
