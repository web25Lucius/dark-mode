import {useEffect} from "react";

export const useDarkToggle = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = updatedValue => {
      setValue(updatedValue);
    };
    return [value, setValue, handleChanges];
  };


  .dark-mode__toggle