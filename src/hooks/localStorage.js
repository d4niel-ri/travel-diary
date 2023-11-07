export const useGetValFromLocal = (key, initialValue) => {
  try {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } else {
      return initialValue;
    }
  } catch (error) {
    console.error(error);
    return initialValue;
  }
}

export const useSetValToLocal = (key, value) => {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.error(error);
  }
}