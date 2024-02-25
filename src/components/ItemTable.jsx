import { ItemGroup } from "@/components/ItemGroup";

export const ItemTable = ({ data, groups }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Budget</th>
          <th>Spend</th>
          <th>Remaining</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <ItemGroup data={data} groups={groups} />
      </tbody>
    </table>
  );
};
