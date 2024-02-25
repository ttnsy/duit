import { EditItem } from "@/components/EditItem";
import { DeleteItem } from "@/components/DeleteItem";

export const Items = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <tr key={item._id}>
            <td>{item.category}</td>
            <td>{item.budget_plan}</td>
            <td>{item.budget_actual}</td>
            <td>
              {item.budget_plan - (item.budget_actual || 0)}
            </td>
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
