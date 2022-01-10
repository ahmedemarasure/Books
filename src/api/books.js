export const getLoadBooksRequest = () => ({
  method: "get",
  url: `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes`,
});

export const postAccountRequest = (data) => ({
  method: "post",
  url: "accounts",
  config: {
    data,
  },
});
export const deleteAccountRequest = (id) => ({
  method: "delete",
  url: `accounts/${id}`,
});

export const putAccountRequest = (data) => ({
  method: "put",
  url: `accounts/${data.id}`,
  config: {
    data,
  },
});
