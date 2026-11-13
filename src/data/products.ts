export interface ProductItem {
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
  {
    "id": "sig-1",
    "name": "Moringa Greens Powder",
    "category": "All",
    "tag": "Energy",
    "price": 32,
    "rating": "4.9/5",
    "image": "/images/products/moringa_greens_powder_clean_hd.jpg",
    "bgTone": "bg-[#F5EFE6]"
  },
  {
    "id": "sig-2",
    "name": "Tulsi Defense Capsules",
    "category": "All",
    "tag": "Immunity",
    "price": 24,
    "rating": "4.9/5",
    "image": "/images/products/neem_herbal_leaves_tablets_hd.jpg",
    "bgTone": "bg-[#DCE7DA]"
  },
  {
    "id": "sig-3",
    "name": "Ashwagandha Gummies",
    "category": "All",
    "tag": "Calm",
    "price": 28,
    "rating": "4.9/5",
    "image": "/images/products/ashwagandha_gummies_clean_hd.jpg",
    "bgTone": "bg-[#F8EFE2]"
  },
  {
    "id": "sig-4",
    "name": "Triphala Capsules",
    "category": "All",
    "tag": "Gut",
    "price": 22,
    "rating": "4.9/5",
    "image": "/images/products/triphala_ayurvedic_capsules_hd.jpg",
    "bgTone": "bg-[#F0EFEA]"
  },
  {
    "id": "sig-5",
    "name": "Ceremonial Matcha Tin",
    "category": "All",
    "tag": "Energy",
    "price": 26,
    "rating": "4.9/5",
    "image": "/images/products/matcha_tin_ceremonial_hd.jpg",
    "bgTone": "bg-[#EAEFE8]"
  },
  {
    "id": "sig-6",
    "name": "Elderberry Zinc Elixir",
    "category": "All",
    "tag": "Immunity",
    "price": 26,
    "rating": "4.9/5",
    "image": "/images/products/elderberry_zinc_syrup_hd.jpg",
    "bgTone": "bg-[#F6EFE7]"
  },
  {
    "id": "sig-7",
    "name": "B-Complex Botanical Blend",
    "category": "All",
    "tag": "Energy",
    "price": 24,
    "rating": "5.0/5",
    "image": "/images/products/b_complex_botanical_bottle_hd.jpg",
    "bgTone": "bg-[#EFEAE2]"
  },
  {
    "id": "sig-8",
    "name": "Kumkumadi Glowing Oil",
    "category": "All",
    "tag": "Glow",
    "price": 48,
    "rating": "5.0/5",
    "image": "/images/products/kumkumadi_saffron_oil_hd.jpg",
    "bgTone": "bg-[#EDE5DC]"
  },
  {
    "id": "calm-1",
    "name": "Ashwagandha Gummies",
    "category": "Calm",
    "tag": "Calm",
    "price": 28,
    "rating": "4.9/5",
    "image": "/images/products/ashwagandha_gummies_clean_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "calm-2",
    "name": "Night Lavender Elixir",
    "category": "Calm",
    "tag": "Calm",
    "price": 34,
    "rating": "4.9/5",
    "image": "/images/products/hd-amber-bottle-3.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "calm-3",
    "name": "Chamomile Calming Drops",
    "category": "Calm",
    "tag": "Calm",
    "price": 26,
    "rating": "4.8/5",
    "image": "/images/products/hd-amber-dropper-1.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "calm-4",
    "name": "Deep Sleep Herbal Tincture",
    "category": "Calm",
    "tag": "Calm",
    "price": 30,
    "rating": "5.0/5",
    "image": "/images/products/hd-golden-oil-1.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "calm-5",
    "name": "Magnesium Glycinate Rest",
    "category": "Calm",
    "tag": "Calm",
    "price": 32,
    "rating": "4.9/5",
    "image": "/images/products/triphala_ayurvedic_capsules_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "calm-6",
    "name": "Passionflower Quiet Drops",
    "category": "Calm",
    "tag": "Calm",
    "price": 25,
    "rating": "4.8/5",
    "image": "/images/products/hd-golden-oil-2.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "calm-7",
    "name": "Holy Basil Restful Tonic",
    "category": "Calm",
    "tag": "Calm",
    "price": 29,
    "rating": "4.9/5",
    "image": "/images/products/hd-tea-canister-2.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "calm-8",
    "name": "Valerian Root Evening Tea",
    "category": "Calm",
    "tag": "Calm",
    "price": 22,
    "rating": "4.7/5",
    "image": "/images/products/hd-matcha-tin-1.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-1",
    "name": "Tulsi Defense Capsules",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 24,
    "rating": "4.9/5",
    "image": "/images/products/neem_herbal_leaves_tablets_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-2",
    "name": "Elderberry Zinc Syrup",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 26,
    "rating": "4.9/5",
    "image": "/images/products/elderberry_zinc_syrup_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-3",
    "name": "Pure Vitamin C Complex",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 28,
    "rating": "5.0/5",
    "image": "/images/products/vitamin_c_complex_amber_bottle_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-4",
    "name": "Immune Citrus Elixir",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 30,
    "rating": "4.8/5",
    "image": "/images/products/hd-golden-oil-2.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-5",
    "name": "Organic Astragalus Root",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 32,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-10.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-6",
    "name": "Giloy Ayurvedic Tablets",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 22,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-11.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-7",
    "name": "Echinacea Goldenseal Drops",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 27,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-13.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-8",
    "name": "Chyawanprash Herbal Jam",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 35,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-14.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-9",
    "name": "Zinc Glycinate Defense",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 19,
    "rating": "4.7/5",
    "image": "/images/products/b_complex_botanical_bottle_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-10",
    "name": "Amla Berry Vitamin Tonic",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 24,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-16.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-11",
    "name": "Reishi Mushroom Shield",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 36,
    "rating": "4.9/5",
    "image": "/images/products/cordyceps_mushroom_powder_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-12",
    "name": "Herbal Throat Soother",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 18,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-18.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-13",
    "name": "Oregano Oil Pure Drops",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 25,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-20.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "immunity-14",
    "name": "Daily Immune Multivitamin",
    "category": "Immunity",
    "tag": "Immunity",
    "price": 34,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-22.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-1",
    "name": "Moringa Greens Powder",
    "category": "Energy",
    "tag": "Energy",
    "price": 32,
    "rating": "4.9/5",
    "image": "/images/products/moringa_greens_powder_clean_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-2",
    "name": "Littlefoot Matcha Tin",
    "category": "Energy",
    "tag": "Energy",
    "price": 22,
    "rating": "4.9/5",
    "image": "/images/products/matcha_tin_ceremonial_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-3",
    "name": "Ceremonial Matcha Blend",
    "category": "Energy",
    "tag": "Energy",
    "price": 28,
    "rating": "4.9/5",
    "image": "/images/products/hd-tea-canister-2.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-4",
    "name": "Korean Ginseng Extract",
    "category": "Energy",
    "tag": "Energy",
    "price": 36,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-24.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-5",
    "name": "Cordyceps Militaris Powder",
    "category": "Energy",
    "tag": "Energy",
    "price": 38,
    "rating": "5.0/5",
    "image": "/images/products/cordyceps_mushroom_powder_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-6",
    "name": "Rhodiola Rosea Tablets",
    "category": "Energy",
    "tag": "Energy",
    "price": 27,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-26.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-7",
    "name": "Shilajit Pure Resin",
    "category": "Energy",
    "tag": "Energy",
    "price": 45,
    "rating": "5.0/5",
    "image": "/images/products/shilajit_resin_jar_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-8",
    "name": "Maca Root Vitality Powder",
    "category": "Energy",
    "tag": "Energy",
    "price": 26,
    "rating": "4.7/5",
    "image": "/images/products/fresh-hd-28.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-9",
    "name": "Ashwagandha Energy Tonic",
    "category": "Energy",
    "tag": "Energy",
    "price": 30,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-29.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-10",
    "name": "CoQ10 Cellular Boost",
    "category": "Energy",
    "tag": "Energy",
    "price": 34,
    "rating": "4.8/5",
    "image": "/images/card1-lemon-mint-hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-11",
    "name": "B-Complex Botanical Blend",
    "category": "Energy",
    "tag": "Energy",
    "price": 24,
    "rating": "4.9/5",
    "image": "/images/products/b_complex_botanical_bottle_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-12",
    "name": "Green Superfood Elixir",
    "category": "Energy",
    "tag": "Energy",
    "price": 29,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-30.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-13",
    "name": "Yerba Mate Vitality Drops",
    "category": "Energy",
    "tag": "Energy",
    "price": 23,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-33.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-14",
    "name": "Spirulina Pure Tablets",
    "category": "Energy",
    "tag": "Energy",
    "price": 21,
    "rating": "4.7/5",
    "image": "/images/products/fresh-hd-34.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-15",
    "name": "Guarana Clean Energy",
    "category": "Energy",
    "tag": "Energy",
    "price": 25,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-35.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-16",
    "name": "Beetroot Nitric Oxide Elixir",
    "category": "Energy",
    "tag": "Energy",
    "price": 28,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-36.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-17",
    "name": "Eleuthero Root Tincture",
    "category": "Energy",
    "tag": "Energy",
    "price": 26,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-37.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-18",
    "name": "Lion's Mane Energy Drops",
    "category": "Energy",
    "tag": "Energy",
    "price": 35,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-38.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-19",
    "name": "Wheatgrass Juice Powder",
    "category": "Energy",
    "tag": "Energy",
    "price": 27,
    "rating": "4.7/5",
    "image": "/images/products/fresh-hd-40.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-20",
    "name": "Daily Active Adaptogen",
    "category": "Energy",
    "tag": "Energy",
    "price": 33,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-42.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-21",
    "name": "Moringa Leaf Capsules",
    "category": "Energy",
    "tag": "Energy",
    "price": 24,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-44.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-22",
    "name": "Ginseng Royal Jelly",
    "category": "Energy",
    "tag": "Energy",
    "price": 38,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-45.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "energy-23",
    "name": "Chlorella Detox Tabs",
    "category": "Energy",
    "tag": "Energy",
    "price": 22,
    "rating": "4.7/5",
    "image": "/images/products/fresh-hd-6.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "glow-1",
    "name": "Turmeric Glow Tea",
    "category": "Glow",
    "tag": "Glow",
    "price": 18,
    "rating": "4.9/5",
    "image": "/images/products/hd-matcha-tin-1.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "glow-2",
    "name": "Radiance Rosehip Oil",
    "category": "Glow",
    "tag": "Glow",
    "price": 30,
    "rating": "4.9/5",
    "image": "/images/products/hd-amber-bottle-3.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "glow-3",
    "name": "Golden Turmeric Serum",
    "category": "Glow",
    "tag": "Glow",
    "price": 34,
    "rating": "5.0/5",
    "image": "/images/products/kumkumadi_saffron_oil_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "glow-4",
    "name": "Botanical Radiance Elixir",
    "category": "Glow",
    "tag": "Glow",
    "price": 38,
    "rating": "4.9/5",
    "image": "/images/products/hd-golden-oil-1.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-1",
    "name": "Brahmi Focus Drops",
    "category": "Focus",
    "tag": "Focus",
    "price": 26,
    "rating": "4.8/5",
    "image": "/images/products/hd-amber-dropper-1.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-2",
    "name": "Lion's Mane Nootropic",
    "category": "Focus",
    "tag": "Focus",
    "price": 34,
    "rating": "4.9/5",
    "image": "/images/products/cordyceps_mushroom_powder_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-3",
    "name": "Roasted Porica Drops",
    "category": "Focus",
    "tag": "Focus",
    "price": 26,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-7.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-4",
    "name": "Ginkgo Biloba Clarity",
    "category": "Focus",
    "tag": "Focus",
    "price": 28,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-8.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-5",
    "name": "Bacopa Monnieri Extract",
    "category": "Focus",
    "tag": "Focus",
    "price": 32,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-9.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-6",
    "name": "Gotu Kola Mental Calm",
    "category": "Focus",
    "tag": "Focus",
    "price": 25,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-10.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-7",
    "name": "Rosemary Memory Tonic",
    "category": "Focus",
    "tag": "Focus",
    "price": 24,
    "rating": "4.7/5",
    "image": "/images/products/fresh-hd-11.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-8",
    "name": "L-Theanine Clean Focus",
    "category": "Focus",
    "tag": "Focus",
    "price": 29,
    "rating": "4.9/5",
    "image": "/images/products/b_complex_botanical_bottle_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-9",
    "name": "Celastrus Seed Oil",
    "category": "Focus",
    "tag": "Focus",
    "price": 36,
    "rating": "4.9/5",
    "image": "/images/products/hd-golden-oil-2.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-10",
    "name": "Shankhpushpi Mind Syrup",
    "category": "Focus",
    "tag": "Focus",
    "price": 27,
    "rating": "4.8/5",
    "image": "/images/products/elderberry_zinc_syrup_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-11",
    "name": "Mucuna Pruriens Dopa Boost",
    "category": "Focus",
    "tag": "Focus",
    "price": 33,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-12.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-12",
    "name": "Holy Basil Clarity Infusion",
    "category": "Focus",
    "tag": "Focus",
    "price": 22,
    "rating": "4.8/5",
    "image": "/images/products/hd-matcha-tin-1.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-13",
    "name": "Cognitive Herbal Elixir",
    "category": "Focus",
    "tag": "Focus",
    "price": 35,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-13.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-14",
    "name": "Focus Flow Adaptogen",
    "category": "Focus",
    "tag": "Focus",
    "price": 30,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-14.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-15",
    "name": "Clarity Brain Tincture",
    "category": "Focus",
    "tag": "Focus",
    "price": 28,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-15.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-16",
    "name": "Neuro-Vitality Capsules",
    "category": "Focus",
    "tag": "Focus",
    "price": 38,
    "rating": "5.0/5",
    "image": "/images/products/triphala_ayurvedic_capsules_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "focus-17",
    "name": "Botanical Study Drops",
    "category": "Focus",
    "tag": "Focus",
    "price": 25,
    "rating": "4.7/5",
    "image": "/images/products/fresh-hd-16.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "gut-1",
    "name": "Triphala Capsules",
    "category": "Gut",
    "tag": "Gut",
    "price": 22,
    "rating": "4.9/5",
    "image": "/images/products/triphala_ayurvedic_capsules_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "gut-2",
    "name": "Herbal Digestive Bitters",
    "category": "Gut",
    "tag": "Gut",
    "price": 26,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-17.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "gut-3",
    "name": "Spore Probiotic Blend",
    "category": "Gut",
    "tag": "Gut",
    "price": 32,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-18.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "gut-4",
    "name": "Ayurvedic Gut Cleanse",
    "category": "Gut",
    "tag": "Gut",
    "price": 24,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-20.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "gut-5",
    "name": "Soothing Licorice Root",
    "category": "Gut",
    "tag": "Gut",
    "price": 20,
    "rating": "4.7/5",
    "image": "/images/products/fresh-hd-22.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "gut-6",
    "name": "Daily Prebiotic Fiber",
    "category": "Gut",
    "tag": "Gut",
    "price": 28,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-24.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-1",
    "name": "Neem Clear Tablets",
    "category": "Skin",
    "tag": "Skin",
    "price": 20,
    "rating": "5.0/5",
    "image": "/images/products/neem_herbal_leaves_tablets_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-2",
    "name": "Botanical Clarifying Oil",
    "category": "Skin",
    "tag": "Skin",
    "price": 32,
    "rating": "4.9/5",
    "image": "/images/products/hd-amber-bottle-3.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-3",
    "name": "Pure Bakuchiol Elixir",
    "category": "Skin",
    "tag": "Skin",
    "price": 36,
    "rating": "5.0/5",
    "image": "/images/products/hd-amber-dropper-1.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-4",
    "name": "Calendula Soothing Balm",
    "category": "Skin",
    "tag": "Skin",
    "price": 24,
    "rating": "4.8/5",
    "image": "/images/products/item-unique-10.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-5",
    "name": "Manjistha Blood Purifier",
    "category": "Skin",
    "tag": "Skin",
    "price": 28,
    "rating": "4.9/5",
    "image": "/images/products/hd-golden-oil-1.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-6",
    "name": "Kumkumadi Glowing Oil",
    "category": "Skin",
    "tag": "Skin",
    "price": 48,
    "rating": "5.0/5",
    "image": "/images/products/kumkumadi_saffron_oil_hd.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-7",
    "name": "Rosewater Facial Mist",
    "category": "Skin",
    "tag": "Skin",
    "price": 18,
    "rating": "4.8/5",
    "image": "/images/products/hd-amber-dropper-2.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-8",
    "name": "Sandalwood Soothing Paste",
    "category": "Skin",
    "tag": "Skin",
    "price": 26,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-2.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-9",
    "name": "Saffron Radiance Serum",
    "category": "Skin",
    "tag": "Skin",
    "price": 42,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-3.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-10",
    "name": "Aloe Vera Soothing Gel",
    "category": "Skin",
    "tag": "Skin",
    "price": 22,
    "rating": "4.8/5",
    "image": "/images/products/hd-amber-jar-4.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-11",
    "name": "Tea Tree Blemish Drops",
    "category": "Skin",
    "tag": "Skin",
    "price": 25,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-4.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-12",
    "name": "Gotu Kola Collagen Booster",
    "category": "Skin",
    "tag": "Skin",
    "price": 38,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-6.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-13",
    "name": "Niacinamide Botanical Drops",
    "category": "Skin",
    "tag": "Skin",
    "price": 29,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-7.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-14",
    "name": "Hyaluronic Hydration Elixir",
    "category": "Skin",
    "tag": "Skin",
    "price": 34,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-8.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-15",
    "name": "Jojoba Nourishing Oil",
    "category": "Skin",
    "tag": "Skin",
    "price": 27,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-9.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-16",
    "name": "Sea Buckthorn Barrier Oil",
    "category": "Skin",
    "tag": "Skin",
    "price": 35,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-10.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-17",
    "name": "Turmeric Brightening Mask",
    "category": "Skin",
    "tag": "Skin",
    "price": 28,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-11.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-18",
    "name": "Neem Leaf Cleansing Powder",
    "category": "Skin",
    "tag": "Skin",
    "price": 21,
    "rating": "4.7/5",
    "image": "/images/products/fresh-hd-12.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-19",
    "name": "Hibiscus Youth Elixir",
    "category": "Skin",
    "tag": "Skin",
    "price": 39,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-13.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-20",
    "name": "Blue Tansy Calming Serum",
    "category": "Skin",
    "tag": "Skin",
    "price": 44,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-14.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-21",
    "name": "Centella Asiatica Essence",
    "category": "Skin",
    "tag": "Skin",
    "price": 31,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-15.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-22",
    "name": "Licorice Dark Spot Fade",
    "category": "Skin",
    "tag": "Skin",
    "price": 33,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-16.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-23",
    "name": "Lavender Calming Balm",
    "category": "Skin",
    "tag": "Skin",
    "price": 26,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-17.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-24",
    "name": "Elderflower Balancing Tonic",
    "category": "Skin",
    "tag": "Skin",
    "price": 24,
    "rating": "4.7/5",
    "image": "/images/products/fresh-hd-18.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-25",
    "name": "Chamomile Repair Salve",
    "category": "Skin",
    "tag": "Skin",
    "price": 29,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-20.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-26",
    "name": "Rosehip Seed Pure Oil",
    "category": "Skin",
    "tag": "Skin",
    "price": 32,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-22.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-27",
    "name": "Marula Luxury Facial Oil",
    "category": "Skin",
    "tag": "Skin",
    "price": 46,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-24.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-28",
    "name": "Evening Primrose Drops",
    "category": "Skin",
    "tag": "Skin",
    "price": 28,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-26.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-29",
    "name": "Green Tea Pore Refining Serum",
    "category": "Skin",
    "tag": "Skin",
    "price": 30,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-28.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-30",
    "name": "Witch Hazel Herbal Astringent",
    "category": "Skin",
    "tag": "Skin",
    "price": 20,
    "rating": "4.7/5",
    "image": "/images/products/fresh-hd-29.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-31",
    "name": "Pomegranate Seed Glow",
    "category": "Skin",
    "tag": "Skin",
    "price": 37,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-30.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-32",
    "name": "Argan Beauty Nectar",
    "category": "Skin",
    "tag": "Skin",
    "price": 35,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-33.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-33",
    "name": "Zinc Oxide Mineral Shield",
    "category": "Skin",
    "tag": "Skin",
    "price": 31,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-34.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-34",
    "name": "Herbal Acne Relief Tablets",
    "category": "Skin",
    "tag": "Skin",
    "price": 25,
    "rating": "4.8/5",
    "image": "/images/products/fresh-hd-35.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-35",
    "name": "Ayurvedic Glow Polish",
    "category": "Skin",
    "tag": "Skin",
    "price": 34,
    "rating": "5.0/5",
    "image": "/images/products/fresh-hd-36.jpg",
    "bgTone": "bg-[#F5F2EB]"
  },
  {
    "id": "skin-36",
    "name": "Pure Botanical Lip Nectar",
    "category": "Skin",
    "tag": "Skin",
    "price": 18,
    "rating": "4.9/5",
    "image": "/images/products/fresh-hd-37.jpg",
    "bgTone": "bg-[#F5F2EB]"
  }
];
