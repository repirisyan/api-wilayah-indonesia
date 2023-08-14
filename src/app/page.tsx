import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          API WILAYAH INDONESIA
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/repirisyan98/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By repirisyan
          </a>
        </div>
      </div>

      <div className="relative mt-20 grid grid-cols-1 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <section>
          <h1>
            GET Data Provinsi
          </h1>
          <p>
            <code className='font-bold'>https://wilayah-indonesia-api.vercel.app/api/provinsi</code>
          </p>
        </section>
        <section className='mt-5'>
          <h1>
            GET Data Kota
          </h1>
          <p><code className='font-bold'>https://wilayah-indonesia-api.vercel.app/api/kota/provinsi_id</code></p>
          <p
            className="inline-block mt-2 whitespace-nowrap rounded-[0.27rem] bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-neutral-50 dark:bg-neutral-900">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              &nbsp;provinsi_id di dapat dari id data provinsi
            </div>
          </p>
        </section>
        <section className='mt-5'>
          <h1>
            GET Data Kecamatan
          </h1>
          <p><code className='font-bold'>https://wilayah-indonesia-api.vercel.app/api/kecamatan/kota_id</code></p>
          <p
            className="inline-block mt-2 whitespace-nowrap rounded-[0.27rem] bg-neutral-800 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-neutral-50 dark:bg-neutral-900">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              &nbsp;kota_id di dapat dari id data kota
            </span>
          </p>
        </section>
      </div>

      <div className="text-center mt-24">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Powered By :
          <Image className='invert mx-auto my-3'
            src="/vercel.svg"
            width={80}
            height={80}
            alt="Vercel Logo"
          />

        </h2>

        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          &copy; 2023 repirisyan. All Right Reserved
        </p>
      </div>
    </main>
  )
}
