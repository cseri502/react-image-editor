interface IButton {
    text: string;
    active: boolean;
    onClick?: () => void;
  }
  
  const Button = (props: IButton) => {
    return (
      <button
        type="button"
        className={`font-inter p-2 ${
          props.active? "bg-blue-400" : "bg-gray-300"
        } ${
          props.active? "text-white" : "text-gray-800"
        } rounded-sm duration-150 ${
          props.active? "hover:bg-blue-500" : "hover:bg-gray-400"
        } cursor-pointer`}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    );
  };
  
  export default Button;