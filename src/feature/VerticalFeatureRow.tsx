import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

type IVerticalFeatureRowProps2 = {
  title: string;
  description: string;
  title2: string;
  description2: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full sm:w-1/2 p-10">
        <img
          className="mt-5 rounded-lg"
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

const VerticalFeatureRow2 = (props: IVerticalFeatureRowProps2) => {
  const verticalFeatureClass2 = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass2}>
      <div className="w-full sm:w-1/2 text-justify p-6 sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold text-center">
          {props.title}
        </h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>
      <div className="w-full sm:w-1/2 p-6 text-justify sm:px-6">
        <h3 className="text-3xl text-gray-900 text-center font-semibold">
          {props.title2}
        </h3>
        <div className="mt-6 text-xl leading-9">{props.description2}</div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow, VerticalFeatureRow2 };
