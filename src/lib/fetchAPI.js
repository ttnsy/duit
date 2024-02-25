import { BACKEND_BASE_URL } from "@/constants";

export async function getData() {
  const res = await fetch(BACKEND_BASE_URL, {
    cache: "no-store",
  });
  const data = await res.json();

  if (!!res.ok) {
    return data;
  } else {
    throw new Error(data.info);
  }
}

export async function postData(formData) {
  const res = await fetch(BACKEND_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([formData]),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.info);
  }
}

export async function deleteData(id) {
  const res = await fetch(BACKEND_BASE_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([id]),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.info);
  }
}

export async function updateData(formData) {
  const res = await fetch(BACKEND_BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([formData]),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.info);
  }
}
