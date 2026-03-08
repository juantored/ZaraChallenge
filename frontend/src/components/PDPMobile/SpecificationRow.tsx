type SpecificationRowProps = {
  title: string;
  value: string;
};

function SpecificationRow({ title, value }: SpecificationRowProps) {
  return (
    <tr>
      <td>{title.toUpperCase()}</td>
      <td>{value}</td>
    </tr>
  );
}

export default SpecificationRow;
