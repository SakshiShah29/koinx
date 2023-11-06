import Form from './components/Form';
import logo from './logo.svg';
import service from "./assets/1.svg"
import email from "./assets/email.svg"
import mobileview from "./assets/mobileview.svg"
import Navbar from './components/Navbar';
import Faq from './components/Faq';
import { Flex, useBreakpointValue } from '@chakra-ui/react';
import Footer from './components/Footer';

function App() {
  const serviceImage = useBreakpointValue({
    base: mobileview,
    md: service, 
  });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (<div className='w-100%'>
    <Navbar/>
    <div className='bg-[#EFF2F5] h-fit  md:flex justify-center items-start pt-10 gap-10 md:px-[56px] p-[23px]'>
    <div className=' flex flex-col justify-center '>
    <Form/>
    <Faq/>
    </div>
    <img src={serviceImage} alt="service"  width={'426px'}/>
    </div>
   {isDesktop &&<div className='flex justify-center py-20'>
   <img src={email} alt="email"  /></div>}
    <Footer/>

    </div>
  );
}

export default App;
