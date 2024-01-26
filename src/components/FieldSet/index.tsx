import { MinusCircle, PlusCircle } from "lucide-react";

interface FieldSetProps {
  width?: string;
  label: string;
  stat?: boolean;
}


const FieldSet = ({ label, width = "w-full", stat = false}: FieldSetProps) => {
  return (
    <fieldset className={`${width}`}>
            <label className="block mx-2">{label}</label>
            <div className="flex items-center">
              <MinusCircle className={`cursor-pointer ${!stat && "hidden"}`}/>
              <input className={`${width} mx-2`} type="text" />
              <PlusCircle className={`cursor-pointer ${!stat && "hidden"}`} />
            </div>
    </fieldset>
  );
};

export default FieldSet;
