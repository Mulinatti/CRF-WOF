interface AreaProps {
  side: boolean;
}

const Area = ({side}: AreaProps) => {
  return (
    <div className={`absolute left-1/2 ${side ? "bottom-0 border-b-transparent" : "top-0 border-t-transparent"}  -translate-x-1/2 border-4 border-white/20 w-52 h-20`}>
    </div>
  );
};

export default Area;
