"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign, ArrowUpRight } from "lucide-react";

const stats = [
  { name: "Total Revenue", value: "€12,450", change: "+14.5%", icon: DollarSign },
  { name: "Active Orders", value: "45", change: "+5.2%", icon: ShoppingBag },
  { name: "Total Customers", value: "1,240", change: "+11.3%", icon: Users },
  { name: "Conversion Rate", value: "3.2%", change: "+1.2%", icon: TrendingUp },
];

export default function AdminOverview() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <header>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display text-bark"
        >
          Overview
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-bark/60 mt-2 text-lg"
        >
          Welcome back! Here's what's happening today.
        </motion.p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-bark/5 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="bg-cream p-3 rounded-2xl text-bark-mid">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="flex items-center text-mint-dark text-sm font-medium bg-mint/10 px-2.5 py-1 rounded-full">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  {stat.change}
                </span>
              </div>
              
              <div className="mt-6">
                <h3 className="text-bark/50 font-medium text-sm">{stat.name}</h3>
                <p className="text-3xl font-display text-bark mt-1">{stat.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Orders Placeholder */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-3xl p-8 shadow-sm border border-bark/5"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-display text-bark">Recent Orders</h2>
          <button className="text-sm font-medium text-mint-dark hover:text-mint transition-colors">
            View All
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="w-8 h-8 text-bark/20" />
          </div>
          <p className="text-bark font-medium">No recent orders</p>
          <p className="text-bark/50 text-sm mt-1 max-w-sm">
            When customers place orders, they will appear here in real-time.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
