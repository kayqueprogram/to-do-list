import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export default function Input({...rest}: InputProps) {
    return (
        <input {...rest} placeholder="Adicione uma nova tarefa" type="text" className='max-w-[638px] w-full p-4 text-gray-300 border border-gray-700 bg-gray-500 rounded'/>
    )
}