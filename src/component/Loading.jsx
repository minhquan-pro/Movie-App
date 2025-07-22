const Loading = () => {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center bg-black/30">
      <p className="h-[4rem] w-[4rem] animate-spin rounded-full border-[4px] border-black border-r-transparent"></p>
    </div>
  );
};

export default Loading;
