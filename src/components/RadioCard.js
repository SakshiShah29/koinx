import { Box, Icon, Text, useRadio } from "@chakra-ui/react"
import { useState } from "react";
import { MdCheckCircle } from 'react-icons/md';
function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)
 
    const input = getInputProps()
    const checkbox = getRadioProps()
  
    return (<div className=" flex flex-col">
      <Box as='label'>
      <input {...input} type='checkbox' hidden />
        <Box
        {...checkbox}
        cursor='pointer'
        borderWidth='1px'
        fontFamily={'Inter'}
        borderRadius='8px'
        border='1px solid var(--gray-2, #3E424A)'
        display='flex'
        alignItems='center'
        justifyContent='start'
        _checked={{
          bg: 'rgba(0, 82, 254, 0.06)',
          color: '#0141CF',
          border: '2px solid var(--primary-blue, #0052FE)',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={'12px'}
        height={{md:'56px',base:"48px"}}
        width={'145px'}
        fontSize={'16px'}
        fontWeight={500}
        position='relative'
        >
          {props.children}
         
          {input.checked &&<svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
<path d="M27.9998 9.33337L11.9998 25.3334L4.6665 18L6.5465 16.12L11.9998 21.56L26.1198 7.45337L27.9998 9.33337Z" fill="#0141CF"/>
</svg>}
        
        </Box>
      </Box>
      <Text className=" text-[#3E424A] text-[15px] font-[500] font-inter mt-1">{props.tagged}</Text></div>
    )
  }

  export default RadioCard;
  