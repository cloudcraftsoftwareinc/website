import Link from 'next/link';

import { Background } from '../background/Background';

const GetStartedBlurb = () => (
  <Background color="bg-gray-200 rounded-2xl">
    <div className="mt-8 flex flex-wrap items-center justify-between">
      <div className="w-full py-4 text-center">
        <p className="py-4 font-semibold">
          Free small business consultation,{' '}
          <Link
            target="_blank"
            href="https://m.me/201238836414988"
            className="text-primary-500"
          >
            contact us to get started 🚀
          </Link>
        </p>
      </div>
    </div>
  </Background>
);

export { GetStartedBlurb };
