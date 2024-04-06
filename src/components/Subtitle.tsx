interface ISubtitle {
  text: string;
}

const Subtitle = ({ text }: ISubtitle) => {
  return (
    <p className="m-2 text-lg text-gray-800 dark:text-slate-200 font-semibold">
      {text}
    </p>
  );
};

export default Subtitle;
