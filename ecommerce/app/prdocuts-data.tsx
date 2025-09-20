export interface Product {
    _id: string,
    name: string,
    imageUrl: string,
    price: number,
    description: string,
};


export const products: Product[] = [
  {
    _id: "prod-001",
    name: "Wireless Bluetooth Headphones",
    imageUrl: "headphone.png",
    price: 99.99,
    description: "High-quality sound with active noise cancellation and a comfortable, foldable design.",
  },
  {
    _id: "prod-002",
    name: "Smartwatch",
    imageUrl: "smartwatch.png",
    price: 199.50,
    description: "Track your fitness, receive notifications, and make calls right from your wrist.",
  },
  {
    _id: "prod-003",
    name: "Portable Power Bank",
    imageUrl: "powerbank.png",
    price: 35.00,
    description: "20,000mAh capacity to keep your devices charged on the go. Compact and lightweight.",
  }
];
