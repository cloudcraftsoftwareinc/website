import Link from 'next/link';

import { Background } from '../background/Background';

const ServicesBlurb = () => (
  <Background color="bg-gray-100 rounded-2xl mx-8">
    <div className="mt-8 flex flex-wrap items-center justify-between px-4">
      <div className="w-full p-4 text-center">
        <p className="py-4 font-semibold">
          Looking for automation solutions? Check out our{' '}
          <Link href="/services" className="text-primary-500">
            services
          </Link>
          .
        </p>
      </div>
    </div>
  </Background>
);

export { ServicesBlurb };
