const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};

export const formatItemNum = (item) => {
  const budget = item.budget_plan || 0;
  const spend = item.budget_actual || 0;
  const remaining = budget - spend;

  return {
    budget: rupiah(budget),
    spend: rupiah(spend),
    remaining: rupiah(remaining),
  };
};

const calculateSum = (data, prop) => {
  const total = data.reduce((accumulator, object) => {
    return accumulator + Number(object[prop]) || 0;
  }, 0);

  return total;
};

export const getTotalValues = (data) => {
  const budget = calculateSum(data, "budget_plan");
  const spend = calculateSum(data, "budget_actual");
  const remaining = budget - spend;

  return {
    budget: rupiah(budget),
    spend: rupiah(spend),
    remaining: rupiah(remaining),
  };
};
