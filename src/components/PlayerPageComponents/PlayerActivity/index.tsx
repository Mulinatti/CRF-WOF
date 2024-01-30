import { ArrowLeft, ArrowRight } from "lucide-react";

interface PlayerActivityProps {
  entered: string;
  exit: string;
}

const PlayerActivity = ({ entered, exit }: PlayerActivityProps) => {
  return (
    <section className="backdrop-blur-sm py-5 flex justify-between">
      <div className="flex">
        <ArrowRight color="green" strokeWidth={3} size={20} />
        <p className="text-sm ml-3">{entered}</p>
      </div>
      {exit && (
        <div className="flex">
          <p className="text-sm mr-3">05/10/2024</p>
          <ArrowLeft color="red" strokeWidth={3} size={20} />
        </div>
      )}
    </section>
  );
};

export default PlayerActivity;
