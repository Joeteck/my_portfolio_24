import React, { useRef } from 'react';

const SocialDropdown = () => {
    const dropdownRef = useRef(null);

    return (
        <div className="relative inline-block text-left group" ref={dropdownRef}>
        <button
            type="button"
            className="justify-left items-start bg-transparent text-left text-sm text-white"
            id="options-menu"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
        >
            <h1 className='md:text-lg text-sm text-white'>Joel Adeyoju</h1>
            <h2 className='md:text-sm text-xs text-grey-200 hover:text-white transition-transform'>joelitserver@gmail.com +</h2>
        </button>

        {/* Dropdown content */}
        <div
            id="dropdown-menu"
            className="absolute l-0 hidden text-gray-200  group-hover:block transition-all"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            tabIndex="-1"
        >
            <div className=" shadow-lg rounded-md" role="none">
                <a
                    href="#Instagram"
                    className="block py-0.5 text-sm text-grey-200 hover:text-white transition-transform"
                    role="menuitem"
                    tabIndex="-1"
                >
                    Instagram
                </a>
                <a
                    href="#Email"
                    className="block text-sm text-grey-200 hover:text-white transition-transform"
                    role="menuitem"
                    tabIndex="-1"
                >
                    Email
                </a>
                <a
                    href="#Twitter"
                    className="block text-sm text-grey-200 hover:text-white transition-transform"
                    role="menuitem"
                    tabIndex="-1"
                >
                    Twitter
                </a>
                <a
                    href="#Resume"
                    className="block text-sm text-grey-200 hover:text-white transition-transform"
                    role="menuitem"
                    tabIndex="-1"
                >
                    Resume
                </a>
                <a
                    href="#LinkedIn"
                    className="block text-sm text-grey-200 hover:text-white transition-transform"
                    role="menuitem"
                    tabIndex="-1"
                >
                    LinkedIn
                </a>
                <a
                    href="#Calendly"
                    className="block text-sm text-grey-200 hover:text-white transition-transform"
                    role="menuitem"
                    tabIndex="-1"
                >
                    Calendly
                </a>
            </div>
        </div>
    </div>
    )
}

export default SocialDropdown