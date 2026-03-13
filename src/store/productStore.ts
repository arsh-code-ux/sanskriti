import { create } from 'zustand'
import type { Product } from '../types/product'

interface ProductStore {
  products: Product[]
  getProductsByCategory: (category: string) => Product[]
  getAllCategories: () => string[]
}

// Sample products data with relevant images from Unsplash
const sampleProducts: Product[] = [
  // Dry Fruits (12 products)
  {
    id: '1',
    name: 'Premium Almonds',
    price: 599,
    category: 'Dry Fruits',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Premium quality roasted almonds, rich in nutrients and perfect for healthy snacking.',
    keywords: ['almonds', 'dry fruits', 'healthy', 'premium']
  },
  {
    id: '2',
    name: 'Cashew Nuts',
    price: 699,
    category: 'Dry Fruits',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Finest quality cashew nuts, perfectly roasted and salted.',
    keywords: ['cashew', 'dry fruits', 'premium', 'roasted']
  },
  {
    id: '3',
    name: 'Golden Raisins',
    price: 299,
    category: 'Dry Fruits',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/7262942/pexels-photo-7262942.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Sweet and juicy golden raisins, naturally dried and preservative-free.',
    keywords: ['raisins', 'dry fruits', 'sweet', 'natural']
  },
  {
    id: '4',
    name: 'Mixed Dry Fruits',
    price: 899,
    category: 'Dry Fruits',
    packaging: '500g',
    images: ['https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'A premium mix of almonds, cashews, raisins, and walnuts for a complete nutrition pack.',
    keywords: ['mixed', 'dry fruits', 'healthy', 'combo']
  },
  {
    id: '5',
    name: 'Walnut Kernels',
    price: 799,
    category: 'Dry Fruits',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Brain-healthy walnut kernels, rich in omega-3 fatty acids.',
    keywords: ['walnuts', 'dry fruits', 'omega-3', 'premium']
  },
  {
    id: '6',
    name: 'Pistachios',
    price: 899,
    category: 'Dry Fruits',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/6105024/pexels-photo-6105024.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Premium quality roasted and salted pistachios for a delightful snacking experience.',
    keywords: ['pistachios', 'dry fruits', 'roasted', 'premium']
  },
  {
    id: '7',
    name: 'Black Raisins',
    price: 349,
    category: 'Dry Fruits',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Natural black raisins packed with antioxidants and iron.',
    keywords: ['raisins', 'dry fruits', 'antioxidants', 'healthy']
  },
  {
    id: '8',
    name: 'Apricots Dried',
    price: 499,
    category: 'Dry Fruits',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/8844906/pexels-photo-8844906.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Sweet and tangy dried apricots, perfect for energy boost.',
    keywords: ['apricots', 'dry fruits', 'sweet', 'energy']
  },
  {
    id: '9',
    name: 'Figs (Anjeer)',
    price: 649,
    category: 'Dry Fruits',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/4397295/pexels-photo-4397295.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Premium dried figs rich in fiber and natural sweetness.',
    keywords: ['figs', 'anjeer', 'dry fruits', 'fiber']
  },
  {
    id: '10',
    name: 'Brazil Nuts',
    price: 749,
    category: 'Dry Fruits',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Selenium-rich Brazil nuts for immune support.',
    keywords: ['brazil nuts', 'dry fruits', 'selenium', 'healthy']
  },
  {
    id: '11',
    name: 'Pine Nuts',
    price: 999,
    category: 'Dry Fruits',
    packaging: '100g',
    images: ['https://images.pexels.com/photos/8844906/pexels-photo-8844906.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Exotic pine nuts with delicate flavor, perfect for salads and cooking.',
    keywords: ['pine nuts', 'dry fruits', 'exotic', 'premium']
  },
  {
    id: '12',
    name: 'Prunes (Dried Plums)',
    price: 449,
    category: 'Dry Fruits',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Naturally sweet prunes great for digestive health.',
    keywords: ['prunes', 'dry fruits', 'digestive', 'healthy']
  },

  // Snacks (12 products)
  {
    id: '13',
    name: 'Masala Makhana',
    price: 249,
    category: 'Snacks',
    packaging: '100g',
    images: ['https://images.pexels.com/photos/6660297/pexels-photo-6660297.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Crunchy fox nuts roasted with aromatic Indian spices for guilt-free snacking.',
    keywords: ['makhana', 'snacks', 'healthy', 'masala']
  },
  {
    id: '14',
    name: 'Roasted Peanuts',
    price: 149,
    category: 'Snacks',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/1340502/pexels-photo-1340502.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Perfectly roasted peanuts with a hint of salt, ideal for tea-time snacking.',
    keywords: ['peanuts', 'snacks', 'roasted', 'crunchy']
  },
  {
    id: '15',
    name: 'Spicy Trail Mix',
    price: 349,
    category: 'Snacks',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'A fiery blend of nuts, seeds, and spices for adventure seekers.',
    keywords: ['trail mix', 'snacks', 'spicy', 'mixed']
  },
  {
    id: '16',
    name: 'Namkeen Mix',
    price: 199,
    category: 'Snacks',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Traditional Indian savory snack mix with a perfect blend of spices.',
    keywords: ['namkeen', 'snacks', 'savory', 'traditional']
  },
  {
    id: '17',
    name: 'Roasted Chana',
    price: 129,
    category: 'Snacks',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Crunchy roasted chickpeas, high in protein and fiber.',
    keywords: ['chana', 'snacks', 'protein', 'healthy']
  },
  {
    id: '18',
    name: 'Khatta Meetha',
    price: 179,
    category: 'Snacks',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Sweet and tangy Indian snack mix with a burst of flavors.',
    keywords: ['khatta meetha', 'snacks', 'sweet', 'tangy']
  },
  {
    id: '19',
    name: 'Bhujia Sev',
    price: 159,
    category: 'Snacks',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Classic crispy bhujia sev, perfect with evening tea.',
    keywords: ['bhujia', 'sev', 'snacks', 'crispy']
  },
  {
    id: '20',
    name: 'Masala Peanuts',
    price: 169,
    category: 'Snacks',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/1340502/pexels-photo-1340502.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Spicy masala coated peanuts for a flavorful snacking experience.',
    keywords: ['peanuts', 'masala', 'snacks', 'spicy']
  },
  {
    id: '21',
    name: 'Aloo Bhujia',
    price: 149,
    category: 'Snacks',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Crispy potato-based bhujia with authentic Indian taste.',
    keywords: ['aloo bhujia', 'snacks', 'crispy', 'indian']
  },
  {
    id: '22',
    name: 'Moong Dal',
    price: 139,
    category: 'Snacks',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Crunchy fried moong dal, lightly salted and spiced.',
    keywords: ['moong dal', 'snacks', 'crunchy', 'healthy']
  },
  {
    id: '23',
    name: 'Banana Chips',
    price: 159,
    category: 'Snacks',
    packaging: '150g',
    images: ['https://images.pexels.com/photos/7937474/pexels-photo-7937474.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Thin and crispy banana chips, a Kerala specialty.',
    keywords: ['banana chips', 'snacks', 'crispy', 'kerala']
  },
  {
    id: '24',
    name: 'Masala Chivda',
    price: 189,
    category: 'Snacks',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Traditional Maharashtrian chivda with peanuts and spices.',
    keywords: ['chivda', 'snacks', 'maharashtrian', 'traditional']
  },

  // Seeds (12 products)
  {
    id: '25',
    name: 'Pumpkin Seeds',
    price: 299,
    category: 'Seeds',
    packaging: '150g',
    images: ['https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Roasted pumpkin seeds packed with protein and healthy fats.',
    keywords: ['pumpkin seeds', 'healthy', 'protein', 'roasted']
  },
  {
    id: '26',
    name: 'Sunflower Seeds',
    price: 249,
    category: 'Seeds',
    packaging: '150g',
    images: ['https://images.pexels.com/photos/53502/pexels-photo-53502.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Crunchy sunflower seeds, a great source of vitamin E and minerals.',
    keywords: ['sunflower seeds', 'healthy', 'vitamin', 'crunchy']
  },
  {
    id: '27',
    name: 'Flax Seeds',
    price: 199,
    category: 'Seeds',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Omega-3 rich flax seeds, perfect for adding to smoothies and salads.',
    keywords: ['flax seeds', 'omega-3', 'healthy', 'nutritious']
  },
  {
    id: '28',
    name: 'Chia Seeds',
    price: 349,
    category: 'Seeds',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/2377045/pexels-photo-2377045.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Super nutritious chia seeds packed with omega-3 and fiber.',
    keywords: ['chia seeds', 'superfood', 'omega-3', 'fiber']
  },
  {
    id: '29',
    name: 'Sesame Seeds (White)',
    price: 179,
    category: 'Seeds',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Premium white sesame seeds rich in calcium and minerals.',
    keywords: ['sesame seeds', 'calcium', 'healthy', 'cooking']
  },
  {
    id: '30',
    name: 'Sesame Seeds (Black)',
    price: 189,
    category: 'Seeds',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Nutrient-rich black sesame seeds with earthy flavor.',
    keywords: ['sesame seeds', 'black', 'healthy', 'antioxidants']
  },
  {
    id: '31',
    name: 'Watermelon Seeds',
    price: 219,
    category: 'Seeds',
    packaging: '150g',
    images: ['https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Roasted watermelon seeds, a crunchy and nutritious snack.',
    keywords: ['watermelon seeds', 'roasted', 'protein', 'snack']
  },
  {
    id: '32',
    name: 'Hemp Seeds',
    price: 449,
    category: 'Seeds',
    packaging: '150g',
    images: ['https://images.pexels.com/photos/2377045/pexels-photo-2377045.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Complete protein source hemp seeds with all essential amino acids.',
    keywords: ['hemp seeds', 'protein', 'superfood', 'amino acids']
  },
  {
    id: '33',
    name: 'Melon Seeds',
    price: 199,
    category: 'Seeds',
    packaging: '150g',
    images: ['https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Crunchy melon seeds perfect for garnishing and snacking.',
    keywords: ['melon seeds', 'crunchy', 'healthy', 'garnish']
  },
  {
    id: '34',
    name: 'Basil Seeds (Sabja)',
    price: 229,
    category: 'Seeds',
    packaging: '100g',
    images: ['https://images.pexels.com/photos/2377045/pexels-photo-2377045.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Cooling basil seeds perfect for summer drinks and desserts.',
    keywords: ['basil seeds', 'sabja', 'cooling', 'healthy']
  },
  {
    id: '35',
    name: 'Poppy Seeds',
    price: 259,
    category: 'Seeds',
    packaging: '100g',
    images: ['https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Aromatic poppy seeds ideal for baking and cooking.',
    keywords: ['poppy seeds', 'aromatic', 'baking', 'cooking']
  },
  {
    id: '36',
    name: 'Mixed Seeds',
    price: 399,
    category: 'Seeds',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Power-packed mix of various seeds for complete nutrition.',
    keywords: ['mixed seeds', 'healthy', 'nutrition', 'combo']
  },

  // Dates (12 products)
  {
    id: '37',
    name: 'Medjool Dates',
    price: 449,
    category: 'Dates',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Premium Medjool dates, naturally sweet and full of energy.',
    keywords: ['dates', 'sweet', 'energy', 'premium']
  },
  {
    id: '38',
    name: 'Dates with Almonds',
    price: 549,
    category: 'Dates',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Delicious dates stuffed with crunchy almonds for a perfect combo.',
    keywords: ['dates', 'almonds', 'stuffed', 'premium']
  },
  {
    id: '39',
    name: 'Ajwa Dates',
    price: 649,
    category: 'Dates',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Premium Ajwa dates from Madina, known for their health benefits.',
    keywords: ['ajwa dates', 'premium', 'madina', 'healthy']
  },
  {
    id: '40',
    name: 'Kimia Dates',
    price: 399,
    category: 'Dates',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Soft and sweet Kimia dates perfect for everyday snacking.',
    keywords: ['kimia dates', 'soft', 'sweet', 'snacking']
  },
  {
    id: '41',
    name: 'Safawi Dates',
    price: 479,
    category: 'Dates',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Dark and soft Safawi dates with rich flavor.',
    keywords: ['safawi dates', 'soft', 'dark', 'rich']
  },
  {
    id: '42',
    name: 'Dates with Cashews',
    price: 599,
    category: 'Dates',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Dates stuffed with premium cashew nuts for luxury snacking.',
    keywords: ['dates', 'cashews', 'stuffed', 'luxury']
  },
  {
    id: '43',
    name: 'Dates with Walnuts',
    price: 579,
    category: 'Dates',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Brain-boosting dates filled with crunchy walnuts.',
    keywords: ['dates', 'walnuts', 'stuffed', 'healthy']
  },
  {
    id: '44',
    name: 'Sukkari Dates',
    price: 529,
    category: 'Dates',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Golden Sukkari dates with caramel-like sweetness.',
    keywords: ['sukkari dates', 'golden', 'sweet', 'caramel']
  },
  {
    id: '45',
    name: 'Barhi Dates',
    price: 459,
    category: 'Dates',
    packaging: '250g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Fresh Barhi dates with unique texture and flavor.',
    keywords: ['barhi dates', 'fresh', 'unique', 'delicious']
  },
  {
    id: '46',
    name: 'Dates with Pistachios',
    price: 629,
    category: 'Dates',
    packaging: '200g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Exotic dates stuffed with premium pistachios.',
    keywords: ['dates', 'pistachios', 'stuffed', 'exotic']
  },
  {
    id: '47',
    name: 'Pitted Dates',
    price: 349,
    category: 'Dates',
    packaging: '500g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Convenient pitted dates ready for cooking and snacking.',
    keywords: ['pitted dates', 'convenient', 'cooking', 'baking']
  },
  {
    id: '48',
    name: 'Dates Paste',
    price: 279,
    category: 'Dates',
    packaging: '300g',
    images: ['https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Pure dates paste, natural sweetener for healthy recipes.',
    keywords: ['dates paste', 'sweetener', 'natural', 'healthy']
  },

  // Gift Packs (12 products)
  {
    id: '49',
    name: 'Festive Gift Box',
    price: 1299,
    category: 'Gift Packs',
    packaging: '1kg',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'An elegant gift box containing an assortment of premium dry fruits and snacks.',
    keywords: ['gift', 'festive', 'premium', 'combo']
  },
  {
    id: '50',
    name: 'Corporate Gift Hamper',
    price: 1999,
    category: 'Gift Packs',
    packaging: '1.5kg',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Luxury hamper perfect for corporate gifting with premium dry fruits selection.',
    keywords: ['gift', 'corporate', 'luxury', 'premium']
  },
  {
    id: '51',
    name: 'Diwali Special Box',
    price: 1499,
    category: 'Gift Packs',
    packaging: '1kg',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Traditional Diwali gift box with assorted dry fruits and sweets.',
    keywords: ['diwali', 'gift', 'traditional', 'festive']
  },
  {
    id: '52',
    name: 'Wedding Gift Pack',
    price: 2499,
    category: 'Gift Packs',
    packaging: '2kg',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Premium wedding gift pack with exotic dry fruits and nuts.',
    keywords: ['wedding', 'gift', 'premium', 'exotic']
  },
  {
    id: '53',
    name: 'Healthy Snack Box',
    price: 999,
    category: 'Gift Packs',
    packaging: '800g',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Curated selection of healthy snacks and seeds for fitness enthusiasts.',
    keywords: ['healthy', 'gift', 'fitness', 'snacks']
  },
  {
    id: '54',
    name: 'New Year Combo',
    price: 1699,
    category: 'Gift Packs',
    packaging: '1.2kg',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Start the new year right with this nutritious gift combo.',
    keywords: ['new year', 'gift', 'combo', 'premium']
  },
  {
    id: '55',
    name: 'Birthday Special',
    price: 1199,
    category: 'Gift Packs',
    packaging: '1kg',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Make birthdays special with this delightful dry fruits hamper.',
    keywords: ['birthday', 'gift', 'special', 'hamper']
  },
  {
    id: '56',
    name: 'Office Snack Pack',
    price: 899,
    category: 'Gift Packs',
    packaging: '800g',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Perfect snack pack for office pantries and meetings.',
    keywords: ['office', 'snack', 'pack', 'corporate']
  },
  {
    id: '57',
    name: 'Premium Dates Box',
    price: 1799,
    category: 'Gift Packs',
    packaging: '1kg',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Assorted premium dates collection in elegant packaging.',
    keywords: ['dates', 'premium', 'gift', 'luxury']
  },
  {
    id: '58',
    name: 'Family Pack',
    price: 1399,
    category: 'Gift Packs',
    packaging: '1.5kg',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Perfect family pack with variety of nuts and dry fruits.',
    keywords: ['family', 'pack', 'variety', 'value']
  },
  {
    id: '59',
    name: 'Immunity Booster Box',
    price: 1599,
    category: 'Gift Packs',
    packaging: '1kg',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Curated selection of immunity-boosting nuts and seeds.',
    keywords: ['immunity', 'health', 'gift', 'wellness']
  },
  {
    id: '60',
    name: 'Luxury Gift Basket',
    price: 2999,
    category: 'Gift Packs',
    packaging: '2.5kg',
    images: ['https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Ultimate luxury basket with finest selection of international dry fruits.',
    keywords: ['luxury', 'gift', 'premium', 'international']
  }
]
//     keywords: ['mixed', 'dry fruits', 'healthy', 'combo']
//   },
//   {
//     id: '5',
//     name: 'Walnut Kernels',
//     price: 799,
//     category: 'Dry Fruits',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1622484211850-2160097b9a1c?w=600&q=80'],
//     description: 'Brain-healthy walnut kernels, rich in omega-3 fatty acids.',
//     keywords: ['walnuts', 'dry fruits', 'omega-3', 'premium']
//   },
//   {
//     id: '6',
//     name: 'Pistachios',
//     price: 899,
//     category: 'Dry Fruits',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&q=80'],
//     description: 'Premium quality roasted and salted pistachios for a delightful snacking experience.',
//     keywords: ['pistachios', 'dry fruits', 'roasted', 'premium']
//   },
//   {
//     id: '7',
//     name: 'Black Raisins',
//     price: 349,
//     category: 'Dry Fruits',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1632633728024-e1fd4bef561a?w=600&q=80'],
//     description: 'Natural black raisins packed with antioxidants and iron.',
//     keywords: ['raisins', 'dry fruits', 'antioxidants', 'healthy']
//   },
//   {
//     id: '8',
//     name: 'Apricots Dried',
//     price: 499,
//     category: 'Dry Fruits',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1589978228940-b9a713cc0b66?w=600&q=80'],
//     description: 'Sweet and tangy dried apricots, perfect for energy boost.',
//     keywords: ['apricots', 'dry fruits', 'sweet', 'energy']
//   },
//   {
//     id: '9',
//     name: 'Figs (Anjeer)',
//     price: 649,
//     category: 'Dry Fruits',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1606501126768-b78d4569d3b3?w=600&q=80'],
//     description: 'Premium dried figs rich in fiber and natural sweetness.',
//     keywords: ['figs', 'anjeer', 'dry fruits', 'fiber']
//   },
//   {
//     id: '10',
//     name: 'Brazil Nuts',
//     price: 749,
//     category: 'Dry Fruits',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1568471173248-eb9b51c44e8c?w=600&q=80'],
//     description: 'Selenium-rich Brazil nuts for immune support.',
//     keywords: ['brazil nuts', 'dry fruits', 'selenium', 'healthy']
//   },
//   {
//     id: '11',
//     name: 'Pine Nuts',
//     price: 999,
//     category: 'Dry Fruits',
//     packaging: '100g',
//     images: ['https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=600&q=80'],
//     description: 'Exotic pine nuts with delicate flavor, perfect for salads and cooking.',
//     keywords: ['pine nuts', 'dry fruits', 'exotic', 'premium']
//   },
//   {
//     id: '12',
//     name: 'Prunes (Dried Plums)',
//     price: 449,
//     category: 'Dry Fruits',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1577003833154-a4f5e91ab44d?w=600&q=80'],
//     description: 'Naturally sweet prunes great for digestive health.',
//     keywords: ['prunes', 'dry fruits', 'digestive', 'healthy']
//   },

//   // Snacks (12 products)
//   {
//     id: '13',
//     name: 'Masala Makhana',
//     price: 249,
//     category: 'Snacks',
//     packaging: '100g',
//     images: ['https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80'],
//     description: 'Crunchy fox nuts roasted with aromatic Indian spices for guilt-free snacking.',
//     keywords: ['makhana', 'snacks', 'healthy', 'masala']
//   },
//   {
//     id: '14',
//     name: 'Roasted Peanuts',
//     price: 149,
//     category: 'Snacks',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=600&q=80'],
//     description: 'Perfectly roasted peanuts with a hint of salt, ideal for tea-time snacking.',
//     keywords: ['peanuts', 'snacks', 'roasted', 'crunchy']
//   },
//   {
//     id: '15',
//     name: 'Spicy Trail Mix',
//     price: 349,
//     category: 'Snacks',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80'],
//     description: 'A fiery blend of nuts, seeds, and spices for adventure seekers.',
//     keywords: ['trail mix', 'snacks', 'spicy', 'mixed']
//   },
//   {
//     id: '16',
//     name: 'Namkeen Mix',
//     price: 199,
//     category: 'Snacks',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80'],
//     description: 'Traditional Indian savory snack mix with a perfect blend of spices.',
//     keywords: ['namkeen', 'snacks', 'savory', 'traditional']
//   },
//   {
//     id: '17',
//     name: 'Roasted Chana',
//     price: 129,
//     category: 'Snacks',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1599909533555-c0d6c09700e2?w=600&q=80'],
//     description: 'Crunchy roasted chickpeas, high in protein and fiber.',
//     keywords: ['chana', 'snacks', 'protein', 'healthy']
//   },
//   {
//     id: '18',
//     name: 'Khatta Meetha',
//     price: 179,
//     category: 'Snacks',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1621604012211-6d8d95c32bf7?w=600&q=80'],
//     description: 'Sweet and tangy Indian snack mix with a burst of flavors.',
//     keywords: ['khatta meetha', 'snacks', 'sweet', 'tangy']
//   },
//   {
//     id: '19',
//     name: 'Bhujia Sev',
//     price: 159,
//     category: 'Snacks',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80'],
//     description: 'Classic crispy bhujia sev, perfect with evening tea.',
//     keywords: ['bhujia', 'sev', 'snacks', 'crispy']
//   },
//   {
//     id: '20',
//     name: 'Masala Peanuts',
//     price: 169,
//     category: 'Snacks',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=600&q=80'],
//     description: 'Spicy masala coated peanuts for a flavorful snacking experience.',
//     keywords: ['peanuts', 'masala', 'snacks', 'spicy']
//   },
//   {
//     id: '21',
//     name: 'Aloo Bhujia',
//     price: 149,
//     category: 'Snacks',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80'],
//     description: 'Crispy potato-based bhujia with authentic Indian taste.',
//     keywords: ['aloo bhujia', 'snacks', 'crispy', 'indian']
//   },
//   {
//     id: '22',
//     name: 'Moong Dal',
//     price: 139,
//     category: 'Snacks',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1599909533555-c0d6c09700e2?w=600&q=80'],
//     description: 'Crunchy fried moong dal, lightly salted and spiced.',
//     keywords: ['moong dal', 'snacks', 'crunchy', 'healthy']
//   },
//   {
//     id: '23',
//     name: 'Banana Chips',
//     price: 159,
//     category: 'Snacks',
//     packaging: '150g',
//     images: ['https://images.unsplash.com/photo-1621604012211-6d8d95c32bf7?w=600&q=80'],
//     description: 'Thin and crispy banana chips, a Kerala specialty.',
//     keywords: ['banana chips', 'snacks', 'crispy', 'kerala']
//   },
//   {
//     id: '24',
//     name: 'Masala Chivda',
//     price: 189,
//     category: 'Snacks',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80'],
//     description: 'Traditional Maharashtrian chivda with peanuts and spices.',
//     keywords: ['chivda', 'snacks', 'maharashtrian', 'traditional']
//   },

//   // Seeds (12 products)
//   {
//     id: '25',
//     name: 'Pumpkin Seeds',
//     price: 299,
//     category: 'Seeds',
//     packaging: '150g',
//     images: ['https://images.unsplash.com/photo-1588170090735-4c1d4bcc2f45?w=600&q=80'],
//     description: 'Roasted pumpkin seeds packed with protein and healthy fats.',
//     keywords: ['pumpkin seeds', 'healthy', 'protein', 'roasted']
//   },
//   {
//     id: '26',
//     name: 'Sunflower Seeds',
//     price: 249,
//     category: 'Seeds',
//     packaging: '150g',
//     images: ['https://images.unsplash.com/photo-1572615453413-491e0b7c0c6e?w=600&q=80'],
//     description: 'Crunchy sunflower seeds, a great source of vitamin E and minerals.',
//     keywords: ['sunflower seeds', 'healthy', 'vitamin', 'crunchy']
//   },
//   {
//     id: '27',
//     name: 'Flax Seeds',
//     price: 199,
//     category: 'Seeds',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1613743983303-b3e89f8a7273?w=600&q=80'],
//     description: 'Omega-3 rich flax seeds, perfect for adding to smoothies and salads.',
//     keywords: ['flax seeds', 'omega-3', 'healthy', 'nutritious']
//   },
//   {
//     id: '28',
//     name: 'Chia Seeds',
//     price: 349,
//     category: 'Seeds',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1560854267-60eb5e5bf4c2?w=600&q=80'],
//     description: 'Super nutritious chia seeds packed with omega-3 and fiber.',
//     keywords: ['chia seeds', 'superfood', 'omega-3', 'fiber']
//   },
//   {
//     id: '29',
//     name: 'Sesame Seeds (White)',
//     price: 179,
//     category: 'Seeds',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1563201515-b3e37a28d9e8?w=600&q=80'],
//     description: 'Premium white sesame seeds rich in calcium and minerals.',
//     keywords: ['sesame seeds', 'calcium', 'healthy', 'cooking']
//   },
//   {
//     id: '30',
//     name: 'Sesame Seeds (Black)',
//     price: 189,
//     category: 'Seeds',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&q=80'],
//     description: 'Nutrient-rich black sesame seeds with earthy flavor.',
//     keywords: ['sesame seeds', 'black', 'healthy', 'antioxidants']
//   },
//   {
//     id: '31',
//     name: 'Watermelon Seeds',
//     price: 219,
//     category: 'Seeds',
//     packaging: '150g',
//     images: ['https://images.unsplash.com/photo-1621604012211-6d8d95c32bf7?w=600&q=80'],
//     description: 'Roasted watermelon seeds, a crunchy and nutritious snack.',
//     keywords: ['watermelon seeds', 'roasted', 'protein', 'snack']
//   },
//   {
//     id: '32',
//     name: 'Hemp Seeds',
//     price: 449,
//     category: 'Seeds',
//     packaging: '150g',
//     images: ['https://images.unsplash.com/photo-1605792657660-596af9009e82?w=600&q=80'],
//     description: 'Complete protein source hemp seeds with all essential amino acids.',
//     keywords: ['hemp seeds', 'protein', 'superfood', 'amino acids']
//   },
//   {
//     id: '33',
//     name: 'Melon Seeds',
//     price: 199,
//     category: 'Seeds',
//     packaging: '150g',
//     images: ['https://images.unsplash.com/photo-1621604012211-6d8d95c32bf7?w=600&q=80'],
//     description: 'Crunchy melon seeds perfect for garnishing and snacking.',
//     keywords: ['melon seeds', 'crunchy', 'healthy', 'garnish']
//   },
//   {
//     id: '34',
//     name: 'Basil Seeds (Sabja)',
//     price: 229,
//     category: 'Seeds',
//     packaging: '100g',
//     images: ['https://images.unsplash.com/photo-1560854267-60eb5e5bf4c2?w=600&q=80'],
//     description: 'Cooling basil seeds perfect for summer drinks and desserts.',
//     keywords: ['basil seeds', 'sabja', 'cooling', 'healthy']
//   },
//   {
//     id: '35',
//     name: 'Poppy Seeds',
//     price: 259,
//     category: 'Seeds',
//     packaging: '100g',
//     images: ['https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=600&q=80'],
//     description: 'Aromatic poppy seeds ideal for baking and cooking.',
//     keywords: ['poppy seeds', 'aromatic', 'baking', 'cooking']
//   },
//   {
//     id: '36',
//     name: 'Mixed Seeds',
//     price: 399,
//     category: 'Seeds',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1621604012211-6d8d95c32bf7?w=600&q=80'],
//     description: 'Power-packed mix of various seeds for complete nutrition.',
//     keywords: ['mixed seeds', 'healthy', 'nutrition', 'combo']
//   },

//   // Dates (12 products)
//   {
//     id: '37',
//     name: 'Medjool Dates',
//     price: 449,
//     category: 'Dates',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1580485396068-94f39e48d282?w=600&q=80'],
//     description: 'Premium Medjool dates, naturally sweet and full of energy.',
//     keywords: ['dates', 'sweet', 'energy', 'premium']
//   },
//   {
//     id: '38',
//     name: 'Dates with Almonds',
//     price: 549,
//     category: 'Dates',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80'],
//     description: 'Delicious dates stuffed with crunchy almonds for a perfect combo.',
//     keywords: ['dates', 'almonds', 'stuffed', 'premium']
//   },
//   {
//     id: '39',
//     name: 'Ajwa Dates',
//     price: 649,
//     category: 'Dates',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1577003833154-a4f5e91ab44d?w=600&q=80'],
//     description: 'Premium Ajwa dates from Madina, known for their health benefits.',
//     keywords: ['ajwa dates', 'premium', 'madina', 'healthy']
//   },
//   {
//     id: '40',
//     name: 'Kimia Dates',
//     price: 399,
//     category: 'Dates',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1580485396068-94f39e48d282?w=600&q=80'],
//     description: 'Soft and sweet Kimia dates perfect for everyday snacking.',
//     keywords: ['kimia dates', 'soft', 'sweet', 'snacking']
//   },
//   {
//     id: '41',
//     name: 'Safawi Dates',
//     price: 479,
//     category: 'Dates',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1577003833154-a4f5e91ab44d?w=600&q=80'],
//     description: 'Dark and soft Safawi dates with rich flavor.',
//     keywords: ['safawi dates', 'soft', 'dark', 'rich']
//   },
//   {
//     id: '42',
//     name: 'Dates with Cashews',
//     price: 599,
//     category: 'Dates',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80'],
//     description: 'Dates stuffed with premium cashew nuts for luxury snacking.',
//     keywords: ['dates', 'cashews', 'stuffed', 'luxury']
//   },
//   {
//     id: '43',
//     name: 'Dates with Walnuts',
//     price: 579,
//     category: 'Dates',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80'],
//     description: 'Brain-boosting dates filled with crunchy walnuts.',
//     keywords: ['dates', 'walnuts', 'stuffed', 'healthy']
//   },
//   {
//     id: '44',
//     name: 'Sukkari Dates',
//     price: 529,
//     category: 'Dates',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1580485396068-94f39e48d282?w=600&q=80'],
//     description: 'Golden Sukkari dates with caramel-like sweetness.',
//     keywords: ['sukkari dates', 'golden', 'sweet', 'caramel']
//   },
//   {
//     id: '45',
//     name: 'Barhi Dates',
//     price: 459,
//     category: 'Dates',
//     packaging: '250g',
//     images: ['https://images.unsplash.com/photo-1577003833154-a4f5e91ab44d?w=600&q=80'],
//     description: 'Fresh Barhi dates with unique texture and flavor.',
//     keywords: ['barhi dates', 'fresh', 'unique', 'delicious']
//   },
//   {
//     id: '46',
//     name: 'Dates with Pistachios',
//     price: 629,
//     category: 'Dates',
//     packaging: '200g',
//     images: ['https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600&q=80'],
//     description: 'Exotic dates stuffed with premium pistachios.',
//     keywords: ['dates', 'pistachios', 'stuffed', 'exotic']
//   },
//   {
//     id: '47',
//     name: 'Pitted Dates',
//     price: 349,
//     category: 'Dates',
//     packaging: '500g',
//     images: ['https://images.unsplash.com/photo-1580485396068-94f39e48d282?w=600&q=80'],
//     description: 'Convenient pitted dates ready for cooking and snacking.',
//     keywords: ['pitted dates', 'convenient', 'cooking', 'baking']
//   },
//   {
//     id: '48',
//     name: 'Dates Paste',
//     price: 279,
//     category: 'Dates',
//     packaging: '300g',
//     images: ['https://images.unsplash.com/photo-1577003833154-a4f5e91ab44d?w=600&q=80'],
//     description: 'Pure dates paste, natural sweetener for healthy recipes.',
//     keywords: ['dates paste', 'sweetener', 'natural', 'healthy']
//   },

//   // Gift Packs (12 products)
//   {
//     id: '49',
//     name: 'Festive Gift Box',
//     price: 1299,
//     category: 'Gift Packs',
//     packaging: '1kg',
//     images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80'],
//     description: 'An elegant gift box containing an assortment of premium dry fruits and snacks.',
//     keywords: ['gift', 'festive', 'premium', 'combo']
//   },
//   {
//     id: '50',
//     name: 'Corporate Gift Hamper',
//     price: 1999,
//     category: 'Gift Packs',
//     packaging: '1.5kg',
//     images: ['https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80'],
//     description: 'Luxury hamper perfect for corporate gifting with premium dry fruits selection.',
//     keywords: ['gift', 'corporate', 'luxury', 'premium']
//   },
//   {
//     id: '51',
//     name: 'Diwali Special Box',
//     price: 1499,
//     category: 'Gift Packs',
//     packaging: '1kg',
//     images: ['https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=80'],
//     description: 'Traditional Diwali gift box with assorted dry fruits and sweets.',
//     keywords: ['diwali', 'gift', 'traditional', 'festive']
//   },
//   {
//     id: '52',
//     name: 'Wedding Gift Pack',
//     price: 2499,
//     category: 'Gift Packs',
//     packaging: '2kg',
//     images: ['https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80'],
//     description: 'Premium wedding gift pack with exotic dry fruits and nuts.',
//     keywords: ['wedding', 'gift', 'premium', 'exotic']
//   },
//   {
//     id: '53',
//     name: 'Healthy Snack Box',
//     price: 999,
//     category: 'Gift Packs',
//     packaging: '800g',
//     images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80'],
//     description: 'Curated selection of healthy snacks and seeds for fitness enthusiasts.',
//     keywords: ['healthy', 'gift', 'fitness', 'snacks']
//   },
//   {
//     id: '54',
//     name: 'New Year Combo',
//     price: 1699,
//     category: 'Gift Packs',
//     packaging: '1.2kg',
//     images: ['https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80'],
//     description: 'Start the new year right with this nutritious gift combo.',
//     keywords: ['new year', 'gift', 'combo', 'premium']
//   },
//   {
//     id: '55',
//     name: 'Birthday Special',
//     price: 1199,
//     category: 'Gift Packs',
//     packaging: '1kg',
//     images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80'],
//     description: 'Make birthdays special with this delightful dry fruits hamper.',
//     keywords: ['birthday', 'gift', 'special', 'hamper']
//   },
//   {
//     id: '56',
//     name: 'Office Snack Pack',
//     price: 899,
//     category: 'Gift Packs',
//     packaging: '800g',
//     images: ['https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80'],
//     description: 'Perfect snack pack for office pantries and meetings.',
//     keywords: ['office', 'snack', 'pack', 'corporate']
//   },
//   {
//     id: '57',
//     name: 'Premium Dates Box',
//     price: 1799,
//     category: 'Gift Packs',
//     packaging: '1kg',
//     images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80'],
//     description: 'Assorted premium dates collection in elegant packaging.',
//     keywords: ['dates', 'premium', 'gift', 'luxury']
//   },
//   {
//     id: '58',
//     name: 'Family Pack',
//     price: 1399,
//     category: 'Gift Packs',
//     packaging: '1.5kg',
//     images: ['https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80'],
//     description: 'Perfect family pack with variety of nuts and dry fruits.',
//     keywords: ['family', 'pack', 'variety', 'value']
//   },
//   {
//     id: '59',
//     name: 'Immunity Booster Box',
//     price: 1599,
//     category: 'Gift Packs',
//     packaging: '1kg',
//     images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80'],
//     description: 'Curated selection of immunity-boosting nuts and seeds.',
//     keywords: ['immunity', 'health', 'gift', 'wellness']
//   },
//   {
//     id: '60',
//     name: 'Luxury Gift Basket',
//     price: 2999,
//     category: 'Gift Packs',
//     packaging: '2.5kg',
//     images: ['https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80'],
//     description: 'Ultimate luxury basket with finest selection of international dry fruits.',
//     keywords: ['luxury', 'gift', 'premium', 'international']
//   }
// ]

export const useProductStore = create<ProductStore>(() => ({
  products: sampleProducts,

  getProductsByCategory: (category: string) => {
    return sampleProducts.filter((product: Product) => product.category === category)
  },

  getAllCategories: () => {
    const categories = sampleProducts.map((product: Product) => product.category)
    return Array.from(new Set(categories))
  }
}))
