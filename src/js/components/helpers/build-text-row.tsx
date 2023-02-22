export interface TextRowSize {
  size: 'xs' | 'm';
}

export const buildTextRow = (
  label: string,
  value: string | number,
  { size }: TextRowSize,
): JSX.Element => {
  return (
    <span className={`flex text-${size.toString()} mb-1`}>
      <p className="pr-1">{label}:</p>
      <p className="text-slate-600">{value}</p>
    </span>
  );
};
