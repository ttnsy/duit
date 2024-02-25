import { getTotalValues } from "@/lib/numbers";

export const ItemTotal = ({ data }) => {
  const { budget, spend, remaining } = getTotalValues(data);

  return (
    <tr className="tr-total">
      <td></td>
      <td>({budget})</td>
      <td>({spend})</td>
      <td>({remaining})</td>
      <td></td>
    </tr>
  );
};
