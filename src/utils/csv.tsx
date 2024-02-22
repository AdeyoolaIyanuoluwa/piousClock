import csv2json from "csvjson-csv2json";

export const convertFile = (file: Blob, type: string) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (type === "toCsv") {
      reader.readAsText(file);
      reader.onload = () => resolve(csv2json(reader.result));
    } else {
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    }
    reader.onerror = (error) => reject(error);
  });

export const validateCSVFields = (data: any, CSVFields: any) => {
  const tableHeadings = Object.keys(data[0]).map((heading) =>
    heading.split("_").join(" ").toLowerCase()
  );

  const headersValidated = CSVFields.every((field: any) =>
    tableHeadings.includes(field)
  );
  const cellsValidated = data.every((obj: any) => {
    return Object.values(obj).every((value) => !!String(value));
  });

  return { headersValidated, cellsValidated, tableHeadings };
};

export const cleanupArray = (array: any) => {
  return array.filter((obj: any) => {
    // Check if any values in the object are empty
    const allValuesEmpty = Object.values(obj).every((value) => !value);

    // Keep the object in the array if it doesn't have empty values
    return !allValuesEmpty;
  });
};

export const axiosLoadedPercentage = ({ progressEvent, onChange }: any) => {
  const { loaded, total } = progressEvent;
  const percent = Math.floor((loaded * 100) / total);
  onChange?.(percent);
  return percent;
};
