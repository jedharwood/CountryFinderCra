import React, { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../context/app-context';
import { type SelectOption } from '../types/types';

interface SelectProps {
  isSearchable: boolean;
  placeHolder: string;
  options: SelectOption[];
  onChange: (option: SelectOption | null) => void;
}

export const SelectInput: React.FunctionComponent<SelectProps> = (
  props: SelectProps,
) => {
  const { loading } = useContext(AppContext);
  const { isSearchable, placeHolder, options, onChange } = props;

  return (
    <div className="w-full shadow-md">
      <Select
        required={true}
        isSearchable={isSearchable}
        options={options}
        onChange={onChange}
        placeholder={placeHolder}
        isLoading={loading}
      />
    </div>
  );
};
