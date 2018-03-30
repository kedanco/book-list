export function selectBook(book){
  // console.log(`A book has been selected: ${book.title}`);

  // selectBook is an ActionCreator, and needs to return an action, an object with a type property (and sometimes payload)
  return {
    type: 'BOOK_SELECTED', //Sometimes a Constant instead of string
    payload: book
  };
}
