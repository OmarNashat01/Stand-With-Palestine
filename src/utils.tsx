export const init = (key: any, defaultValue: any) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

export const saveSet = (setter: any, name: string, value: any) => {
  function newSetter(item: any) {
    setter(item);
    localStorage.setItem(name, JSON.stringify(item));
  }
  newSetter(value);
};
