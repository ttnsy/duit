import { ItemGroup } from "@/components/ItemGroup";

export const ItemTable = ({ data, groups }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-sm text-gray-700 uppercase">
        <tr>
          <th className="py-3 px6"></th>
          <th className="py-3 px6">Budget</th>
          <th className="py-3 px6">Spend</th>
          <th className="py-3 px6">Remaining</th>
          <th className="py-3 px6 text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <ItemGroup data={data} groups={groups} />
      </tbody>
    </table>
  );
};
