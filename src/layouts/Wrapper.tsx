 

import { ReactNode } from "react"; 
import AnimationProvider from "@/common/AnimationProvider";
import ScrollToTop from "@/common/ScrollToTop";
import WhatsAppButton from "@/common/WhatsAppButton";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  
 

  return (
    <>
      {children} 
      <AnimationProvider />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
 
