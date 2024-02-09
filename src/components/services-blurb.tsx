import Link from 'next/link';

import { Background } from '../background/Background';

const ServicesBlurb = () => (
  <Background color="bg-gray-200 rounded-2xl">
    <div className="mt-8 flex flex-wrap items-center justify-between">
      <div className="w-full p-4 text-center">
        <p className="py-4 font-semibold">
          Need help fast-tracking your digital presence?{' '}
          <Link href="/" className="text-primary-500">
            Check out our services 🚀
          </Link>
        </p>
      </div>
    </div>
  </Background>
);

export { ServicesBlurb };
