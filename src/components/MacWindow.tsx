import type { ReactNode } from 'react'

/** A plain macOS window frame. */
export function MacWindow({
  title,
  children,
  className = '',
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-paper shadow-[0_1px_0_0_rgb(255_255_255),0_30px_60px_-20px_rgb(14_26_51/0.28),0_12px_24px_-12px_rgb(14_26_51/0.18)] ${className}`}
    >
      <div className="relative flex h-10 items-center border-line border-b bg-mist px-4">
        <div className="flex gap-2" aria-hidden>
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="-translate-x-1/2 absolute left-1/2 font-medium text-[13px] text-stone-600">
          {title}
        </span>
      </div>
      {children}
    </div>
  )
}
