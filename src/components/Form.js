import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SkeletonText,
  Text,
  useRadioGroup,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import country from "../assets/country.svg";
import RadioCard from "./RadioCard";
let investmentType;
const Form = () => {
    const [investmentType, setInvestmentType] = useState("");
    const [purchasePrice, setPurchasePrice] = useState();
  const [salePrice, setSalePrice] = useState();
  const [expenses, setExpenses] = useState();
  const [annualIncome, setAnnualIncome] = useState();
  const [financialYear,setFinancialYear]=useState();
  const [country,setCountry]=useState();
  const [skeletonCapitalGains,setSkeletonCapitalGains ] =useState(false)
  const [capitalGainsAmount,setCapitalGainsAmount]=useState();
  const options = ["Short Term", "Long Term"];
  const tag = ["< 12 months", "> 12 months"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "term",
    onChange: (value) => {
        setInvestmentType(value);
        console.log("Selected Investment Type:", value);
      },
  });
  

  const group = getRootProps();
  const taxRatesPercentage = {
    '$0 - $18,200': 0,
    '$18,201 - $45,000':  0.19,
    '$45,001 - $120,000': 0.325,
    '$120,001 - $180,000': 0.37,
    '$180,001+': 0.45,
  };
  const taxRates = {
    '$0 - $18,200': '0%',
    '$18,201 - $45,000': 'Nil + 19% of excess over $18,200',
    '$45,001 - $120,000': '$5,092 + 32.5% of excess over $45,000',
    '$120,001 - $180,000': '$29,467 +37% of excess over $120,000',
    '$180,001+': '$51,667 + 45% of excess over $180,000',
  };
  console.log(purchasePrice,salePrice,expenses);
  useEffect(()=>{
    setSkeletonCapitalGains(true)
    console.log(purchasePrice,salePrice,expenses);
setCapitalGainsAmount(salePrice-(purchasePrice+expenses));
setSkeletonCapitalGains(false)
console.log(capitalGainsAmount)
  },[purchasePrice,salePrice,expenses])
  return (
    <div className=" bg-white p-[17px] md:px-[75px] md:py-[35px] rounded-xl">
      <div>
        <h1 className="font-[700] text-[20px] text-center md:text-[36px] text-[#0F1629] font-inter md:px-12  ">
          Free Crypto Tax Calculator Australia
        </h1>
        <form >
          <Flex
            gap={"40px"}
            borderBottom={"1px solid rgba(201, 207, 221, 0.60)"}
            paddingBottom={"28px"}
            className="md:pt-[40px] pt-[30px]"
          >
            <FormControl className="flex md:flex-row flex-col flex-1" >
              <FormLabel className=" font-inter font-[400] text-[15px] md:w-[200px]  text-[#0F1629] mt-1">
                Financial Year
              </FormLabel>
              <Select
              value={financialYear}
              onChange={(e)=>{setFinancialYear(e.target.value)}}
                placeholder="Select year"
                background={"#EFF2F5"}
                className=" font-inter font-[500] text-[18px] text-[#0F1629] focus:bg-white"
              >
                <option>FY 2023-24</option>
              </Select>
            </FormControl>
            <FormControl className=" flex md:flex-row flex-col flex-1" >
              <FormLabel>Country</FormLabel>
             <Select placeholder="Select country" value={country} onChange={(e)=>{setCountry(e.target.value)}} background={"#EFF2F5"}  className=" font-inter font-[500] text-[18px] text-[#0F1629] focus:bg-white">
                <option value="Australia">
                  <Box display="flex" alignItems="center">
                    <Image
                      src={country}
                      alt="country"
                      width="20"
                      marginRight="2"
                    />
                    Australia
                  </Box>
                </option>
              </Select>
            </FormControl>
          </Flex>
          <Flex  paddingTop={"28px"} className="md:flex-row flex-col md:gap-[40px] gap-[20px]">
            <FormControl className="" isRequired>
              <FormLabel className=" font-inter font-[200] text-[15px] text-[#0F1629] mt-1 opacity-2">
                Enter purchase price of Crypto
              </FormLabel>
              <InputGroup
              background={"#EFF2F5"}
              className=" font-inter font-[400] text-[16px] w-[200px] text-[#0F1629] h-[56px] flex items-center rounded-[8px] hover:border-2 hover:border-blue-600 hover:bg-white "
            >
              <InputLeftElement
                pointerEvents="none"
                color="#0F1629"
                fontSize="18px"
                fontWeight={"500"}
                children="$"
                marginTop={"8px"}
              />
              <Input
              value={purchasePrice}
              onChange={(e)=>{
                  setPurchasePrice(Number(e.target.value))
              }}
                placeholder="Enter amount"
                className=" border-none h-[56px] focus:border-none "
              />
            </InputGroup>
              
            </FormControl>
            <FormControl isRequired>
              <FormLabel className=" font-inter font-[200] text-[15px] text-[#0F1629] mt-1 opacity-2">
                Enter sale price of Crypto
              </FormLabel>
              <InputGroup
                background={"#EFF2F5"}
                className=" font-inter font-[400] text-[15px] w-[200px] text-[#0F1629] h-[56px] flex items-center rounded-[8px] hover:border-2 hover:border-blue-600 hover:bg-white"
              >
                <InputLeftElement
                  pointerEvents="none"
                  color="#0F1629"
                  fontSize="18px"
                  fontWeight={"500"}
                  children="$"
                  marginTop={"8px"}
                />
                <Input
                value={salePrice}
                onChange={(e)=>{setSalePrice(Number(e.target.value))}}
                  placeholder="Enter amount"
                  className=" border-none h-[56px] focus:border-none"
                />
              </InputGroup>
            </FormControl>
          </Flex>
          <Flex  paddingTop={"28px"} className="md:flex-row flex-col md:gap-[40px] gap-[20px]">
            <FormControl isRequired>
              <FormLabel className=" font-inter font-[200] text-[14px] text-[#0F1629] ">
                Enter your Expenses
              </FormLabel>
              <InputGroup
                background={"#EFF2F5"}
                className=" font-inter font-[400] text-[15px] w-[200px] text-[#0F1629] h-[56px] flex items-center rounded-[8px] hover:border-2 hover:border-blue-600 hover:bg-white"
              >
                <InputLeftElement
                  pointerEvents="none"
                  color="#0F1629"
                  fontSize="18px"
                  fontWeight={"500"}
                  children="$"
                  marginTop={"8px"}
                />
                <Input
                value={expenses}
                onChange={(e)=>setExpenses(Number(e.target.value))}
                  placeholder="Enter amount"
                  className=" border-none h-[56px] focus:border-none"
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel className=" font-inter font-[100] text-[14px] text-gray-700 mt-1 opacity-2">
                Investment Type
              </FormLabel>
              <HStack {...group}>
                {options.map((value, i) => {
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={value} {...radio} tagged={tag[i]} onClick={() => {
                        radio.onChange();
                        setInvestmentType(value);
                      }}>
                      {value}
                    </RadioCard>
                  );
                })}
              </HStack>
            </FormControl>
          </Flex>
          <Flex  paddingTop={"28px"} className="md:flex-row flex-col md:gap-[40px]">
            <FormControl className="flex-1">
              <FormLabel className=" font-inter font-[400] text-[15px] text-[#0F1629] mt-1">
                Select Your Annual Income
              </FormLabel>
              <Select
                placeholder="Select Annual Income"
                background={"#EFF2F5"}
                value={annualIncome}
                onChange={(e)=>{setAnnualIncome(e.target.value)}}
                className=" font-inter font-[500] text-[18px] text-[#0F1629] hover:border-2 hover:border-blue-600 hover:bg-white h-[56px]"
              >
              <option value="$0 - $18,200">$0 - $18,200</option>
              <option value="$18,201 - $45,000">$18,201 - $45,000</option>
              <option value="$45,001 - $120,000">$45,001 - $120,000</option>
              <option value="$120,001 - $180,000">$120,001 - $180,000</option>
              <option value="$180,001+">$180,001+</option>
              </Select>
            </FormControl>
            <Box className=" flex-1 h-[56px] md:mt-6 flex md:flex-col gap-3 md:gap-0">
              <Text className=" text-[#3E424A] text-[12px] md:text-[15px] font-[500] font-inter mt-1">
                Tax Rate: 
              </Text>
              <Text className=" text-[#3E424A] text-[12px] md:text-[15px] font-[500] font-inter mt-1">
              {" "}{taxRates[annualIncome] || ' --'}
              </Text>
            </Box>
          </Flex>

          {investmentType=="Long Term" &&<Flex gap={"40px"} paddingTop={"28px"} className="md:flex-row flex-col md:gap-[40px] gap-[20px]">
            <Box className=" flex-1 ">
              <Text className=" text-[#3E424A] text-[15px] font-[400] font-inter">
                Capital gains amount
              </Text>
              <Box className=" h-[56px] bg-[#EFF2F5] p-[17px] rounded-[8px]">
                <Text className=" text-[#3E424A] text-[18px] font-[500] font-inter ">
                  {(skeletonCapitalGains || !expenses || !purchasePrice || !salePrice) && <p>--</p>}
                  {
                    !skeletonCapitalGains  && expenses && purchasePrice && salePrice &&(capitalGainsAmount)
                  }
                 
                </Text>
              </Box>
            </Box>
            {capitalGainsAmount>0 && <Box className=" flex-1 ">
              <Text className=" text-[#3E424A] text-[15px] font-[400] font-inter">
                Discount for long term gains
              </Text>
              <Box className=" h-[56px] bg-[#EFF2F5] p-[17px] rounded-[8px]">
                <Text className=" text-[#3E424A] text-[18px] font-[500] font-inter ">
                  {capitalGainsAmount/2}
                </Text>
              </Box>
            </Box>}
          </Flex>}
          <Flex gap={"40px"} paddingTop={"28px"} className="md:flex-row flex-col md:gap-[40px] gap-[20px]" >
            <Box className="  mx-[20px] p-[8px] flex-1 h-[97px] bg-[#EBF9F4] rounded-[8px]">
              {" "}
              <Text className=" text-center text-[#3E424A] text-[16px] font-[500] font-inter mt-3">
                Net Capital gains tax amount
              </Text>
              
                {investmentType=="Long Term" && <Text className=" font-[700] text-[24px] text-[#0FBA83] font-inter text-center">$ {capitalGainsAmount-(capitalGainsAmount/2)}</Text> }
                {investmentType=="Short Term" && <Text className=" font-[700] text-[24px] text-[#0FBA83] font-inter text-center">$ {salePrice-(purchasePrice+expenses)}</Text> }
                {!investmentType &&  <Text className=" font-[700] text-[24px] text-[#0FBA83] font-inter text-center">$ 0</Text> }
            </Box>
            <Box className=" mx-[20px] p-[8px] flex-1 h-[97px] bg-[#EBF2FF] rounded-[8px]">
              {" "}
              <Text className=" text-center text-[#3E424A] text-[16px] font-[500] font-inter mt-3">
                The tax you need to pay*
              </Text>
              <Text className=" font-[700] text-[24px] text-[#0141CF] font-inter text-center">
                
              {(investmentType=="Long Term" && annualIncome) && <Text className=" font-[700] text-[24px] text-[#0141CF] font-inter text-center">$ {(capitalGainsAmount-(capitalGainsAmount/2))*(taxRatesPercentage[annualIncome])}</Text> }
              {(investmentType=="Short Term" && annualIncome) && <Text className=" font-[700] text-[24px] text-[#0141CF] font-inter text-center">$ {(salePrice-(purchasePrice+expenses))*(taxRatesPercentage[annualIncome])}</Text> }
              {(!investmentType || !annualIncome) &&  <Text className=" font-[700] text-[24px] text-[#0141CF] font-inter text-center">$ 0</Text> }
              </Text>
            </Box>
          </Flex>
        </form>
      </div>
    </div>
  );
};

export default Form;
