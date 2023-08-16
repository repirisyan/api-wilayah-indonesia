"use client"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import { useState, useEffect } from "react";

const CopyBoard = (pre: any) => {

  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [copyTip, setCopyTip] = useState("Copy URL");

  return (
    <div className="relative">
      <span className='absolute p-2'>
        <small className='text-gray-100'>{pre.title}</small>
      </span>
      <button
        className="tooltip tooltip-left right-0 top-0 absolute p-2"
        data-tip={copyTip}
      >
        <CopyToClipboard
          text={pre.url}
          // eslint-disable-next-line
          onCopy={async () => {
            setCopyTip("Copied");
            await new Promise((resolve) => setTimeout(resolve, 500));
            setCopyTip(`Copy URL`);
          }}>
          <DocumentDuplicateIcon className="h-5 w-5 cursor-pointer hover:text-blue-600" />
        </CopyToClipboard>
      </button>
    </div>
  );
};

const CodeBlock = (context: any) => {
  return (
    <div>
      <CopyBoard url={context.code} title={context.title}></CopyBoard>
      <SyntaxHighlighter
        language=""
        style={oneDark}
        children={context.code}
      />
    </div>
  );
};

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
      <div className="mt-0 md:mt-20 grid grid-cols-1">
        <section className='hidden md:block mb-6 mx-auto'>
          <div className="alert bg-slate-400 mb-5 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Still on Development...</span>
          </div>
          <div className="stats shadow">

            <div className="stat place-items-center">
              <div className="stat-title">Provinsi</div>
              <div className="stat-value">38</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Kota/Kabupaten</div>
              <div className="stat-value">154</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Kecamatan</div>
              <div className="stat-value">1.953</div>
            </div>

          </div>
        </section>
        <section className='md:hidden mb-6 mx-auto text-center'>
          <div className="w-64 carousel rounded-box">
            <div className="carousel-item w-full">
              <div className="stats shadow w-full">
                <div className="stat">
                  <div className="stat-title">Provinsi</div>
                  <div className="stat-value">38</div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-full">
              <div className="stats shadow w-full">
                <div className="stat">
                  <div className="stat-title">Kota/Kabupaten</div>
                  <div className="stat-value">154</div>
                </div>
              </div>
            </div>
            <div className="carousel-item w-full">
              <div className="stats shadow w-full">
                <div className="stat">
                  <div className="stat-title">Kecamatan</div>
                  <div className="stat-value">1.953</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1>
            Data Provinsi
          </h1>
          <CodeBlock code={"\nhttps://region-indonesia.vercel.app/api/provinsi"} title={"Method : GET"} />
        </section>
        <section className='mt-5'>
          <h1>
            Data Kota
          </h1>
          <CodeBlock code={"\nhttps://region-indonesia.vercel.app/api/kota?provinsi_id={provinsi_id}"} title={"Method : GET"} />
        </section>
        <section className='mt-5'>
          <h1>
            Data Kecamatan
          </h1>
          <CodeBlock code={"\nhttps://region-indonesia.vercel.app/api/kecamatan?kota_id={kota_id}"} title={"Method : GET"} />
        </section>
        <div className='text-center mt-5'>
          <button className="btn" onClick={() => window.modalUsage.showModal()}>Contoh</button>
        </div>
      </div>
      <dialog id="modalUsage" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Contoh Penggunaan</h3>
          <CodeBlock code={"\n<script>\n async function getDataKota(){\n  const response = await fetch('https://region-indonesia.vercel.app/api/kota?provinsi_id=1');\n  const data = await response.json();\n  //Do something with the data \n }\n getDataKota();\n</script>"} title={"JS"} />
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="text-center mt-14">
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          &copy; 2023 repirisyan. All Right Reserved
        </p>
      </div>
    </main >
  )
}
