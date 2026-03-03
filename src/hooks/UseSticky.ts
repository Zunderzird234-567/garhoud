 

'use client'
import { useEffect, useState } from "react";

interface StickyState {
  sticky: boolean;  
  hidden: boolean; 
}

const UseSticky = (): StickyState => {
  const [sticky, setSticky] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const stickyHeader = (): void => {
    const currentScroll = window.scrollY;

    if (currentScroll > 200) {
      setSticky(true);
      setHidden(false); // Always show when sticky
    } else {
      setSticky(false);
      setHidden(false);
    }

    setLastScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
    return () => window.removeEventListener("scroll", stickyHeader);
  }, [lastScroll]);

  return { sticky, hidden };
};

export default UseSticky;
