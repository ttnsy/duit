import { CreateItem } from "@/components/CreateItem";
import { getData } from "@/lib/data";
import { ItemTable } from "@/components/ItemTable";

export default async function Home() {
  const { data } = await getData();
  const groups = [...new Set(data.map((x) => x.group))];

  return (
    <main>
      <div className="max-w-screen-md mx-auto mt-5">
        <div className="flex items-center justify-between gap-1 mb-5">
          <CreateItem />
        </div>
          <ItemTable data={data} groups={groups} />
      </div>
    </main>
  );
}
