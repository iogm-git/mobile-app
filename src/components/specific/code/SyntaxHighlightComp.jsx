import React from 'react'
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';
import SyntaxHighlighter from 'react-native-syntax-highlighter';

const SyntaxHighlightComp = ({ codeString, language }) => {
    return (
        <SyntaxHighlighter
            language={language}
            style={atomOneDark}
            highlighter={"hljs"}
        >
            {codeString}
        </SyntaxHighlighter>)
}

export default SyntaxHighlightComp