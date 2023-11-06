
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Spacer,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import logo from "../assets/logo.svg"
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        justify={'space-between'}>
        
        <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
          <Image src={logo} alt="logo"/>
<Spacer/>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        
        <Flex
        flex={{ base: 1, md: 'auto' }}
        display={{ base: 'flex', md: 'none' }} justify={{ base: 'end', md: 'end' }}>
        <IconButton
          onClick={onToggle}
          icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
          variant={'ghost'}
          aria-label={'Toggle Navigation'}
        />
      </Flex>
     
      </Flex>
      
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>

    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} ml={'auto'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} className='py-[15px]'>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                className=" font-inter text-[16px] text-[#0F1629] font-[600] "
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
<Spacer />
      <button   href={'#'}  className=' ml-[15px] mt-2 bg-white h-[40px]  w-[112px] border-2 border-[#0052FE] rounded-[4px] font-inter text-[16px] text-[#0F1629] font-[600]'>
        Sign In
      </button>
    
    </Stack>
  );
};


const MobileNav = () => {
  return (
    <><Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <button   href={'#'}  className=' bg-white h-[40px]  w-[112px] border-2 border-[#0052FE] rounded-[4px] font-inter text-[16px] text-[#0F1629] font-[600]'>
      Sign In
    </button>
    </Stack></>
  )
}

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} className=" font-inter text-[16px] text-[#0F1629]">
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}



const NAV_ITEMS = [
  {
    label: 'Features',
  },
  {
    label: 'Exchanges',
  },
  {
    label: 'How it Works?',
    href: '#',
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'About us',
    href: '#',
  },
]