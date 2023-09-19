class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.items = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.items.length;
  }
  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    if (pageIndex + 1 > this.pageCount() || pageIndex < 0) return -1;
    const beginning = this.itemsPerPage * pageIndex;
    return this.items.slice(beginning, beginning + this.itemsPerPage).length;
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range());
    if (itemIndex > this.itemCount() - 1 || itemIndex < 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
