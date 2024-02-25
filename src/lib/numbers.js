const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

export const formatItemNum = (item) => {
  const budget = item.budget_plan || 0;
  const spend = item.budget_actual|| 0;
  const remaining = budget - spend;

  return {
    budget: rupiah(budget),
    spend: rupiah(spend),
    remaining: rupiah(remaining)
  };
};
