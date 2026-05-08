'use client';

import { useState } from 'react';
import { Space_Grotesk } from 'next/font/google';
import Image from 'next/image';
import LandingNavbar from '@/components/LandingNavbar';
import LandingFooter from '@/components/LandingFooter';
import { Coffee, Award, Zap, Check, ChevronRight } from 'lucide-react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-space-grotesk',
});

const productCategories = [
  {
    id: 'ground-coffee',
    name: 'Ground Coffee',
    folder: 'ground-coffee',
    products: [
      { title: 'Cafe House Blend', image: 'coldfire-cafe-house-blend.webp' },
      { title: '100% Colombian', image: 'coldfire-100-colombian.webp' },
      { title: 'Euro Dark', image: 'coldfire-euro-dark.webp' },
      { title: 'Decaf', image: 'coldfire-decaf.webp' },
      { title: 'Kona Blend', image: 'coldfire-kona-blend.webp' },
    ]
  },
  {
    id: 'flavored-ground',
    name: 'Flavored Ground Coffee',
    folder: 'flavored-ground-coffee',
    products: [
      { title: 'Texas Pecan', image: 'coldfire-texas-pecan.webp' },
      { title: 'Cinnamon', image: 'coldfire-cinnamon.webp' },
      { title: 'French Vanilla', image: 'coldfire-french-vanilla.webp' },
    ]
  },
  {
    id: 'whole-bean',
    name: 'Whole Bean',
    folder: 'whole-bean',
    products: [
      { title: 'Cafe House Blend', image: 'coldfire-cafe-house-blend.webp' },
      { title: '100% Colombian', image: 'coldfire-100-colombian.webp' },
      { title: 'Euro Dark', image: 'coldfire-euro-dark.webp' },
      { title: 'Texas Pecan', image: 'coldfire-texas-pecan.webp' },
      { title: 'Cinnamon', image: 'coldfire-cinnamon.webp' },
      { title: 'Decaf', image: 'coldfire-decaf.webp' },
      { title: 'Costa Rican', image: 'coldfire-costa-rican.webp' },
      { title: 'French Vanilla', image: 'french-vanilla.webp' },
    ]
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0]);

  return (
    <div className={`min-h-screen bg-[#f5efe7] text-[#112033] ${spaceGrotesk.variable} font-sans`}>
      <LandingNavbar />

      <main className="pt-32">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#c86c49]">
              Our Selection
            </p>
            <h1 className="mt-4 font-[family:var(--font-space-grotesk)] text-4xl font-black tracking-tight text-[#0d1b2b] sm:text-6xl">
              Premium Roasts
            </h1>
          </div>

          {/* Category Tabs */}
          <div className="mx-auto mt-8 max-w-7xl">
            <div className="flex flex-wrap justify-center gap-2 border-b border-gray-100 pb-4">
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={`group relative px-6 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                    activeCategory.id === category.id
                      ? 'text-[#c86c49]'
                      : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {category.name}
                  {activeCategory.id === category.id && (
                    <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#c86c49] animate-in slide-in-from-left-full duration-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {activeCategory.products.map((product, index) => (
              <div key={`${activeCategory.id}-${product.title}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={`/products/${activeCategory.folder}/${product.image}`}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1 border-t border-gray-50">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Coffee className="w-3.5 h-3.5 text-[#c86c49]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {activeCategory.name}
                    </span>
                  </div>
                  <h3 className="font-[family:var(--font-space-grotesk)] text-lg font-bold text-[#0d1b2b]">
                    {product.title}
                  </h3>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50/50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#c86c49]">Premium Selection</span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#c86c49] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#0d1b2b] px-4 py-24 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-[family:var(--font-space-grotesk)] text-4xl font-bold tracking-tight sm:text-5xl">
                  The Jenko Standard
                </h2>
                <div className="mt-10 space-y-8">
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c86c49]">
                      <Coffee className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Small Batch Consistency</h4>
                      <p className="mt-2 text-white/60">Every roast is monitored for precision and profile, ensuring your customers get the same great taste every time.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#5f9ea0]">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Ethical Sourcing</h4>
                      <p className="mt-2 text-white/60">We partner with growers who share our commitment to sustainability and quality.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10">
                <Image
                  src="/products/ground-coffee/coldfire-euro-dark.webp"
                  alt="Quality assurance"
                  fill
                  className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#c86c49]/10" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
}
