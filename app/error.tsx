'use client';

import { Button } from '@nextui-org/button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-primary font-medium text-xl">
        Something went wrong!
      </h2>
      <Button className="my-4 w-32 text-primary" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
