import { Button,Link } from '@nextui-org/react';
import React from 'react';

const DeadLine = () => {
  return (
    <div className="mt-14 lg:mt-24">
      <div className="flex flex-col gap-2">
        <h1 className="text-base italic md:text-xl font-semibold">
          Application Deadline: 11/10/2024
        </h1>
        <h1 className="font-semibold text-base lg:text-xl">
          Don’t miss this opportunity to gain experience and position yourself
          for success in the tech world!
        </h1>
        <div className="mt-8 lg:mt-16 flex items-center justify-center">
          <Button
            href="https://form.jotform.com/242634760229559"
            as={Link}
            color="primary"
            showAnchorIcon
            variant="solid"
            size="lg"
          >
            Apply now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeadLine;
