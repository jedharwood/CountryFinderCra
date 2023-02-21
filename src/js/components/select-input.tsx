import React from 'react';
import Select from 'react-select';
import { type SelectProps } from '../types/types';

export const SelectInput: React.FunctionComponent<SelectProps> = (
  props: SelectProps,
) => {
  return (
    <div className="w-full shadow-md">
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
