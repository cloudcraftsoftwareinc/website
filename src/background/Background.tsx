import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  textColor?: string;
  image?: string;
};

const Background = (props: IBackgroundProps) => {
  const imageStyle = {
    backgroundImage: `url('${props.image}')`,
  };
  const textColor = props.textColor || 'text-black';
  return (
    <>
      {props.image && (
        <div
          className={`${props.color} ${textColor} bg-local bg-center`}
          style={imageStyle}
        >
          {props.children}
        </div>
      )}
      {!props.image && <div className={props.color}>{props.children}</div>}
    </>
  );
};

export { Background };
