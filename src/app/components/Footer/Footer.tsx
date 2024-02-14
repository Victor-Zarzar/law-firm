import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-red-800">
            <footer className="mx-auto flex max-w-4xl flex-row h-28 md:h-44 pb-10 p-8">
                <ul className="flex items-center mx-auto flex-wrap mb-6 md:mb-0">
                    <li>
                        <p className="text-sm md:text-lg font-normal hover:underline mr-4 md:mr-6 text-white">
                            © {currentYear} Victor Zarzar. All rights reserved.
                        </p>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
