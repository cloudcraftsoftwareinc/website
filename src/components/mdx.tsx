import type { ReactNode } from 'react';

type INodeWithChildren = {
  children: ReactNode;
};

const h1 = ({ children }: INodeWithChildren) => (
  <h1 className="mx-8 my-5 text-3xl font-bold text-primary-700">{children}</h1>
);

const h2 = ({ children }: INodeWithChildren) => (
  <h2 className="mx-8 my-5 mt-9 text-2xl font-semibold text-primary-700">
    {children}
  </h2>
);

const h3 = ({ children }: INodeWithChildren) => (
  <h3 className="text-grey-700 mx-8 my-4 font-semibold">{children}</h3>
);

const h4 = ({ children }: INodeWithChildren) => (
  <h4 className="mx-8 my-4 text-lg font-semibold text-primary-700">
    {children}
  </h4>
);

const p = ({ children }: INodeWithChildren) => (
  <p className="mx-8 my-3">{children}</p>
);

const ul = ({ children }: INodeWithChildren) => (
  <ul className="mx-8 my-3 list-disc pl-5 text-gray-700">{children}</ul>
);

const ol = ({ children }: INodeWithChildren) => (
  <ol className="mx-8 my-3 list-decimal pl-5 text-gray-700">{children}</ol>
);

const li = ({ children }: INodeWithChildren) => (
  <li className="mx-8 my-1">{children}</li>
);

const blockquote = ({ children }: INodeWithChildren) => (
  <blockquote className="p-4 text-center font-serif text-xl italic text-gray-500">
    {children}
  </blockquote>
);

// Export components
export { blockquote, h1, h2, h3, h4, li, ol, p, ul };
