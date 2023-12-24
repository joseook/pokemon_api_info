import { useState, useEffect, useRef } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import Nav from './Nav';
import Logo from './support/Logo';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sheetRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen && sheetRef.current) {
      sheetRef.current.focus();
    }
  }, [isOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open Menu"
          onClick={() => setIsOpen(true)}
          className="cursor-pointer"
        >
          <AlignJustify />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-transparent">
        <div
          className="flex flex-col items-center justify-between h-[500px] py-8"
          ref={sheetRef}
          tabIndex="-1"
        >
          <Logo />
          <Nav />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
