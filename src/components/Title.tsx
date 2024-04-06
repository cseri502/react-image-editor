interface ITitle {
  text: string;
}

const Title = ({ text }: ITitle) => {
  return (
    <p className="m-5 text-xl text-gray-800 dark:text-slate-200 font-semibold">
      {text}
    </p>
  );
};

export default Title;
