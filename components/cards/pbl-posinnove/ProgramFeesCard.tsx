import { Button, Card, Link } from '@nextui-org/react';
import React from 'react';

const ProgramFeesCard = () => {
  return (
    <Card className="mt-14 p-6">
      <div>
        <h1 className="text-lg font-bold lg:text-2xl text-primary text-center">
          Program Fees and Payment Options
        </h1>
        <div className="flex flex-col gap-4 lg:gap-10 mt-4 lg:mt-10">
          <h1 className="text-primary text-lg lg:text-2xl font-bold">
            Admin Fee: $30
          </h1>
          <p className="text-base md:text-xl font-semibold">
            The PBL Program fee is $30 for the entire 3-month program. To make
            it accessible, learners are allowed to pay in installments. However,
            please note that learners must complete the full payment for the
            first month to continue to the second month. Failure to do so will
            result in discontinuation from the program.
          </p>
        </div>
        <div className="mt-8 lg:mt-16 flex items-center justify-center">
          <Button
            href="https://form.jotform.com/242634760229559"
            as={Link}
            color="primary"
            showAnchorIcon
            variant="solid"
			size='lg'
          >
            Apply now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProgramFeesCard;
