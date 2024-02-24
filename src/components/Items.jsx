import { EditButton, DeleteButton } from "@/components/Buttons";

export const Items = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <tr key={item._id}>
            <td className="py-3 px6">{item.category}</td>
            <td className="py-3 px6">{item.budget_plan}</td>
            <td className="py-3 px6">{item.budget_actual}</td>
            <td className="py-3 px6">{item.budget_plan - (item.budget_actual || 0)}</td>
            <td className="flex justify-center gap-1 py-3">
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
        );
      })}
    </>
  );
};
