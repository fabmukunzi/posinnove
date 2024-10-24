import { offersArray } from '@/utils/offers';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import React from 'react';
import { Users } from 'lucide-react';

const Offers = () => {
  return (
    <div id="whatweoffer" className="text-center py-3 mx-5 md:mx-0">
      <h1 className="text-primary mb-2 font-bold text-2xl">What we offer</h1>
      <h1 className="mb-10">
        We are competitive E-learning platform due to offerings{' '}
      </h1>
      <div className="grid grid-cols-3 gap-6 my-4 max-sm:flex max-sm:flex-col">
        {offersArray.map((offer, i) => (
          <Card key={i} shadow='none' className="w-72 max-sm:w-full bg-primary/10 hover:bg-primary/20">
            <CardHeader className='flex justify-center'>
              <Image className='w-14' src={offer.icon} alt={offer.title}/>
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
