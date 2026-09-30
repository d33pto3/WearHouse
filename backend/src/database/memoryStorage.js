/**
 * In-Memory Persistence Storage
 * Emulates relational database tables using plain JavaScript objects (POJOs).
 */

export const memoryStorage = {
  users: [
    {
      id: "usr_101",
      name: "Alex Mercer",
      email: "alex.mercer@example.com",
      status: "active",
      createdAt: "2026-01-15T08:30:00.000Z",
    },
    {
      id: "usr_102",
      name: "Sophia Chen",
      email: "sophia.chen@example.com",
      status: "active",
      createdAt: "2026-02-20T14:15:00.000Z",
    },
    {
      id: "usr_103",
      name: "Marcus Vance",
      email: "m.vance@example.com",
      status: "active",
      createdAt: "2026-03-05T11:45:00.000Z",
    },
    {
      id: "usr_104",
      name: "Elena Rostova",
      email: "elena.r@example.com",
      status: "suspended",
      createdAt: "2026-04-12T19:10:00.000Z",
    },
  ],

  products: [
    {
      id: "prd_201",
      title: "Custom Mechanical Keyboard",
      slug: "custom-mechanical-keyboard",
      description:
        "75% layout hot-swappable mechanical keyboard with aluminum case.",
      category: "Electronics",
      basePrice: 12000, // Cents/Poisha (e.g., $120.00 / ৳120.00)
      isAvailable: true,
      createdAt: "2026-01-01T00:00:00.000Z",
    },
    {
      id: "prd_202",
      title: "Ergonomic Wireless Mouse",
      slug: "ergonomic-wireless-mouse",
      description:
        "Vertical wireless mouse with adjustable DPI and silent clicks.",
      category: "Electronics",
      basePrice: 4500,
      isAvailable: true,
      createdAt: "2026-01-05T00:00:00.000Z",
    },
    {
      id: "prd_203",
      title: 'Ultra-Wide Gaming Monitor 34"',
      slug: "ultrawide-gaming-monitor-34",
      description: "Curved 144Hz QD-OLED display with 0.03ms response time.",
      category: "Monitors",
      basePrice: 79900,
      isAvailable: true,
      createdAt: "2026-02-10T00:00:00.000Z",
    },
    {
      id: "prd_204",
      title: "Desk Mat - Minimalist Topo",
      slug: "desk-mat-minimalist-topo",
      description: "900x400mm water-resistant desk pad with stitched edges.",
      category: "Accessories",
      basePrice: 2500,
      isAvailable: true,
      createdAt: "2026-03-01T00:00:00.000Z",
    },
    {
      id: "prd_205",
      title: "USB-C Audio Interface",
      slug: "usbc-audio-interface",
      description:
        "2-in/2-out studio quality audio interface with low-noise preamps.",
      category: "Audio",
      basePrice: 15000,
      isAvailable: false,
      createdAt: "2026-03-15T00:00:00.000Z",
    },
  ],

  productVariants: [
    // Variants for prd_201 (Mechanical Keyboard)
    {
      id: "var_301",
      productId: "prd_201",
      sku: "MK75-BLK-TACTILE",
      attributes: {
        color: "Anodized Black",
        switch: "Gateron Brown (Tactile)",
      },
      priceOverride: null, // Uses basePrice
      stockQuantity: 18,
      isAvailable: true,
    },
    {
      id: "var_302",
      productId: "prd_201",
      sku: "MK75-WHT-LINEAR",
      attributes: { color: "E-White", switch: "Gateron Red (Linear)" },
      priceOverride: 12500, // Premium for E-white coating
      stockQuantity: 4,
      isAvailable: true,
    },
    {
      id: "var_303",
      productId: "prd_201",
      sku: "MK75-NVY-CLICKY",
      attributes: { color: "Navy Blue", switch: "Gateron Blue (Clicky)" },
      priceOverride: null,
      stockQuantity: 0, // Out of stock
      isAvailable: false,
    },

    // Variants for prd_202 (Ergonomic Mouse)
    {
      id: "var_304",
      productId: "prd_202",
      sku: "MS-ERG-BLK",
      attributes: { color: "Matte Black" },
      priceOverride: null,
      stockQuantity: 42,
      isAvailable: true,
    },
    {
      id: "var_305",
      productId: "prd_202",
      sku: "MS-ERG-GRY",
      attributes: { color: "Space Gray" },
      priceOverride: null,
      stockQuantity: 11,
      isAvailable: true,
    },

    // Variants for prd_203 (Monitor)
    {
      id: "var_306",
      productId: "prd_203",
      sku: "MON-34-OLED",
      attributes: { resolution: "3440x1440", refreshRate: "144Hz" },
      priceOverride: null,
      stockQuantity: 7,
      isAvailable: true,
    },

    // Variants for prd_204 (Desk Mat)
    {
      id: "var_307",
      productId: "prd_204",
      sku: "DM-TOPO-BLK",
      attributes: { theme: "Dark Topography" },
      priceOverride: null,
      stockQuantity: 85,
      isAvailable: true,
    },
    {
      id: "var_308",
      productId: "prd_204",
      sku: "DM-TOPO-WHT",
      attributes: { theme: "Light Topography" },
      priceOverride: null,
      stockQuantity: 30,
      isAvailable: true,
    },
  ],

  carts: [
    {
      id: "crt_401",
      userId: "usr_101",
      status: "active",
      createdAt: "2026-09-29T10:00:00.000Z",
      updatedAt: "2026-09-30T09:00:00.000Z",
    },
    {
      id: "crt_402",
      userId: "usr_102",
      status: "active",
      createdAt: "2026-09-30T07:20:00.000Z",
      updatedAt: "2026-09-30T08:15:00.000Z",
    },
    {
      id: "crt_403",
      userId: "usr_103",
      status: "abandoned",
      createdAt: "2026-09-15T14:00:00.000Z",
      updatedAt: "2026-09-15T14:30:00.000Z",
    },
  ],

  cartItems: [
    // Items for Cart crt_401 (Alex Mercer)
    {
      id: "cit_501",
      cartId: "crt_401",
      variantId: "var_301", // Black Mechanical Keyboard
      quantity: 1,
      addedAt: "2026-09-29T10:05:00.000Z",
    },
    {
      id: "cit_502",
      cartId: "crt_401",
      variantId: "var_307", // Dark Topo Desk Mat
      quantity: 2,
      addedAt: "2026-09-29T10:12:00.000Z",
    },

    // Items for Cart crt_402 (Sophia Chen)
    {
      id: "cit_503",
      cartId: "crt_402",
      variantId: "var_306", // 34" Ultrawide OLED
      quantity: 1,
      addedAt: "2026-09-30T07:22:00.000Z",
    },
    {
      id: "cit_504",
      cartId: "crt_402",
      variantId: "var_304", // Ergonomic Mouse (Black)
      quantity: 1,
      addedAt: "2026-09-30T07:25:00.000Z",
    },

    // Items for Cart crt_403 (Marcus Vance - Abandoned Cart)
    {
      id: "cit_505",
      cartId: "crt_403",
      variantId: "var_302", // E-White Keyboard
      quantity: 1,
      addedAt: "2026-09-15T14:05:00.000Z",
    },
  ],
};
