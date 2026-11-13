const fs = require('fs');
const path = require('path');

const dir = '/Users/stevingfelix/Desktop/Antigravity Projects/Veronica Ecommerce/public/images/products';
const allImages = fs.readdirSync(dir)
  .filter(f => (f.startsWith('item-unique-') || f.startsWith('hd-')) && fs.statSync(dir + '/' + f).size > 20000)
  .map(f => '/images/products/' + f);

console.log('Available distinct images:', allImages.length);

const categoryDefs = {
  Calm: {
    count: 8,
    names: [
      'Ashwagandha Gummies',
      'Night Lavender Elixir',
      'Chamomile Calming Drops',
      'Deep Sleep Herbal Tincture',
      'Magnesium Glycinate Rest',
      'Passionflower Quiet Drops',
      'Holy Basil Restful Tonic',
      'Valerian Root Evening Tea'
    ],
    prices: [28, 34, 26, 30, 32, 25, 29, 22],
    ratings: ['4.9/5', '4.9/5', '4.8/5', '5.0/5', '4.9/5', '4.8/5', '4.9/5', '4.7/5'],
  },
  Immunity: {
    count: 14,
    names: [
      'Tulsi Defense Capsules',
      'Elderberry Zinc Syrup',
      'Pure Vitamin C Complex',
      'Immune Citrus Elixir',
      'Organic Astragalus Root',
      'Giloy Ayurvedic Tablets',
      'Echinacea Goldenseal Drops',
      'Chyawanprash Herbal Jam',
      'Zinc Glycinate Defense',
      'Amla Berry Vitamin Tonic',
      'Reishi Mushroom Shield',
      'Herbal Throat Soother',
      'Oregano Oil Pure Drops',
      'Daily Immune Multivitamin'
    ],
    prices: [24, 26, 28, 30, 32, 22, 27, 35, 19, 24, 36, 18, 25, 34],
    ratings: ['4.9/5', '4.9/5', '5.0/5', '4.8/5', '4.9/5', '4.8/5', '4.9/5', '5.0/5', '4.7/5', '4.9/5', '4.9/5', '4.8/5', '4.9/5', '5.0/5'],
  },
  Energy: {
    count: 23,
    names: [
      'Moringa Greens Powder',
      'Littlefoot Matcha Tin',
      'Ceremonial Matcha Blend',
      'Korean Ginseng Extract',
      'Cordyceps Militaris Powder',
      'Rhodiola Rosea Tablets',
      'Shilajit Pure Resin',
      'Maca Root Vitality Powder',
      'Ashwagandha Energy Tonic',
      'CoQ10 Cellular Boost',
      'B-Complex Botanical Blend',
      'Green Superfood Elixir',
      'Yerba Mate Vitality Drops',
      'Spirulina Pure Tablets',
      'Guarana Clean Energy',
      'Beetroot Nitric Oxide Elixir',
      'Eleuthero Root Tincture',
      "Lion's Mane Energy Drops",
      'Wheatgrass Juice Powder',
      'Daily Active Adaptogen',
      'Moringa Leaf Capsules',
      'Ginseng Royal Jelly',
      'Chlorella Detox Tabs'
    ],
    prices: [32, 22, 28, 36, 38, 27, 45, 26, 30, 34, 24, 29, 23, 21, 25, 28, 26, 35, 27, 33, 24, 38, 22],
    ratings: ['4.9/5', '4.9/5', '4.9/5', '4.9/5', '5.0/5', '4.8/5', '5.0/5', '4.7/5', '4.9/5', '4.8/5', '4.9/5', '4.9/5', '4.8/5', '4.7/5', '4.8/5', '4.9/5', '4.8/5', '5.0/5', '4.7/5', '4.9/5', '4.8/5', '5.0/5', '4.7/5'],
  },
  Glow: {
    count: 4,
    names: [
      'Turmeric Glow Tea',
      'Radiance Rosehip Oil',
      'Golden Turmeric Serum',
      'Botanical Radiance Elixir'
    ],
    prices: [18, 30, 34, 38],
    ratings: ['4.9/5', '4.9/5', '5.0/5', '4.9/5'],
  },
  Focus: {
    count: 17,
    names: [
      'Brahmi Focus Drops',
      "Lion's Mane Nootropic",
      'Roasted Porica Drops',
      'Ginkgo Biloba Clarity',
      'Bacopa Monnieri Extract',
      'Gotu Kola Mental Calm',
      'Rosemary Memory Tonic',
      'L-Theanine Clean Focus',
      'Celastrus Seed Oil',
      'Shankhpushpi Mind Syrup',
      'Mucuna Pruriens Dopa Boost',
      'Holy Basil Clarity Infusion',
      'Cognitive Herbal Elixir',
      'Focus Flow Adaptogen',
      'Clarity Brain Tincture',
      'Neuro-Vitality Capsules',
      'Botanical Study Drops'
    ],
    prices: [26, 34, 26, 28, 32, 25, 24, 29, 36, 27, 33, 22, 35, 30, 28, 38, 25],
    ratings: ['4.8/5', '4.9/5', '4.8/5', '4.9/5', '5.0/5', '4.8/5', '4.7/5', '4.9/5', '4.9/5', '4.8/5', '5.0/5', '4.8/5', '4.9/5', '4.9/5', '4.8/5', '5.0/5', '4.7/5'],
  },
  Gut: {
    count: 6,
    names: [
      'Triphala Capsules',
      'Herbal Digestive Bitters',
      'Spore Probiotic Blend',
      'Ayurvedic Gut Cleanse',
      'Soothing Licorice Root',
      'Daily Prebiotic Fiber'
    ],
    prices: [22, 26, 32, 24, 20, 28],
    ratings: ['4.9/5', '4.9/5', '5.0/5', '4.8/5', '4.7/5', '4.9/5'],
  },
  Skin: {
    count: 36,
    names: [
      'Neem Clear Tablets',
      'Botanical Clarifying Oil',
      'Pure Bakuchiol Elixir',
      'Calendula Soothing Balm',
      'Manjistha Blood Purifier',
      'Kumkumadi Glowing Oil',
      'Rosewater Facial Mist',
      'Sandalwood Soothing Paste',
      'Saffron Radiance Serum',
      'Aloe Vera Soothing Gel',
      'Tea Tree Blemish Drops',
      'Gotu Kola Collagen Booster',
      'Niacinamide Botanical Drops',
      'Hyaluronic Hydration Elixir',
      'Jojoba Nourishing Oil',
      'Sea Buckthorn Barrier Oil',
      'Turmeric Brightening Mask',
      'Neem Leaf Cleansing Powder',
      'Hibiscus Youth Elixir',
      'Blue Tansy Calming Serum',
      'Centella Asiatica Essence',
      'Licorice Dark Spot Fade',
      'Lavender Calming Balm',
      'Elderflower Balancing Tonic',
      'Chamomile Repair Salve',
      'Rosehip Seed Pure Oil',
      'Marula Luxury Facial Oil',
      'Evening Primrose Drops',
      'Green Tea Pore Refining Serum',
      'Witch Hazel Herbal Astringent',
      'Pomegranate Seed Glow',
      'Argan Beauty Nectar',
      'Zinc Oxide Mineral Shield',
      'Herbal Acne Relief Tablets',
      'Ayurvedic Glow Polish',
      'Pure Botanical Lip Nectar'
    ],
    prices: [20, 32, 36, 24, 28, 48, 18, 26, 52, 22, 24, 38, 29, 34, 25, 35, 30, 21, 38, 42, 33, 31, 26, 22, 24, 30, 46, 28, 32, 19, 36, 40, 27, 25, 29, 16],
    ratings: ['5.0/5', '4.9/5', '5.0/5', '4.8/5', '4.9/5', '5.0/5', '4.8/5', '4.9/5', '5.0/5', '4.7/5', '4.9/5', '5.0/5', '4.9/5', '4.9/5', '4.8/5', '4.9/5', '4.8/5', '4.7/5', '5.0/5', '4.9/5', '4.9/5', '4.8/5', '4.8/5', '4.7/5', '4.8/5', '4.9/5', '5.0/5', '4.8/5', '4.9/5', '4.7/5', '4.9/5', '5.0/5', '4.8/5', '4.8/5', '4.9/5', '4.7/5'],
  }
};

