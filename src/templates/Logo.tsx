import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
  light?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-2xl'
    : 'font-semibold text-xl';
  const light = props.light ? '100' : '900';

  return (
    <span
      className={`text-primary- inline-flex items-center${light} ${fontStyle}`}
    >
      <img
        width={size}
        height={size}
        style={{ ['paddingRight' as any]: 10 }}
        src="/cloudcraft-logo.png"
      ></img>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
