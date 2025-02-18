import { Smile } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <div className="mt-6 text-lg text-gray-500">
        <Smile size={50} className="text-gray-400 mb-4" />
        <p>
          It seems like we don't have any blogs yet. Stay tuned for exciting
          updates!
        </p>
        <p>
          In the meantime, explore other sections of our site to learn more
          about us.
        </p>
      </div>
    </div>
  );
}
