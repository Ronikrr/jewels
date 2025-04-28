import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();

    // Break down the current path
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <nav className="text-gray-500 text-[40px] my-4" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                    <Link to="/" className="text-black font-semibold  hover:underline">
                        Home
                    </Link>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={routeTo} className="flex items-center">
                            <span className="mx-2">/</span>
                            {isLast ? (
                                <span className="text-gray-700 font-semibold">{decodeURIComponent(name)}</span>
                            ) : (
                                <Link to={routeTo} className="text-blue-500 hover:underline">
                                    {decodeURIComponent(name)}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
