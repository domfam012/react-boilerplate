import React, {useCallback} from "react"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Markdown = React.memo(({linkStopPropagation, ...props}) => {
    const handleLinkClick = useCallback(event => {
        event.stopPropagation();
    }, []);
    const linkRenderer = useCallback(
        ({node, ...linkProps}) =>
            <a {...linkProps} onClick={handleLinkClick}/>
        , [handleLinkClick])
    let renderes;
    if(linkStopPropagation){
        renderes = {link : linkRenderer}
    }
    return <ReactMarkdown {...props} remarkPlugins={[remarkGfm]} components={renderes} />;
});

export default Markdown
