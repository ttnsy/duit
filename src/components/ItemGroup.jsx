import { Items } from "@/components/Items";

export const ItemGroup = ({ data, groups }) => {
  return (
    <>
      {groups.map((item) => {
        const filtered = data.filter((i) => i.group === item);
        return (
          <>
            <tr className="text-sm font-bold text-gray-700 bg-gray-50">
              <td colSpan="5">{item}</td>
            </tr>
            <Items data={filtered} />
          </>
        );
      })}
    </>
  );
};
