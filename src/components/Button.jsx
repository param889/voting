function Button(props) {
  return (
    <>
      <button
        className={`rounded-none bg-${props.color}-300 h-16 w-60 text-2xl mt-10 ml-16 mr-12 text-center shadow-md shadow-yellow-400 font-serif hover:bg-yellow-200 `}
      >
        {props.content}
      </button>
    </>
  );
}

export default Button;
