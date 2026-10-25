import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  /** Small label under the glyph, like on a real Mac key. */
  label?: string
  pressed?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'h-7 min-w-7 px-1.5 text-[13px] rounded-[7px]',
  md: 'h-11 min-w-11 px-2.5 text-[17px] rounded-[10px]',
  lg: 'h-16 min-w-[4.5rem] px-3 text-2xl rounded-[14px]',
}

/** A Mac-style key. Pressed keys sink a little and lose their bottom edge. */
export function Keycap({ children, label, pressed = false, size = 'md', className = '' }: Props) {
  return (
    <kbd
      className={`inline-flex flex-col items-center justify-center border border-line bg-paper font-sans font-medium text-midnight transition-all duration-100 ${sizes[size]} ${
        pressed
          ? 'translate-y-[2px] shadow-[inset_0_1px_2px_rgb(14_26_51/0.12)]'
          : 'shadow-[0_2px_0_0_var(--color-stone-300),0_3px_6px_-2px_rgb(14_26_51/0.12)]'
      } ${className}`}
    >
      <span className="leading-none">{children}</span>
      {label && (
        <span className="mt-1 text-[9px] font-normal leading-none tracking-wide text-stone-500">{label}</span>
      )}
    </kbd>
  )
}
