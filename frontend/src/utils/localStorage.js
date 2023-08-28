export const getLS = (key) => {
  try {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
  } catch {
    return undefined;
  }
};

export const setLS = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const deleteLS = (key) => {
  localStorage.removeItem(key);
};
