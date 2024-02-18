import { EditButton, DeleteButton } from "@/components/Buttons";

export const ItemTable = ({ data }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="py-3 px6">Group</th>
          <th className="py-3 px6">Category</th>
          <th className="py-3 px6">Budget</th>
          <th className="py-3 px6">Spend</th>
          <th className="py-3 px6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item._id}>
              <td className="py-3 px6">{item.group}</td>
              <td className="py-3 px6">{item.category}</td>
              <td className="py-3 px6">{item.budget_plan}</td>
              <td className="py-3 px6">{item.budget_actual}</td>
              <td className="flex justify-center gap-1 py-3">
                <EditButton />
                <DeleteButton />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
