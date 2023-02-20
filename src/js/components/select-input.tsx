import React from 'react';
import Select from 'react-select';
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
  return (
    <div className="w-full px-2 py-3 mb-3">
      <Select
        required={true}
        isSearchable={props.isSearchable}
        options={props.options}
        onChange={props.onChange}
        placeholder={props.placeHolder}
      />
    </div>
  );
};
