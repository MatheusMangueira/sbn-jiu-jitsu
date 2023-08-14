type TitleProps = {
  title: string;
  color?: string;
};

export const Title = ({ title, color }: TitleProps) => {
  return (
    <div>
      <h1 className={`uppercase sm:text-4xl text-2xl ${color} font-medium`}>
        {title}
      </h1>
    </div>
  );
};
