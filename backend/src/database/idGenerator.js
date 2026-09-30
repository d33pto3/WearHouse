let counters = {
  cart: 401,
  cartItem: 501,
  user: 101,
};

export const generateId = (prefix) => {
  if (!counters[prefix]) counters[prefix] = 1;
  counters[prefix] += 1;
  return `${prefix}_${counters[prefix]}`;
};
