import { EditItem } from "@/components/EditItem";
import { DeleteItem } from "@/components/DeleteItem";
import { formatItemNum } from "@/lib/numbers";

export const Items = ({ data }) => {
  const rowItems = data.map((item) => {
    const { budget, spend, remaining } = formatItemNum(item);

    return (
      <tr key={item._id}>
        <td className="td-category">{item.category}</td>
        <td>{budget}</td>
        <td>{spend}</td>
        <td>{remaining}</td>
        <td className="flex justify-center">
          <EditItem item={item} />
          <DeleteItem item={item} />
        </td>
      </tr>
    );
  });

  return <>{rowItems}</>;
};
