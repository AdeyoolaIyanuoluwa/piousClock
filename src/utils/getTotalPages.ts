const getTotalPages = (totalItems: number, limit: number) => {
    return Math.ceil(Number(totalItems / limit));
  };
  
  export default getTotalPages;
  