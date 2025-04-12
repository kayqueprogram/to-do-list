import { Task } from "../../App"

interface InfoProps {
  tasks: Task[]
}

export default function Info({ tasks }: InfoProps) {
  return (
    <div className='max-w-[736px] w-full mt-16 flex items-center justify-between'>
      <div className='flex gap-4 items-center'>
        <p className='text-blue font-bold'>Tarefas criadas</p>
        <span className="px-4 py-1 rounded-full bg-gray-400">
          <p className='text-xs text-gray-200 font-bold'>
            {tasks.length}
          </p>
        </span>
      </div>
      <div className='flex gap-4 items-center'>
        <p className='text-purple font-bold'>Tarefas criadas</p>
        <span className="px-4 py-1 rounded-full bg-gray-400">
          <p className='text-xs text-gray-200 font-bold'>
            {tasks.filter(task => task.isCompleted ?? task).length}
          </p>
        </span>
      </div>
    </div>
  )
}