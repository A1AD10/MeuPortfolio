import React from "react";

export default function NavbarLink ({ href, text, onClick, children }) {
    return (
        <li>
            <a href={href} className="font-semibold mt-0 mb-0 mx-4 text-preto relative hover:text-azulClaro hover:duration-150 dark:text-darkAzulClaro dark:hover:text-azulClaro" onClick={onClick} data-text={text}>{children}</a>
        </li>
    )
}