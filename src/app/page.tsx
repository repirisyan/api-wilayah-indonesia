"use client"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import { useState } from "react";

const CopyBoard = (pre: any) => {

  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [copyTip, setCopyTip] = useState("Copy URL");

  return (
    <div className="relative">
      <span className='absolute p-2'>
        <small className='text-gray-100'>Method : GET</small>
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
      <CopyBoard url={context.code}></CopyBoard>
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
      <div className="mt-20 grid grid-cols-1">
        <section>
          <h1>
            Data Provinsi
          </h1>
          <CodeBlock code={"\n https://region-indonesia.vercel.app/api/provinsi"} />
        </section>
        <section className='mt-5'>
          <h1>
            Data Kota
          </h1>
          <CodeBlock code={"\n https://region-indonesia.vercel.app/api/kota?provinsi_id={id_provinsi}"} />
        </section>
        <section className='mt-5'>
          <h1>
            Data Kecamatan
          </h1>
          <CodeBlock code={"\n https://region-indonesia.vercel.app/api/kecamatan?kota_id={id_kota}"} />
        </section>
      </div>

      <div className="text-center mt-14">
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          &copy; 2023 repirisyan. All Right Reserved
        </p>
      </div>
    </main >
  )
}
