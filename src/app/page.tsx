"use client"
import dynamic from 'next/dynamic'

const CodeBlock = dynamic(() => import('./components/CodeBlock'));

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          API WILAYAH INDONESIA
        </p>
        <div className="fixed bottom-0 left-0 flex h-auto w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <span
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:p-0"
          >
            2023
          </span>
        </div>
      </div>
      <div className="mt-0 md:mt-20 grid grid-cols-1">
        <section className='hidden md:block mb-6 mx-auto'>
          <div className="alert bg-slate-400 mb-5 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Still on Development...</span>
          </div>
          <div className="stats shadow text-white">

            <div className="stat place-items-center">
              <div className="stat-title text-white">Provinsi</div>
              <div className="stat-value">38</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title text-white">Kota</div>
              <div className="stat-value">290</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title text-white">Kecamatan</div>
              <div className="stat-value">3962</div>
            </div>

          </div>
        </section>
        <section className='relative md:hidden mb-6 mt-16 text-center'>
          <div className="w-64 carousel rounded-box">
            <div className="carousel-item w-full">
              <div className="stats shadow w-full text-white">
                <div className="stat">
                  <div className="stat-title text-white">Provinsi</div>
                  <div className="stat-value">38</div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-full">
              <div className="stats shadow w-full text-white">
                <div className="stat">
                  <div className="stat-title text-white">Kota</div>
                  <div className="stat-value">290</div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-full">
              <div className="stats shadow w-full text-white">
                <div className="stat">
                  <div className="stat-title text-white">Kecamatan</div>
                  <div className="stat-value">3962</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <span>
            Data Provinsi
          </span>
          <CodeBlock language={"uri"} code={"\nhttps://region-indonesia.vercel.app/api/provinsi"} title={"Method : GET"} />
        </section>
        <section className='mt-5'>
          <span>
            Data Kota
          </span>
          <CodeBlock language={"uri"} code={"\nhttps://region-indonesia.vercel.app/api/kota?provinsi_id={provinsi_id}"} title={"Method : GET"} />
        </section>
        <section className='mt-5'>
          <span>
            Data Kecamatan
          </span>
          <CodeBlock language={"uri"} code={"\nhttps://region-indonesia.vercel.app/api/kecamatan?kota_id={kota_id}"} title={"Method : GET"} />
        </section>
        <div className='text-center mt-5 md:mb-5 mb-10'>
          <label htmlFor="modalUsage" className="btn">Contoh</label>
        </div>
      </div>
      <input type="checkbox" id="modalUsage" className="modal-toggle" />
      <div id="modalUsage" className="modal">
        <div className="modal-box">
          <label htmlFor="modalUsage" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</label>
          <h3 className="font-bold text-lg">Contoh Penggunaan</h3>
          <CodeBlock language={'javascript'} code={'\nasync function getDataKota(){\n const response = await fetch("https://region-indonesia.vercel.app/api/kota?provinsi_id=1");\n const data = await response.json();\n //Do something with the data\n}\ngetDataKota()'} title={"JS"} />
        </div>
      </div>
    </main >
  )
}
