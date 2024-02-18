import { ItemTable } from "@/components/ItemTable";
import { AddButton } from "@/components/Buttons";
import { getData } from "@/lib/data";

const { data } = await getData();

export default async function Home() {
  return (
    <main>
      <div className="max-w-screen-md mx-auto mt-5">
        <div className="flex items-center justify-between gap-1 mb-5">
          <AddButton />
        </div>
        <ItemTable data={data} />
      </div>
    </main>
  );
}
