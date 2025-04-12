
import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import Info from './components/Info'
import Input from './components/Input'
import Header from './components/Header'
import Button from './components/Button'
import EmptyCard from './components/EmptyCard'
import TaskCard from './components/TaskCard'

export interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');

  const createTask = () => {
    const newTask: Task[] = [...tasks, { id: uuid(),title, isCompleted: false }]

    setTasks(newTask)
    setTitle('')
  }

  const removeTask = (id: string) => {
    const currentTasks = tasks.filter(task => task.id !== id);

    setTasks(currentTasks)
  }

  const completeTask = (id: string) => {
    const task = tasks.find(item => item.id === id);

    if(!task) {
      return;
    }

    task.isCompleted = !task.isCompleted;

    const currentTasks = tasks.filter(task => task.id !== id);

    setTasks([...currentTasks, task])
  }

  return (
    <div className="w-full">
      <Header />
      <main className="w-full flex flex-col items-center">
        <div className="-mt-8 max-w-[736px] w-full flex gap-2 items-center justify-center">
          <Input value={title} onChange={e => setTitle(e.target.value)}/>
          <Button onClick={createTask}/>
        </div>

        <Info tasks={tasks} />

        <div className="max-w-[736px] w-full mt-6 flex flex-col gap-3">
          {tasks.length <= 0 ? <EmptyCard /> : tasks.map(task => (
            <TaskCard 
              key={task.id} 
              title={task.title} 
              isCompleted={task.isCompleted} 
              removeTask={() => removeTask(task.id)} 
              completeTask={() => completeTask(task.id)}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
