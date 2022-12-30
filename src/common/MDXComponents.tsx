import * as React from "react";

import { anchorText } from "src/common/GeneratedAnchor";
import { GeneratedLink } from "src/common/GeneratedLink";

export const MDXComponents = {
    a: (props: any) => {
        return (
            // @ts-ignore
            <GeneratedLink href={props.href} style {...props} />
        )
    },
    h2: (props: any) => {
        return (
            <h2 id={anchorText(props.children)}>{props.children}</h2>
        )
    },
    h3: (props: any) => {
        return (
            <h3 id={anchorText(props.children)}>{props.children}</h3>
        )
    }
};

export default MDXComponents;
