export const cleanupObject = (object: any) => {
    if (object === undefined || object === null) {
        // Handle the case where the object is undefined or null.
        return {};
    }
  
    return Object.entries(object).reduce((acc, [key, value]) => {
        if (value) return { ...acc, [key]: value };
        return { ...acc };
    }, {});
  };
  
  
  export const urlToSearchParams = (url:any, object:any) =>
    `${url}?${new URLSearchParams(cleanupObject(object)).toString()}`;