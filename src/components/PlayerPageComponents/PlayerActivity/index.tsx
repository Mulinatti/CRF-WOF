import { ArrowRight } from "lucide-react";

const PlayerActivity = () => {
  return (
    <section className="backdrop-blur-sm py-5">
      <div className="flex">
        <ArrowRight color="green" strokeWidth={3} size={20} />
        <p className="text-sm ml-3">10/06/2023</p>
      </div>
    </section>
  );
};

export default PlayerActivity;
