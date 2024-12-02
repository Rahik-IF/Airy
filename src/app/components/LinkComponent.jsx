import React from 'react'
import Link from 'next/link';

function LinkComponent({text, removeDropDown, href}) {
    return (
        <li className="px-4 py-2 hover:bg-secondary">
            <Link onClick={() => removeDropDown()} href={href}>{text}</Link>
        </li>
    )
}

export default LinkComponent