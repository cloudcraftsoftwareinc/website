import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  id?: string;
  align?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  const align = props.align || 'center';

  return (
    <div
      className={`mx-auto max-w-screen-lg px-3 ${
        props.yPadding ? props.yPadding : 'py-32'
      }`}
    >
      {(props.title || props.description) && (
        <div className={`text- mb-12${align}`}>
          {props.title && (
            <h2
              className="text-4xl font-bold text-gray-900"
              id={`anchor-${props.id}`}
            >
              {props.title}
            </h2>
          )}
          {props.description && (
            <div className="mt-4 text-2xl ">{props.description}</div>
          )}
        </div>
      )}

      {props.children}
    </div>
  );
};

export { Section };
