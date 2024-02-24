import { Items } from "@/components/Items";

export const ItemGroup = ({ data, groups }) => {
  return (
    <>
      {groups.map((item) => {
        const filtered = data.filter((i) => i.group === item);
        return (
          <>
            <tr>
              <h3 className="text-sm font-bold text-gray-700 uppercase">{item}</h3>
            </tr>
            <Items data={filtered} />
          </>
        );
      })}
    </>
  );
};
