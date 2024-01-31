import { MinusCircle, PlusCircle } from "lucide-react";

interface FieldSetProps {
  width?: string;
  label: string;
  stat?: boolean;
  inputChange: (value: string) => void;
}


const FieldSet = ({ label, inputChange, width = "w-full", stat = false}: FieldSetProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputChange(e.target.value)
  }

  return (
    <fieldset className={`${width}`}>
            <label className="block mx-2">{label}</label>
            <div className="flex items-center">
              <MinusCircle className={`cursor-pointer ${!stat && "hidden"}`}/>
              <input onChange={handleInput} className={`${width} mx-2`} type="text" />
              <PlusCircle className={`cursor-pointer ${!stat && "hidden"}`} />
            </div>
    </fieldset>
  );
};

export default FieldSet;
