import { useState } from 'react';
import { tv, VariantProps } from 'tailwind-variants'

import Check from '../../assets/check.svg';

const variant = tv({
  base: 'w-4 h-4 rounded-full cursor-pointer flex items-center justify-center',
  variants: {
    defaultChecked: {
      true: 'bg-purple-dark border-none',
      false: 'border border-blue'
    }
  },
  defaultVariants: {
    defaultChecked: false
  }
})

type CheckboxProps = {
  onClick?: () => void;
} & VariantProps<typeof variant>;

export default function Checkbox({ defaultChecked = false, onClick }: CheckboxProps) {
  const [checked, setChecked] = useState(defaultChecked)

  const toggleCheck = () => {
    setChecked(!checked)
    
    if(onClick) {
      onClick()
    }
  }

  return (
    <div onClick={toggleCheck} className={variant({ defaultChecked: checked })}>
      {checked && <img src={Check} alt="is completed" />}
    </div>
  )
}