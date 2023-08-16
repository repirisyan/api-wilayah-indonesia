import React from "react";
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import { useState } from "react";

const CopyBoard = (props: any) => {

    //eslint-disable-next-line react-hooks/rules-of-hooks
    const [copyTip, setCopyTip] = useState("Copy Code");

    return (
        <div className="relative">
            <span className='absolute p-2'>
                <small className='text-gray-100'>{props.title}</small>
            </span>
            <button aria-label='Button Copy Code'
                className="tooltip tooltip-left right-0 top-0 absolute p-2"
                data-tip={copyTip}
            >
                <CopyToClipboard
                    text={props.url}
                    // eslint-disable-next-line
                    onCopy={async () => {
                        setCopyTip("Copied");
                        await new Promise((resolve) => setTimeout(resolve, 500));
                        setCopyTip(`Copy Code`);
                    }}>
                    <DocumentDuplicateIcon className="h-5 w-5 cursor-pointer hover:text-blue-600" />
                </CopyToClipboard>
            </button>
        </div>
    );
};

const CodeBlock = (props: any) => {
    return (
        <div>
            <CopyBoard url={props.code} title={props.title}></CopyBoard>
            <SyntaxHighlighter
                language={props.language}
                style={oneDark}
                children={props.code}
            />
        </div>
    );
};

export default CodeBlock;