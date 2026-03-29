import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Trash2, Plus, Minus, RotateCcw, History, ChevronRight } from 'lucide-react';
import { OrderItem } from '../types';

interface SidebarProps {
  order: OrderItem[];
  total: number;
  onUpdateQuantity: (orderId: string, delta: number) => void;
  onRemoveFromOrder: (orderId: string) => void;
  onClearOrder: () => void;
  onPaymentClick: () => void;
}

export const Sidebar = ({ 
  order, 
  total, 
  onUpdateQuantity, 
  onRemoveFromOrder, 
  onClearOrder, 
  onPaymentClick 
}: SidebarProps) => {
  return (
    <div className="w-80 bg-white border-l border-slate-200 flex flex-col shadow-2xl z-20">
      {/* Compact Header */}
      <div className="p-4 border-b border-slate-100 bg-slate-900 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-5 h-5 text-orange-400" />
          <h2 className="text-lg font-black tracking-tight uppercase">Bestellung</h2>
        </div>
        <div className="bg-orange-500 text-white px-2 py-0.5 rounded-full text-[10px] font-black">
          {order.reduce((a, b) => a + b.quantity, 0)} POS
        </div>
      </div>

      {/* Order List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-slate-50/50">
        <AnimatePresence initial={false}>
          {order.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-300 opacity-40 p-8 text-center">
              <ShoppingCart className="w-12 h-12 mb-2" />
              <p className="text-sm font-bold uppercase tracking-widest">Warenkorb leer</p>
            </div>
          ) : (
            order.map((item) => (
              <motion.div
                key={item.orderId}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex items-center justify-between p-2 bg-white rounded-xl border border-slate-200 shadow-sm"
              >
                <div className="flex-1 min-w-0 pr-2">
                  <div className="font-bold text-slate-800 truncate text-sm">{item.name}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">
                    {(item.price * item.quantity).toFixed(2)} €
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                    <button 
                      onClick={() => onUpdateQuantity(item.orderId, -1)}
                      className="p-1 hover:bg-slate-200 text-slate-600"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-xs font-black text-slate-800">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.orderId, 1)}
                      className="p-1 hover:bg-slate-200 text-slate-600"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => onRemoveFromOrder(item.orderId)}
                    className="p-1.5 text-slate-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Footer Actions */}
      <div className="p-4 bg-white border-t border-slate-200 space-y-3">
        <div className="flex justify-between items-center px-1">
          <span className="text-slate-400 font-black uppercase text-[10px] tracking-widest">Summe</span>
          <span className="text-3xl font-black text-slate-900">{total.toFixed(2)} €</span>
        </div>

        <button 
          onClick={onPaymentClick}
          disabled={order.length === 0}
          className="w-full py-4 bg-green-600 text-white rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-green-700 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-30 shadow-lg shadow-green-200"
        >
          Zahlung <ChevronRight className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={onClearOrder}
            disabled={order.length === 0}
            className="flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-500 rounded-xl font-black text-[10px] uppercase hover:bg-red-50 hover:text-red-500 transition-all disabled:opacity-30"
          >
            <RotateCcw className="w-3 h-3" /> Storno
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-500 rounded-xl font-black text-[10px] uppercase hover:bg-slate-200 transition-all">
            <History className="w-3 h-3" /> Letzte
          </button>
        </div>
      </div>
    </div>
  );
};
