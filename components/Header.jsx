import Link from 'next/link';
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import React from 'react';

const Header = () => {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>
                        J<span className='text-blue-600'>T.dev</span>
                    </h1>
                </Link>
                {/* Desktop nav & hire me button */}
                <div className='hidden xl:flex items-center gap-8'>
                    <Nav />
                    <Link href="/contact">
                        <Button className="hover:bg-white" >Hire me</Button>
                    </Link>
                </div>
                {/* Mobile nav */}
                <div className='xl:hidden'>
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header;
