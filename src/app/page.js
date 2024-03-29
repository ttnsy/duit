import toast from "react-hot-toast";

import { getData } from "@/lib/fetchAPI";
import { CreateItem } from "@/components/CreateItem";
import { ItemTable } from "@/components/ItemTable";

export default async function Home() {
  let itemData;
  let itemGroups;

  try {
    const { data } = await getData();
    itemData = data;

    itemGroups = [...new Set(data.map((x) => x.group))];
  } catch (error) {
    toast.error("Error fetching data:", error.message);
  }

  return (
    <main>
      <div className="main__container">
        <div className="create-btn__container">
          <CreateItem />
        </div>
        <ItemTable data={itemData} groups={itemGroups} />
      </div>
    </main>
  );
}
