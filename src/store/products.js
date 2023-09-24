const initialState = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 70.0,
    inStock: 100,
    inCart: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GIfcM0buafSwPXpSwi7qvm70XbjbTwDILzUAEwGfdYKRPC6BrsrQoDCBX7B21iPfuIE&usqp=CAU",
  },
  {
    id: 2,
    name: "Gift Basket",
    category: "Gifts",
    price: 225.0,
    inStock: 30,
    inCart: 1,
    image:
      "https://www.buderimfloralart.com.au/cdn/shop/products/PhotoRoom-20230329_175956.png?v=1680077196&width=1500",
  },
  {
    id: 3,
    name: "Necklace",
    category: "Accessories",
    price: 130.0,
    inStock: 100,
    inCart: 1,
    image:
      "https://m.media-amazon.com/images/I/61mPXRyVeDL.jpg",
  },
  {
    id: 4,
    name: "Phone",
    category: "Electronics",
    price: 50.0,
    inStock: 100,
    inCart: 1,
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-12-purple-2021?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1635202738000",
  },
  {
    id: 5,
    name: "PHONE",
    category: "Electronics",
    price: 80.0,
    inStock: 60,
    inCart: 1,
    image:
      "https://cdn.eraspace.com/media/catalog/product/i/p/iphone_14_pro_deep_purple_1_4.jpg",
  },
  {
    id: 6,
    name: "Necklacee",
    category: "Accessories",
    price: 85.0,
    inStock: 70,
    inCart: 1,
    image:
      "https://dynamic.zacdn.com/Kmz2y5bSnoZBvwGbkLtJOrc5u-I=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/aldo-8645-3559412-1.jpg",
  },
  {
    id: 8,
    name: "LAPTOP",
    category: "Electronics",
    price: 70.0,
    inStock: 80,
    inCart: 1,
    image:
      "https://i5.walmartimages.com/asr/c167f64b-ed1c-40ad-8c53-8d1454d9235c_3.cee584f58b8678506210c4714a9151cc.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
  {
    id: 9,
    name: "FLOWER",
    category: "Gifts",
    price: 75.0,
    inStock: 90,
    inCart: 1,
    image:
      "https://cdnp0.stackassets.com/3e813d45b7e1ea862e68655cb75520d0e45520f4/store/fcc1211464034cf77f89f6aeaf400ffe82792695a76b822792b4a9ce686d/product_38655_product_shots1.jpg",
  },
  {
    id: 5,
    name: "smart tv",
    category: "Electronics",
    price: 110.0,
    inStock: 100,
    inCart: 1,
    image:
      "https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/187686_2023_5.jpg",
  },
  {
    id: 1,
    name: "Ipad",
    category: "Electronics",
    price: 80.0,
    inStock: 100,
    inCart: 1,
    image:
      "https://cdn.shopify.com/s/files/1/2591/7416/products/apple-ipad-air-109-wifi-64gb-azul-mm9e3tya-tablet-apple-csystem-reinosa-693325_grande.jpg?v=1667641519",
  },
  {
    id: 2,
    name: "Laptop Mac",
    category: "Electronics",
    price: 55.0,
    inStock: 100,
    inCart: 1,
    image:
      "https://b2b.homescreen.pl/394618-large_default/tech-protect-smartshell-apple-macbook-air-15-2023-crystal-clear.jpg",
  },
  {
    id: 12,
    name: "IPAD",
    category: "Electronics",
    price: 40.0,
    inStock: 70,
    inCart: 1,
    image:
"https://cdn.kemik.gt/2021/11/MYFM2LZ-A-APPLE-1200x1200-2-526x526.jpg",
  },
  {
    id: 13,
    name: "Laptopp",
    category: "Electronics",
    price: 85.0,
    inStock: 70,
    inCart: 1,
    image:
"https://b2b.homescreen.pl/394618-large_default/tech-protect-smartshell-apple-macbook-air-15-2023-crystal-clear.jpg"  },
  {
    id: 14,
    name: "Perfumee",
    category: "Gifts",
    price: 120.0,
    inStock: 70,
    inCart: 1,
    image:
"https://hips.hearstapps.com/hmg-prod/images/coco-mademoiselle-perfume-chanel-1675113242.png?crop=0.8330871491875923xw:1xh;center,top&resize=1200:*"  },
  {
    id: 15,
    name: "taplet",
    category: "Electronics",
    price: 20.0,
    inStock: 70,
    inCart: 1,
    image:
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY2OEHJhJ5UzyfzvDFbluv96Rvvs6xS0gclg&usqp=CAU"  },
  {
    id: 16,
    name: "Perfume",
    category: "Gifts",
    price: 40.0,
    inStock: 70,
    inCart: 1,
    image:
"https://m.media-amazon.com/images/I/614+6kcDXOL.jpg"  },
  {
    id: 17,
    name: "ROSE",
    category: "Gifts",
    price: 90.0,
    inStock: 70,
    inCart: 1,
    image:
      "https://m.media-amazon.com/images/I/71D75NGvvEL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 18,
    name: "Laptop Dell",
    category: "Electronics",
    price: 25.0,
    inStock: 100,
    inCart: 1,
    image:
      "https://i5.walmartimages.com/asr/58704dd0-db4c-426b-a08f-dc764a5f4412_1.3217ce48bebdd11d06f6e8b77f344ae2.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
];
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_PRODUCTS":
      return payload;
    case "ADD_TO_CART":
      return state.map((product) => {
        if (product.name === payload.name && product.inStock > 0) {
          return { ...product, inStock: product.inStock - 1 };
        } else {
          return product;
        }
      });
    case "REMOVE_FROM_CART":
      return state.map((product) => {
        if (product.name === payload.name) {
          return { ...product, inStock: product.inStock + 1 };
        } else {
          return product;
        }
      });
    default:
      return state;
  }
};
export default reducer;
