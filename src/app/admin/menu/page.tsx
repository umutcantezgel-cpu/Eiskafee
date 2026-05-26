import { HF_DATA } from '@/lib/data';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Menu Management - Admin Dashboard',
};

export default function MenuManagementPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#FDFCF8] text-[#2C2621] p-6 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-light tracking-wide mb-2 text-[#2C2621]">Menu Management</h1>
          <p className="text-[#59534E] text-sm tracking-widest uppercase">Edit categories and items</p>
        </header>

        <div className="space-y-12">
          {HF_DATA.categories.map((category) => {
            const menuData = HF_DATA.menu[category.id as keyof typeof HF_DATA.menu];
            if (!menuData) return null;

            return (
              <section key={category.id} className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_2px_10px_rgba(44,38,33,0.04)] border border-[#EBEAE5]">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#F0EFEA]">
                  <div>
                    <h2 className="text-xl font-medium tracking-wide text-[#3E3430] uppercase">{category.label}</h2>
                    {menuData.desc && <p className="text-sm text-[#736B63] mt-1">{menuData.desc}</p>}
                  </div>
                  <button className="text-xs tracking-widest uppercase font-semibold text-[#8C847A] hover:text-[#2C2621] transition-colors border border-[#EAE8E3] px-4 py-2 rounded-lg hover:bg-[#F9F8F6]">
                    Edit Category
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {menuData.items.map((item) => (
                    <div key={item.id} className="bg-[#FDFCF8] p-4 rounded-xl border border-[#F0EFEA] flex justify-between items-start hover:border-[#D6D3CD] transition-colors">
                      <div className="flex-1 mr-4">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-medium text-[#2C2621]">{item.name}</h3>
                          <span className="font-semibold text-[#59534E]">{item.price}</span>
                        </div>
                        {item.desc && <p className="text-sm text-[#8C847A] line-clamp-2">{item.desc}</p>}
                        {item.tag && (
                          <span className="inline-block mt-2 text-[10px] uppercase tracking-wider bg-[#F0EFEA] text-[#59534E] px-2 py-0.5 rounded">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <button className="text-[#8C847A] hover:text-[#2C2621] p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-3 border-2 border-dashed border-[#EAE8E3] text-[#8C847A] rounded-xl hover:bg-[#F9F8F6] hover:text-[#59534E] transition-colors text-sm font-medium flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  Add Item to {category.label}
                </button>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
