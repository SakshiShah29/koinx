import { Box, Heading, List, ListItem, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react'
import table from "../assets/table.svg"
const Faq = () => {
    const faqData = [
        {
          question: 'How are cryptocurrencies taxed in Australia?',
          answer: 'The Australian Taxation Office (ATO) regards cryptocurrency as both property, which is subject to Capital Gains Tax (CGT), and income, which is subject to Income Tax. CGT applies when you sell, trade, gift, or make purchases using cryptocurrency. On the other hand, Income Tax applies when you receive cryptocurrency as payment for services, work, mining, staking, or other activities. To simplify tax calculations, consider using a free crypto tax calculator for Australia.',
        },
        {
          question: 'What’s the difference between long-term and short-term capital gains?',
          answer: 'The distinction between long-term and short-term capital gains lies in the duration of ownership. When you own an asset, such as cryptocurrency, for more than 12 months, any gains from its sale are categorised as long-term. These long-term gains often receive a 50% discount on the capital gains tax (CGT). In contrast, if you hold the asset for 12 months or less, the gains are considered short-term, and they are taxed at your regular income tax rate.',
        },

        {
            question: 'Do I have to pay tax on crypto-to-crypto transactions?',
            answer: `Yes, according to the ATO, when you trade one cryptocurrency for another, like NFTs, stablecoins, or tokens, it's seen as selling one asset to buy another, and any profit you make from this exchange is subject to Capital Gains Tax. To compute taxes for crypto-to-crypto transactions, you must determine the fair market value of your coins in AUD at both the acquisition and disposal times. However, this can be challenging because many exchanges use cryptocurrency as the standard for valuation.

            Explore KoinX for a streamlined experience in calculating your cryptocurrency taxes. Our historical price engine swiftly delivers the fair market value of your crypto holdings at the time of each transaction, making tax assessment hassle-free.
            `,
          },
          {
            question: 'How do I lower my cryptocurrency taxes?',
            answer: [
                {
                  heading: 'Hold for over 12 months- ',
                  points: [
                    'Hold your crypto for more than 12 months to qualify for a 50% long-term CGT discount to reduce your tax liability.',
                  ],
                },
                {
                  heading: 'Offset gains with losses-',
                  points: [
                    'Offset capital gains with capital losses from cryptocurrency, reducing your overall tax burden.',
                  ],
                },
                {
                    heading: 'Claim tax deductions-',
                    points: [
                      `Explore opportunities to claim significant deductions on your regular income if you're a trader or running a crypto business.`,
                    ],
                  },
                  {
                    heading: 'Use crypto tax tools-',
                    points: [
                      'Employ crypto tax software like KoinX or seek help from a crypto tax specialist to streamline calculations and ensure compliance.',
                    ],
                  },
                  {
                    heading: 'Donate to charities-',
                    points: [
                      'Donate cryptocurrency to registered charities since it’s not a taxable event, and claim deductions on the donated amount.',
                    ],
                  },
                  {
                    heading: 'Full disclosure-',
                    points: [
                      'Be transparent and disclose all your crypto transactions to the ATO to avoid penalties for hiding trading activities',
                    ],
                  },
              ],
          },
          {
            question: 'Can the ATO track crypto?',
            answer: `The Australian Taxation Office (ATO) possesses strong tracking capabilities for cryptocurrency transactions. Since 2014, they've been gathering data on crypto activities, including KYC info from exchanges and wallets. The ATO's data matching program, active since 2019, lets them access data from service providers like Binance and CoinJar, covering personal details and transaction specifics. Since 2020, the ATO has been notifying Australian crypto investors to report holdings to avoid penalties.
            `,
          },
          {
            question: 'What is the best crypto tax calculator for Australia?',
            answer: 'KoinX is a crypto tax platform that makes it easy to calculate tax on crypto transactions. It also provides portfolio insights of all crypto exchange accounts combined, making it a valuable tool for chartered accountants and VDA Investors alike.',
          },
          {
            question: 'Do I have to pay tax if I lose money trading crypto?',
            answer: `In Australia, when your cryptocurrency loses value, it's classified as a capital loss. This means you won't have to pay taxes on that loss. It's a way to offset any gains you might have made in other investments for tax purposes.
            `,
          },
          {
            question: 'Is using a crypto tax calculator safe?',
            answer: 'KoinX provides a reliable crypto tax calculator that can assist you in determining your tax obligations for cryptocurrency transactions. This tool accurately tracks your portfolio on your preferred exchange and computes your gains or losses based on the crypto amounts and prices involved.',
          },
          {
            question: 'Which exchanges do you support?',
            answer: 'KoinX seamlessly integrates with a wide array of exchanges, including Binance, CoinSpot, MEXC, Bybit, Coinbase, Kraken, and numerous others. It effortlessly consolidates cryptocurrency transactions from over 180+ chains, exchanges, and wallets, presenting them in a user-friendly unified dashboard.',
          },
          {
            question: 'Do I have to pay tax if I transfer crypto from one wallet to another?',
            answer: `Transferring cryptocurrency from one wallet to another that you own in Australia is not subject to tax, as it is not recognised as a taxable event, and capital gains tax is not triggered. Nevertheless, it's essential to keep detailed records of these transfers, particularly if you are utilising automated crypto tax software like KoinX. KoinX, as a reliable crypto tax software, can streamline the process, making it easier to maintain accurate and efficient tax records and reporting while ensuring compliance with Australian tax regulations.
            `,
          },

      ];
  return (
    <Box className="bg-white p-6 md:p-10 rounded-xl w-full mt-8">
      <Heading className="text-[#0F1629] text-2xl md:text-3xl font-inter font-semibold mb-6">Frequently Asked Questions</Heading>
      <div>
        {faqData.map((faqItem, index) => (
          <div key={index} className='pb-6 md:pb-8 border-b border-[#C9CFDD99]'>
            <h3 className='text-[#0B1426] mt-4 md:mt-6 text-lg md:text-xl font-inter font-semibold leading-6'>{index + 1}. {faqItem.question}</h3>
            {Array.isArray(faqItem.answer) ? (
                <ul className='mt-[10px] text-[#3E424A] text-[16px] font-inter leading-[160%] font-[500]'>
                {faqItem.answer.map((item, subIndex) => (
                  <li key={subIndex} className=''>
                    <strong>• {item.heading}</strong>
                      {item.points.map((point, pointIndex) => (
                        <p key={pointIndex}>{point}</p>
                      ))}
                  
                  </li>
                ))}
              </ul>
            ) : (
              <Text className='mt-[10px] text-[#3E424A] text-[16px] font-inter leading-[160%] font-[500]'>{faqItem.answer}</Text>
            )}
          </div>
        ))}
        <div  className='pb-6 md:pb-8 border-b border-[#C9CFDD99]'>
        <h3 className='text-[#0B1426] mt-4 md:mt-6 text-lg md:text-xl font-inter font-semibold leading-6'>11. How do I use a cryptocurrency tax calculator?</h3>
        <Text className='mt-[10px] text-[#3E424A] text-[16px] font-inter leading-[160%] font-[500]'>In order to use a cryptocurrency tax calculator, you need to input information about your cryptocurrency transactions.
        <br></br>
        After you enter your information, the cryptocurrency tax calculator will calculate the gain or loss on every transaction.
        <br></br>
        This includes:
        <br></br>
        <br></br>
        1. The financial year you want to calculate your taxes for.
        <br></br>
        2. The country you want to calculate your taxes for.
        <br></br>
        3. The purchase price of the coin.
        <br></br>
        4. The sale price of the coin.
        <br></br>
        <br></br>
        You will get results that mention the following:
        <br></br>
1. The total profit/loss you made
<br></br>
2. The tax you’re liable to pay
<br></br>
<br></br>
Still have doubts? <span className='text-[#0052FE] text-[14px] font-[700] underline'>Consult with a crypto taxation expert</span>
        </Text>
        </div>
        <div  className='pb-6 md:pb-8 border-b border-[#C9CFDD99]'>
        <h3 className='text-[#0B1426] mt-4 md:mt-6 text-lg md:text-xl font-inter font-semibold leading-6'>12. How do I calculate my crypto tax in Australia?</h3>
        <Text className='mt-[10px] text-[#3E424A] text-[16px] font-inter leading-[160%] font-[500]'>To calculate your crypto tax in Australia accurately, you need to consider both income tax and capital gains tax.
<br></br>
<br></br>
        <span className='font-[700]'>Income Tax</span>
        <br></br>
        In Australia, when an individual (investor) sells, trades, spends, earns (salary, mining, interest) or gifts cryptocurrency, the net capital gain is taxed at the same rate as their Income Tax. This tax rate is determined based on their total income for the tax year.
        <br></br>
        <br></br>
   <img src={table} alt="table"/>


   <h3 className='text-[#0B1426] mt-4 md:mt-6 text-lg md:text-xl font-inter font-semibold leading-6'>Capital Gains Tax (CGT)</h3>
   <br></br>
   Calculate your capital gains or losses on cryptocurrency transactions using this formula:
<br></br>
<br></br>
<span className='font-[700]'>Note: <br></br>
Capital Proceeds (sale value or any form of receipt)<br></br>
Cost Basis (costs incurred to acquire, hold, and dispose of the asset)</span>
<br></br>
<br></br>
Your tax rate depends on whether you held the cryptocurrency for more than 12 months (long-term) or less (short-term). Long-term gains receive a 50% discount.
<br></br>
<br></br>

Calculate your Australian crypto taxes accurately and effortlessly with KoinX's free crypto tax calculator for Australia. It simplifies the process, ensuring compliance with the latest tax rates and regulations making crypto tax calculations easy and precise.
        </Text>
        </div>
      </div>
    </Box>
  )
}

export default Faq