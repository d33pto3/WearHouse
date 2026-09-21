export default class Cart {
  constructor(id, user_id) {
    this.id = id;
    this.user_id = user_id;
    this.items = [];
  }

  // Getters
  // getId() {
  //   return this.id;
  // }

  // getUserId() {
  //   return this.user_id;
  // }

  getItem(itemId) {
    return this.items.find((item) => item.id === itemId);
  }

  getItems() {
    return this.items;
  }

  // setters (not needed here)

  // Behaviors
  // TODO: Implement quantity update logic while adding an item that already exists in the cart
  addItem(newItem) {
    this.items = [...this.items, newItem];
  }

  // removeItem(itemId) {

  // }

  // clear() {

  // }

  // getSubTotal() {

  // }
}