import Clipboard from '../../assets/clipboard.png'

export default function EmptyCard() {
  return (
    <div className="px-6 py-16 border-t border-t-gray-400 rounded flex flex-col items-center justify-center">
      <img className='mb-4' src={Clipboard} alt="Crie novas tarefas" />
      <strong className='text-gray-300'>
        Você ainda não tem tarefas cadastradas
        <span>
          <p className="font-normal">Crie tarefas e organize seus itens a fazer</p>
        </span>
      </strong>
    </div>
  )
}