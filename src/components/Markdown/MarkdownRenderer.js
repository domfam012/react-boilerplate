import React, { useCallback } from 'react';
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
  padding: 1rem;
  font-size: 10px;
  text-indent: 10px;
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
  font-size: 17px;
`

const H4 = (children) => {
    return(
        <H4Style>
            {children.children}
        </H4Style>
    )
}

const Markdown = React.memo(({ linkStopPropagation, ...props }) => {
    const handleLinkClick = useCallback(event => {
        event.stopPropagation();
    }, []);

    const linkRenderer = useCallback(
        ({ node, ...linkProps }) => <a {...linkProps} onClick={handleLinkClick} />,
        [handleLinkClick],
    );

    const renderers = {
        link: linkRenderer,
        code : CodeBlock,
        blockquote : BlockQuote,
        h4 : H4
    };

    return<MarkDownStyle><ReactMarkdown {...props} remarkPlugins={[remarkGfm]} components={renderers} /></MarkDownStyle>;
});

export default Markdown;
