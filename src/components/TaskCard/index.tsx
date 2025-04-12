import Trash from '../../assets/trash.svg';
import Checkbox from '../Checkbox';

interface TaskCardProps {
  title: string;
  isCompleted: boolean;
  removeTask: () => void
  completeTask: () => void;
}

export default function TaskCard({ title, isCompleted, removeTask, completeTask }: TaskCardProps) {
  return (
    <div className="p-4 flex gap-4 items-center justify-between bg-gray-500 border border-gray-400 rounded">
      <div className="flex gap-4 items-center">
        <Checkbox onClick={completeTask}  defaultChecked={isCompleted}/>
        <p className={`text-gray-100 ${isCompleted ? 'line-through' : ''}`}>{title}</p>
      </div>
      <button onClick={removeTask}>
        <img src={Trash} alt="Remover tarefa" />
      </button>
    </div>
  )
}