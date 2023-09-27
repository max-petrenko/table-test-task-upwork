import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex items-center justify-between flex-col gap-10'>
      <h2 className='m-5 text-4xl font-semibold text-center'>
        Welcome to the site built as a test assignment for an Upwork posting
      </h2>
        <Link
          href="/table"
          className="inline-block bg-gradient-to-b from-inherit to-zinc-800/30 hover:to-zinc-600/30 to-100% p-4 group rounded-lg border border-neutral-800 transition-colors duration-500"
        >
          <h2 className='text-xl no-wrap'>
            Click to see the table created according to the requirements
            <span className="leading-none ml-3 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ➜
            </span>
          </h2>
        </Link>
    </div>
  )
}
