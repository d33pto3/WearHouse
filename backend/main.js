import Product from "./src/domain/Product/Product";

const cgSmallBlackShirt = new ProductVariant(
  "CG-BLK-S",
  "black",
  "S",
  300,
  30,
  "CG001-BLK-S",
);
const cgMediumBlackShirt = new ProductVariant(
  "CG-BLK-M",
  "black",
  "M",
  300,
  50,
  "CG001-BLK-M",
);
const cgLargeBlackShirt = new ProductVariant(
  "CG-BLK-L",
  "black",
  "L",
  300,
  50,
  "CG001-BLK-L",
);
const cgExtraLargeBlackShirt = new ProductVariant(
  "CG-BLK-XL",
  "black",
  "XL",
  300,
  30,
  "CG001-BLK-XL",
);
const cgSmallWhiteShirt = new ProductVariant(
  "CG-WHT-S",
  "white",
  "S",
  300,
  30,
  "CG001-WHT-S",
);
const cgMediumWhiteShirt = new ProductVariant(
  "CG-WHT-M",
  "white",
  "M",
  300,
  50,
  "CG001-WHT-M",
);
const cgLargeWhiteShirt = new ProductVariant(
  "CG-WHT-L",
  "white",
  "L",
  300,
  50,
  "SW001-WHT-L",
);
const cgExtraLargeWhiteShirt = new ProductVariant(
  "CG-WHT-XL",
  "white",
  "XL",
  300,
  30,
  "SW001-WHT-XL",
);

const swSmallBlackPant = new ProductVariant(
  "SW-BLK-S",
  "black",
  32,
  300,
  30,
  "SW001-BLK-S",
);
const swMediumBlackPant = new ProductVariant(
  "SW-BLK-M",
  "black",
  34,
  300,
  50,
  "SW001-BLK-M",
);
const swLargeBlackPant = new ProductVariant(
  "SW-BLK-L",
  "black",
  36,
  300,
  50,
  "SW001-BLK-L",
);
const swExtraLargeBlackPant = new ProductVariant(
  "SW-BLK-XL",
  "black",
  38,
  300,
  30,
  "SW001-BLK-XL",
);
const swSmallWhitePant = new ProductVariant(
  "SW-WHT-S",
  "white",
  32,
  300,
  30,
  "SW001-WHT-S",
);
const swMediumWhitePant = new ProductVariant(
  "SW-WHT-M",
  "white",
  34,
  300,
  50,
  "SW001-WHT-M",
);
const swLargeWhitePant = new ProductVariant(
  "SW-WHT-L",
  "white",
  36,
  300,
  50,
  "SW001-WHT-L",
);
const swExtraLargeWhitePant = new ProductVariant(
  "SW-WHT-XL",
  "white",
  38,
  300,
  30,
  "SW001-WHT-XL",
);

const pantVariants = [
  swExtraLargeBlackPant,
  swExtraLargeWhitePant,
  swLargeBlackPant,
  swLargeWhitePant,
  swMediumBlackPant,
  swMediumWhitePant,
  swSmallBlackPant,
  swSmallWhitePant,
];

const teeShirtVariants = [
  cgExtraLargeBlackShirt,
  cgExtraLargeWhiteShirt,
  cgLargeBlackShirt,
  cgLargeWhiteShirt,
  cgMediumBlackShirt,
  cgMediumWhiteShirt,
  cgSmallBlackShirt,
  cgSmallWhiteShirt,
];

const teeShirt = new Product(
  "P-001",
  "T-shirt",
  "shirt",
  "chagenji",
  teeShirtVariants,
);

const pant = new Product("P-002", "Pant", "pant", "shaw", pantVariants);

const jessi = new User("U-001", "Jasmin", "user");

const jessiCart = new Cart("C-001", jessi.id);

const jessiCartItem1 = new CartItem(
  "CI-001",
  jessiCart.id,
  teeShirtVariants[1].id,
  5,
);
const jessiCartItem2 = new CartItem(
  "CI-002",
  jessiCart.id,
  teeShirtVariants[2].id,
  10,
);

jessiCart.addItem(jessiCartItem1);
jessiCart.addItem(jessiCartItem2);

const variantsArray = Object.values(variants);

const totalPrice = jessiCart
  .getItems()
  .reduce(
    (acc, item) =>
      acc +
      variantsArray.find((variant) => variant.id === item.variant_id).price *
        item.quantity,
    0,
  );

console.log(`Total price of items in the cart: ${totalPrice}`);