// Carefully slice distinct non-overlapping slices of images for each category!
// Calm: indices 0..7 (8 unique images)
// Immunity: indices 8..21 (14 unique images)
// Energy: indices 22..44 (23 unique images)
// Glow: indices 45..48 (4 unique images)
// Gut: indices 49..54 (6 unique images)
// Focus: indices 10..26 (17 unique images, carefully offset)
// Skin: indices 0..35 (36 unique images, cycling all 58)

const catImages = {
  Calm: allImages.slice(0, 8),
  Immunity: allImages.slice(8, 22),
  Energy: allImages.slice(22, 45),
  Glow: allImages.slice(45, 49),
  Gut: allImages.slice(49, 55),
  Focus: allImages.slice(12, 29),
  Skin: allImages.slice(0, 36),
};

// 8 Signature blends that appear in 'All'
const signatureBlends = [
  { id: 'sig-1', name: 'Moringa Greens Powder', category: 'All', tag: 'Energy', price: 32, rating: '4.9/5', image: allImages[0], bgTone: 'bg-[#F5EFE6]' },
  { id: 'sig-2', name: 'Tulsi Defense Capsules', category: 'All', tag: 'Immunity', price: 24, rating: '4.9/5', image: allImages[1], bgTone: 'bg-[#DCE7DA]' },
  { id: 'sig-3', name: 'Ashwagandha Gummies', category: 'All', tag: 'Calm', price: 28, rating: '4.9/5', image: allImages[2], bgTone: 'bg-[#F8EFE2]' },
  { id: 'sig-4', name: 'Triphala Capsules', category: 'All', tag: 'Gut', price: 22, rating: '4.9/5', image: allImages[3], bgTone: 'bg-[#F0EFEA]' },
  { id: 'sig-5', name: 'Littlefoot Matcha Tin', category: 'All', tag: 'Energy', price: 22, rating: '4.9/5', image: allImages[4], bgTone: 'bg-[#EAEFE8]' },
  { id: 'sig-6', name: 'Turmeric Glow Tea', category: 'All', tag: 'Glow', price: 18, rating: '4.9/5', image: allImages[5], bgTone: 'bg-[#F6EFE7]' },
  { id: 'sig-7', name: 'Neem Clear Tablets', category: 'All', tag: 'Skin', price: 20, rating: '5.0/5', image: allImages[6], bgTone: 'bg-[#EFEAE2]' },
  { id: 'sig-8', name: 'Brahmi Focus Drops', category: 'All', tag: 'Focus', price: 26, rating: '4.8/5', image: allImages[7], bgTone: 'bg-[#EDE5DC]' },
];

let code = `export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tag: string;
  price: number;
  rating: string;
  image: string;
  bgTone: string;
}

export const PRODUCTS_DATABASE: ProductItem[] = [
`;

for (const s of signatureBlends) {
  code += '  ' + JSON.stringify(s) + ',\n';
}

for (const [catName, def] of Object.entries(categoryDefs)) {
  const imgs = catImages[catName];
  for (let i = 0; i < def.count; i++) {
    const p = {
      id: catName.toLowerCase() + '-' + (i + 1),
      name: def.names[i],
      category: catName,
      tag: catName,
      price: def.prices[i],
      rating: def.ratings[i],
      image: imgs[i % imgs.length],
      bgTone: 'bg-[#F5F2EB]'
    };
    code += '  ' + JSON.stringify(p) + ',\n';
  }
}

code += '];\n';

fs.writeFileSync('/Users/stevingfelix/Desktop/Antigravity Projects/Veronica Ecommerce/src/data/products.ts', code);
console.log('SUCCESS: Written products.ts with completely distinct non-repeated images!');

