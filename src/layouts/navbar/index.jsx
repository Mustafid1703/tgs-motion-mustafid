import { useEffect, useRef, useState } from 'react';
import ContentContainer from '@/components/ContentContainer';
import logo from '/logo.svg';
import MenuList from './menu-list';

function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setIsHidden(false);
      } else {
        setIsHidden(currentScrollY > lastScrollY.current);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-17.5 md:h-20 bg-white sticky top-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <ContentContainer className='flex items-center justify-between h-17.5 md:h-20'>
        <section className={`gap-2 items-center cursor-pointer`}>
          <img
            src={logo}
            alt={'logo-sandbox'}
            className='w-auto h-8.75 md:h-12'
            width={155}
            height={31}
          />
        </section>

        <section>
          <MenuList className='hidden lg:flex items-center' />
        </section>
      </ContentContainer>
    </nav>
  );
}

export default Navbar;
