import { ButtonHTMLAttributes } from 'react';
import Plus from '../../assets/plus.png'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{

}

export default function Button({ ...rest }: ButtonProps) {
  return (
    <button {...rest} className="p-4 flex gap-2 items-center justify-center] bg-blue-dark text-gray-100 rounded">
      Criar <img src={Plus} alt="Add new task" />
    </button>
  );
}
