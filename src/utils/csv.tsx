
export const convertFile = (file, type) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (type === 'toCsv') {
      reader.readAsText(file);
      reader.onload = () => resolve(csv2json(reader.result));
    } else {
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    }
    reader.onerror = (error) => reject(error);
  });