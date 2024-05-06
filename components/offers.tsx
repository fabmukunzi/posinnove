import { offersArray } from '@/utils/offers';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import React from 'react';
import { Users } from 'lucide-react';

const Offers = () => {
  return (
    <div id="whatweoffer" className="text-center py-3">
      <h1 className="text-primary font-bold text-2xl">What we offer</h1>
      <h1 className="my-2">
        We are competitive E-learning platform due to offerings{' '}
      </h1>
      <div className="grid grid-cols-3 gap-6 my-4">
        {offersArray.map((offer, i) => (
          <Card key={i} className="w-[80%]">
            <CardHeader className='flex justify-center'>
              <Users size={80} color='#002278' fill='#002278' />
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
