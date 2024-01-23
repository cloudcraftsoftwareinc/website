import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-primary-900 ${fontStyle}`}>
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
