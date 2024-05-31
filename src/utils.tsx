export const init = (key: any, defaultValue: any) => {
  if (typeof window !== "undefined") {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  }
  else
    return defaultValue;
};

export const saveSet = (setter: any, name: string, value: any) => {
  function newSetter(item: any) {
    setter(item);
    if (typeof window !== "undefined")
      window.localStorage.setItem(name, JSON.stringify(item));
  }
  newSetter(value);
};

//@ts-ignore
export const blurFilter = () => {
  if (typeof window !== "undefined") {
    return (window.localStorage.getItem('blur')) ? `blur(${window.localStorage.getItem('blur')}px)` : `blur(0px)`;
  }
  else
    return `blur(0px)`;
}
