const localStorage = (store) => (next) => (action) => {
  const response = next(action);
  const { meta } = action;
  if (meta && meta.localStorage) {
    const { key, value } = meta.localStorage;
    window.localStorage.setItem(key, JSON.stringfy(value));
    console.log(action);
  }

  return response;
};
export default localStorage;
