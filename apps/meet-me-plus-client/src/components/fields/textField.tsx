interface Props {
  Icon?: any;
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
}

const TextField = (props: Props) => {
  const { Icon, inputProps } = props;
  return (
    <label className="input input-bordered flex items-center gap-2 bg-transparent input-primary">
      <Icon />
      <input className="grow placeholder-neutral" {...inputProps} />
    </label>
  );
};

export default TextField;
