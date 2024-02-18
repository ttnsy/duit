export async function getData() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/dA6u4jpqjVHH");
  const data = await res.json();
  return data;
}
