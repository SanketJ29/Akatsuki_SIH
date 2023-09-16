import React, { useRef } from "react";

const CodeBlockWithCopyButton = ({ code }) => {
  const codeBlockRef = useRef(null);

  const copyCode = () => {
    const codeToCopy = codeBlockRef.current.textContent;

    const textArea = document.createElement("textarea");
    textArea.value = codeToCopy;
    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);

    alert("Code copied to clipboard!");
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center my-14">
      <pre ref={codeBlockRef} className="whitespace-pre-wrap bg-gray-900">
        <code className="block p-2 bg-gray-800 mx-auto text-left text-2xl">
          {code}
        </code>
      </pre>
      <button
        className="mt-2 bg-green-600 hover:bg-green-300 text-white py-2 px-4 rounded-full focus:outline-none"
        onClick={copyCode}
      >
        Copy Code
      </button>
    </div>
  );
};

export default CodeBlockWithCopyButton;
