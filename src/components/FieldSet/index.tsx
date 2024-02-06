import { MinusCircle, PlusCircle } from "lucide-react";
import { useRef } from "react";

interface FieldSetProps {
  value: string | number;
  width?: string;
  label: string;
  stat?: boolean;
  inputChange: (value: string) => void;
}

const FieldSet = ({
  value,
  label,
  inputChange,
  width = "w-full",
  stat = false,
}: FieldSetProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputChange(e.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <fieldset className={`${width} my-1`}>
      <label className="block mx-2">{label}</label>
      <div className="flex items-center">
        <MinusCircle
          onClick={() => {
            if (inputRef.current) {
              const statValue = parseInt(inputRef.current.value) - 1;
              inputChange(statValue.toString());
            }
          }}
          className={`cursor-pointer ${!stat && "hidden"}`}
        />
        <input
          ref={inputRef}
          value={value}
          onChange={handleInput}
          className={`${width} mx-2`}
          type="text"
        />
        <PlusCircle
          onClick={() => {
            if (inputRef.current) {
              const statValue = parseInt(inputRef.current.value) + 1;
              inputChange(statValue.toString());
            }
          }}
          className={`cursor-pointer ${!stat && "hidden"}`}
        />
      </div>
    </fieldset>
  );
};

export default FieldSet;
