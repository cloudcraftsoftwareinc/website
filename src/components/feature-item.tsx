import { CheckIcon } from '@/utils/check-icon';

type IFeatureItemProps = {
  text: string;
};

const FeatureItem = (props: IFeatureItemProps) => {
  return (
    <div className="flex pt-2">
      <CheckIcon size="6" />
      <span className="ml-2 text-xl text-slate-700">{props.text}</span>
    </div>
  );
};

export { FeatureItem };
