import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styled from "@emotion/styled";

const MarkDownStyle = styled.div`
  font-size:12px;
`;

const PreStyle = styled.pre`
  background-color: #f5f7f9;
  padding: 1rem;
  line-height: 1.2rem;
  margin: 1rem auto;
`
const CodeBlock = (children) => {
    return(
        <PreStyle>
            <code>{children.children[0]}</code>
        </PreStyle>
    )
}

const BlockQuoteStyle = styled.blockquote`
  background-color: #fffffa;
  padding: 0.5rem;
  font-size: 10px;
`
const BlockQuote = (children) => {
    return(
        <BlockQuoteStyle>
            {children.children}
        </BlockQuoteStyle>
    )
}

const H4Style = styled.h4`
  padding-bottom: 10px;
  font-size: 20px;
`
const H4 = (children) => {
    return(
        <H4Style>
            {children.children}
        </H4Style>
    )
}

const H1Style = styled.h1`
  margin-top: 10px;
  font-size: 32px;
`
const H1 = (children) => {
    return(
        <H1Style>
            {children.children}
        </H1Style>
    )
}


const Markdown = React.memo(({ ...props }) => {
    const renderers = {
        code : CodeBlock,
        blockquote : BlockQuote,
        h4 : H4,
        h1 : H1
    };
    return<MarkDownStyle><ReactMarkdown {...props} remarkPlugins={[remarkGfm]} components={renderers} /></MarkDownStyle>;
});

export default Markdown;
