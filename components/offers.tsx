import { offersArray } from '@/utils/offers';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import React from 'react';
import { Users } from 'lucide-react';

const Offers = () => {
  return (
    <div id="whatweoffer" className="text-center py-3 max-sm:pl-0">
      <h1 className="text-primary font-bold text-2xl">What we offer</h1>
      <h1 className="my-2">
        We are competitive E-learning platform due to offerings{' '}
      </h1>
      <div className="grid grid-cols-3 gap-6 my-4 max-sm:flex max-sm:flex-col">
        {offersArray.map((offer, i) => (
          <Card key={i} className="w-[90%] max-sm:w-full bg-[#a6d4ff82] hover:bg-[#a6d4ff] hover:scale-105">
            <CardHeader className='flex justify-center'>
              <Image src={offer.icon} alt={offer.title}/>
            </CardHeader>
            <CardBody>
              <h1 className="text-primary text-center font-semibold text-xl">
                {offer.title}
              </h1>
              {offer.description}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Offers;
