interface Props {
  title: string;
}

function Title({ title }: Props) {
  return <div className="text-heading1-bold text-gray-950">{title}</div>;
}

export default Title;
