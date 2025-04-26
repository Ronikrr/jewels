import React, { useState } from 'react';

const faqs = [
  {
    question: 'What are Lab Grown Diamonds?',
    answer:
      'Lab Grown Diamonds are real diamonds. Despite being grown in reactors in labs, these diamonds possess the same physical and optical characteristics as natural diamonds.',
  },
  {
    question: 'Are Lab Grown Diamonds real?',
    answer:
      'Lab Grown Diamonds are real diamonds. Both Lab Grown Diamonds and natural diamonds possess the same crystalline structure of carbon atoms.',
  },
  {
    question: 'Can you tell the difference between Lab Grown Diamonds and natural diamonds?',
    answer:
      'It is difficult to tell the difference between lab grown diamonds and natural diamonds without specialized equipment.',
  },
  {
    question: 'Can you tell the difference between Lab Grown Diamonds and natural diamonds?',
    answer:
      'It is difficult to tell the difference between lab grown diamonds and natural diamonds without specialized equipment.',
  },
  {
    question: 'Can you tell the difference between Lab Grown Diamonds and natural diamonds?',
    answer:
      'It is difficult to tell the difference between lab grown diamonds and natural diamonds without specialized equipment.',
  },
  {
    question: 'Can you tell the difference between Lab Grown Diamonds and natural diamonds?',
    answer:
      'It is difficult to tell the difference between lab grown diamonds and natural diamonds without specialized equipment.',
  },
  {
    question: 'Can you tell the difference between Lab Grown Diamonds and natural diamonds?',
    answer:
      'It is difficult to tell the difference between lab grown diamonds and natural diamonds without specialized equipment.',
  },

  // Add more FAQs here
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    {/* <div className="section-gap"></div> */}
    {/* // max-w-2xl mx-auto mt-8 border rounded-md shadow-lg */}
    <h3 className='text-[22px] lg:text-[32px] text-[#323232] font-[500] text-center mb-[20px] lg:mb-[40px] inter'>FAQs</h3>
    <div className="border rounded-md mx-auto max-w-[110rem]">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b">
          <button
            className="relative w-full flex justify-between items-center py-4 ps-[40px] lg:ps-[50px] pe-[0px] lg:pe-[24px] focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-left text-[14px] lg:text-[18px] font-medium">{faq.question}</span>
            <span className="text-xl absolute left-[16px] lg:left-[22px] top-[14px]">{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4 text-gray-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
    <div className="section-gap"></div>
    </>
  );
};

export default FAQ;
