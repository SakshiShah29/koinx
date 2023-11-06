import Form from './components/Form';
import logo from './logo.svg';
import service from "./assets/1.svg"
import Navbar from './components/Navbar';
import Faq from './components/Faq';
import { Flex } from '@chakra-ui/react';

function App() {
  return (<div className='w-100%'>
    <Navbar/>
    <div className='bg-[#EFF2F5] h-fit  md:flex justify-center items-start pt-10 gap-10 md:px-[56px] p-[23px]'>
    <div className=' flex flex-col justify-center '>
    <Form/>
    <Faq/>
    </div>
    <img src={service} alt="service"  width={'426px'}/>
    </div>

    </div>
  );
}

export default App;
