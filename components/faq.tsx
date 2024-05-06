'use client';

import { questions } from '@/utils/questions';
import { Accordion, AccordionItem } from '@nextui-org/react';
import React from 'react';

const Faq = () => {
  return (
    <div id="faq" className="text-center py-3">
      <h1 className="text-primary font-bold text-2xl">
        Frequent Asked Questions
      </h1>
      <h1 className="my-2">
        Certainly! Here &apos; s a set of frequently asked questions (FAQs) on
        This platform to provide users with valuable information about Posinnove
      </h1>
      <Accordion variant="splitted" className="flex justify-center flex-col items-center my-4">
        {questions.map((question, i) => (
          <AccordionItem className="w-[100%]" aria-label={question.title} key={i} title={question.title}>
            <p>{question.description}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
