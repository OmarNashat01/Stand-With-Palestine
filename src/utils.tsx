export const init = (key: any, defaultValue: any) => {
  if (typeof window === "undefined") return defaultValue;
  const storedValue = window.localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

export const saveSet = (setter: any, name: string, value: any) => {
  function newSetter(item: any) {
    setter(item);
    if (typeof window === "undefined") return;
    window.localStorage.setItem(name, JSON.stringify(item));
  }
  newSetter(value);
};

//@ts-ignore
export const blurFilter = () => {
    if (typeof window === "undefined") return `blur(0px)`;
    return (window.localStorage.getItem('blur'))? `blur(${window.localStorage.getItem('blur')}px)` : `blur(0px)`;
}
