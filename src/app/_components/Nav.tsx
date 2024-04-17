'use client';

import Link from "next/link";
import { Menu } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/16/solid";

export interface NavLink {
    name: string;
    href: string;
};

const NavLinks = [
    { name: 'NDIS Art Classes on Bribie', href: '/classes' },
    { name: 'Book Art Session', href: '/book' },
    { name: 'NDIS Enrolment Forms', href: '/enrolment' },
    { name: 'Meet The Team', href: '/team' },
] satisfies Array<NavLink>;

export default function Nav() {
    return (
        <nav className='sticky top-0 bg-gray-400 z-50 shadow-lg'>
            <div className='flex justify-between items-center h-20 container max-w-screen-lg'>
                <Link href='/'><img src="/WhiteBrand.svg" className="size-36 mt-20 mr-8" /></Link>
                <div className='hidden gap-6 md:flex'>
                    {NavLinks.map((navLink, index) => (
                        <Link key={index} href={navLink.href} className="text-white hover:text-gray-200">{navLink.name}</Link>
                    ))}
                </div>
                <Menu as='div' className='md:hidden'>
                    <Menu.Button>
                        <Bars3Icon className='size-8 text-white hover:text-gray-200' />
                    </Menu.Button>
                    <Menu.Items className='absolute right-0 mt-2 bg-gray-300 shadow-lg rounded'>
                        {NavLinks.map((navLink, index) => (
                            <Menu.Item key={index}>
                                <Link href={navLink.href} className='flex items-center px-4 py-2 text-white hover:text-gray-200 rounded whitespace-nowrap'>
                                    {navLink.name}
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Menu>
            </div>
        </nav >
    );
}
