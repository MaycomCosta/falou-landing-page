const APPS = [
  'WhatsApp',
  'Discord',
  'Slack',
  'Notes',
  'Gmail',
  'Notion',
  'Instagram',
  'Google Docs',
  'ChatGPT',
  'VS Code',
]

/** "Works anywhere you can type" strip. Plain names, no logos. */
export function WorksIn() {
  return (
    <div className="border-line border-y">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-5 py-6 sm:px-8">
        <span className="text-[13px] text-stone-500">Works anywhere you can type:</span>
        {APPS.map((a) => (
          <span key={a} className="font-medium text-[14px] text-stone-600">
            {a}
          </span>
        ))}
      </div>
    </div>
  )
}
