import { Items } from "@/components/Items";

export const ItemGroup = ({ data, groups }) => {
  return (
    <>
      {groups.map((item) => {
        const filtered = data.filter((i) => i.group === item);
        return (
          <>
            <tr className="table-group">
              <td className="table-group__data" colSpan="5">{item}</td>
            </tr>
            <Items data={filtered} />
          </>
        );
      })}
    </>
  );
};
