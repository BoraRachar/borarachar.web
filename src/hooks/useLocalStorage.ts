interface LocalStoreHook {
  get: (key: string) => string | null;
  set: (key: string, value: string) => void;
  remove: (key: string) => void;
}

export function useLocalStorage(): LocalStoreHook {
  const get = (key: string) => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  };

  const set = (key: string, value: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  };

  const remove = (key: string) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  };

  return { get, set, remove };
}