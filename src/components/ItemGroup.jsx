import { calculateSum, getTotalValues } from "@/lib/numbers";
import { Items } from "@/components/Items";

export const ItemGroup = ({ data, groups }) => {
  return (
    <>
      {groups.map((item) => {
        const filtered = data.filter((i) => i.group === item);
        const { budget, spend, remaining } = getTotalValues(filtered);

        return (
          <>
            <tr className="table-group">
              <td className="table-group__data">{item}</td>
              <td className="table-group__data">{budget}</td>
              <td className="table-group__data">{spend}</td>
              <td className="table-group__data">{remaining}</td>
            </tr>
            <Items data={filtered} />
          </>
        );
      })}
    </>
  );
};
