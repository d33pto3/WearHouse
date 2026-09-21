import { Cart, CartItem } from "../domain/Cart";

class CartRepository {
    /**
     * @param {Object} memoryStorage - In-memory storage object to store cart data.
     */

    constructor(memoryStorage) {
        this.storage = memoryStorage;
    }

    /**
     * Find a cart by its ID.
     * @param {string} cartId
     * @returns {Cart|null}
     */
    findById(cartId) {
        const cartDto = this.storage.carts.get(cartId);
        if(!cartDto) return null;

        return this._hydrate(cartDto);
    }

    findByUserId(userId) {
        const rawCartArray = Array.from(this.storage.carts.values());
        const rawCart = rawCartArray.find(cart => cart.user_id = userId);
        
        if(!rawCart) return null;

        return this._hydrate(rawCart);
    }

    save(cart) {
        const cartDto = {
            id: cart.id,
            userId: cart.getUserId(),
            items: cart.getItems().map(item => ({
                id: item.id,
                cartId: item.cart_id,
                variantId: item.variant_id,
                quantity: item.quantity 
            }))
        }

        this.storage.carts.set(cart.id, cartDto);
    }

    delete(cartId) {
        return this.storage.carts.delete(cartId);
    }

    _hydrate(rawCart) {
        const items = rawCart.items.map(rawItem => {
            const item = new CartItem(
                rawItem.id,
                rawItem.cartId,
                rawItem.variantId,
                rawItem.quantity
            );
            return item;
        }) 

        return new Cart(rawCart.id, rawCart.userId, items);
    }
}

export default CartRepository;