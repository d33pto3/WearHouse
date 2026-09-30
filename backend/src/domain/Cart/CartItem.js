export default class CartItem {
  constructor(id, cart_id, variant_id, quantity) {
    this.id = id;
    this.cart_id = cart_id;
    this.variant_id = variant_id;
    this.quantity = quantity;
  }

  // createItem(id, user_id, items) {

  // }

  increaseQuantity(quantity) {
    return (this.quantity += quantity);
  }

  decreaseQuantity(quantity) {
    return (this.quantity -= quantity);
  }
}
