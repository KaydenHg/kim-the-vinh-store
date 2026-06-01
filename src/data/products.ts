export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: 'Rings' | 'Necklaces' | 'Bracelets' | 'Earrings';
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Eternal Gold Ring',
    price: 1200,
    description: '18K solid gold ring with a minimalist design.',
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Diamond Solitaire Necklace',
    price: 2500,
    description: 'Stunning diamond pendant on a white gold chain.',
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Golden Cuff Bracelet',
    price: 850,
    description: 'Polished gold cuff for a modern statement look.',
    category: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    name: 'Sapphire Drop Earrings',
    price: 1800,
    description: 'Elegant deep blue sapphire earrings in silver setting.',
    category: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 5,
    name: 'Rose Gold Band',
    price: 950,
    description: 'Simple and elegant rose gold wedding band.',
    category: 'Rings',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 6,
    name: 'Pearl String Necklace',
    price: 1400,
    description: 'Classic freshwater pearl necklace with gold clasp.',
    category: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&q=80&w=400',
  },
];
