import Link from 'next/link';

import { Background } from '../background/Background';

const GetStartedBlurb = () => (
  <Background color="bg-gray-100 rounded-2xl mx-8">
    <div className="mt-8 flex flex-wrap items-center justify-between px-4">
      <div className="w-full p-4 text-center">
        <p className="py-4 font-semibold">
          Free small business consultation,{' '}
          <Link href="/services" className="text-primary-500">
            contact us to get started
          </Link>
          .
        </p>
      </div>
    </div>
  </Background>
);

export { GetStartedBlurb };
