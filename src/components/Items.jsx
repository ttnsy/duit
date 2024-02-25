import { rupiah } from "@/lib/numberFormat";
import { EditItem } from "@/components/EditItem";
import { DeleteItem } from "@/components/DeleteItem";

export const Items = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const budget = item.budget_actual || 0;
        const spend = item.budget_plan || 0;
        const remaining = budget - spend;

        return (
          <tr key={item._id}>
            <td className="td-category">{item.category}</td>
            <td>{rupiah(budget)}</td>
            <td>{rupiah(spend)}</td>
            <td>{rupiah(remaining)}</td>
            <td className="flex justify-center">
              <EditItem item={item} />
              <DeleteItem id={item._id} />
            </td>
          </tr>
        );
      })}
    </>
  );
};
