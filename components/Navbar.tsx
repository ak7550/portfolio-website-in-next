import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import Footer from './Footer';
import { userEmail } from '@/shared/UserData';

type Position = {
    x?: number,
    y?: number,
    opacity: number
}

type NavBarItemComponentProps = {
    initialPosition: Position,
    finalPosition: Position,
}

function Navbar () {
    const ref = useRef<HTMLDivElement | null>( null );

    const resumeDriveLink =
        'https://drive.google.com/file/d/1v6N7c1hof5tUDkbO7-XjreOZqBX6W6TK/view?usp=sharing';

    // Use the callback version of useRef to set the ref value
    const setRef = (node: HTMLDivElement) => ref.current = node;

    const [ showMenu, setshowMenu ] = useState( false );

    const navBarItemList: string[] = [ 'Home', 'About', 'Exprience', 'Project', 'Contact' ];

    const handleScroll = ( e: React.MouseEvent<HTMLAnchorElement, MouseEvent> ) => {
        e.preventDefault();
        const href: string = e.currentTarget.href;
        const targetId = href.replace( /.*#/, "" );
        // framer motion has a use scroll hook in it ==> explore that

        const element = document.getElementById( targetId );
        element?.scrollIntoView( {
            behavior: 'smooth',
        });
        const links = document.querySelectorAll( ".nav-link" );

        links.forEach( ( link ) => link.classList.remove( "active" ) );

        e.currentTarget.classList.add("active");
    }

    const ResumeComponent = (): React.ReactNode => (
      <motion.button
        initial={{ opacity: 0 }}
        transition={{ delay: 0.1 * navBarItemList.length }}
        animate={{ opacity: 1 }}
        className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen
                  hover:bg-hoverColor duration-300"
      >
        <a
          href={resumeDriveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </motion.button>
    )

    const NavBarItemComponent = ( { initialPosition, finalPosition } : NavBarItemComponentProps): React.ReactNode =>
        <>
            {
            navBarItemList.map( ( item: string, index: number ): React.ReactNode => (
                <li key={ index }>
                    <Link
                        href={ `#${ item.toLowerCase() }` }
                        onClick={ ( e: React.MouseEvent<HTMLAnchorElement, MouseEvent> ) => {
                            handleScroll( e );
                            closeSideBar( e );
                        } }
                        className='flex items-center gap-1 font-medium text-textDark
                                     hover:text-textGreen cursor-pointer duration-300 nav-link'
                    >
                        <motion.li
                            key={ index }
                            initial={initialPosition}
                            transition={ { duration: 0.2, delay: 0.1 * index, ease: 'easeIn' } }
                            animate={finalPosition}
                        >
                            { index != 0 && <span className='text-textGreen'>0{ index }. </span> }
                            { item }
                        </motion.li>
                    </Link>
                </li>
            ) )
        }
        </>

    const closeSideBar = ( e: React.MouseEvent ) => setshowMenu( false )

  return (
      <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
          <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
              >
                  <Image src={``} alt="logo" className="w-14" />
              </motion.div>
              <div className="hidden mdl:inline-flex items-center gap-7">
                  <ul className='flex text-[13px] gap-7'>
                      <NavBarItemComponent initialPosition={ { y: -10, opacity: 0 } } finalPosition={ { y: 0, opacity: 1 } } />
                  </ul>
              <ResumeComponent />
              </div>
              {/* small icon section, try to keep the animation while hovering over the icon */}
              <div onClick={() => setshowMenu(true)}
                  className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl
                  text-textGreen cursor-pointer overflow-hidden group'>
                  <span
                      className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all
                      ease-in-out duration-300'
                  ></span>
                  <span
                      className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all
                      ease-in-out duration-300'
                  ></span>
                  <span
                      className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all
                      ease-in-out duration-300'
                  ></span>
              </div>
              {
                  showMenu &&
                  <div ref={ ( node: HTMLDivElement ) => ref.current = node } onClick={closeSideBar}
                    className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50
                     flex flex-col items-end'>
                      <motion.div
                          initial={ { x: 20, opacity: 0 } }
                          animate={ { x: 0, opacity: 1 } }
                          transition={ { duration: 0.3 } }
                          className='w-[80%] h-full bg-[#112240] flex flex-col items-center px-4 py-10 relative'
                      >
                          <MdOutlineClose className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4' />
                          <div className='flex flex-col items-center gap-7'>
                              <ul className='flex flex-col text-base gap-7'>
                                  <NavBarItemComponent initialPosition={{x: 10, opacity:0}} finalPosition={{x:0, opacity:1}} />
                              </ul>
                            <ResumeComponent />
                          <Footer />
                              </div>
                              <motion.a initial={ { x: 10, opacity: 0 } }
                                  animate={ { x: 0, opacity: 1 } }
                                  transition={ { delay: 0.8, ease: 'easeIn' } }
                                  href={ `mailto:${ userEmail }` }
                                  className='text-sm w-72 tracking-widest text-textGreen text-center mt-4'
                              >
                                  <p>{ userEmail }</p>
                              </motion.a>
                          </motion.div>
                  </div>
              }
        </div>
      </div>
  )
}

export default Navbar