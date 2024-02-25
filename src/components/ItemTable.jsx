import { ItemGroup } from "@/components/ItemGroup";
import { ItemTotal } from "@/components/ItemTotal";

export const ItemTable = ({ data, groups }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Budget</th>
          <th>Spend</th>
          <th>Remaining</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <ItemTotal data ={data} />
        <ItemGroup data={data} groups={groups} />
      </tbody>
    </table>
  );
};
