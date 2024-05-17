type TAsyncCallback<T> = () => Promise<T>;

const fullfillAndCache = async <T>(
  key: string,
  callback: TAsyncCallback<T>
) => {
  return await callback()
    .then((value) => {
      localStorage.setItem(key, JSON.stringify(value));
      return value;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};

export const cachePromiseInLocalStorage = async <T>(
  key: string,
  callback: TAsyncCallback<T>
): Promise<T | null> => {
  const cachedValue = localStorage.getItem(key);

  if (cachedValue) {
    fullfillAndCache(key, callback);
    return JSON.parse(cachedValue);
  }

  return await fullfillAndCache(key, callback);
};
