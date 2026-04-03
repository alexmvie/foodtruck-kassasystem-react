import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Trash2, Plus, Minus, RotateCcw, History, ChevronRight, X } from 'lucide-react';
import { OrderItem } from '../types';
import { useState } from 'react';

interface SidebarProps {
   order: OrderItem[];
   total: number;
   orderNumber: number;
   onUpdateQuantity: (orderId: string, delta: number) => void;
   onRemoveFromOrder: (orderId: string) => void;
   onClearOrder: () => void;
   onPaymentClick: () => void;
   isMobilePortrait?: boolean;
}

export const Sidebar = ({
   order,
   total,
   orderNumber,
   onUpdateQuantity,
   onRemoveFromOrder,
   onClearOrder,
   onPaymentClick,
   isMobilePortrait = false,
}: SidebarProps) => {
   const [showStornoModal, setShowStornoModal] = useState(false);

   const topLevelItems = order.filter((item) => !item.parentOrderId);

   const handleStornoClick = () => {
      if (order.length > 0) {
         setShowStornoModal(true);
      }
   };

   const handleConfirmStorno = () => {
      onClearOrder();
      setShowStornoModal(false);
   };

   const handleCancelStorno = () => {
      setShowStornoModal(false);
   };

   return (
      <div
         className={`${isMobilePortrait ? 'w-full flex-1 min-h-0' : 'w-80'} bg-white border-l border-slate-200 flex flex-col shadow-2xl z-20 ${isMobilePortrait ? 'border-l-0' : ''}`}
      >
         {/* Header - Fixed Height (only show in desktop mode) */}
         {!isMobilePortrait && (
            <div className='h-16 flex-shrink-0 p-4 bg-white border-b border-slate-200 flex items-center justify-between'>
               <div className='flex items-center gap-2'>
                  <ShoppingCart className='w-5 h-5 text-orange-400' />
                  <div>
                     <h2 className='text-lg font-black tracking-tight uppercase leading-none'>Bestellung</h2>
                     <span className='text-[10px] font-bold text-slate-500'>#{orderNumber}</span>
                  </div>
               </div>
               <div className='bg-orange-500 text-white px-2 py-0.5 rounded-full text-[10px] font-black'>
                  {order.reduce((a, b) => a + b.quantity, 0)} POS
               </div>
            </div>
         )}

         {/* Order List - Scrollable Middle Section */}
         <div className='flex-1 overflow-y-auto p-2 space-y-2 bg-slate-50/50'>
            <AnimatePresence initial={false}>
               {topLevelItems.length === 0 ? (
                  <div className='h-full flex flex-col items-center justify-center text-slate-300 opacity-40 p-8 text-center'>
                     <ShoppingCart className='w-12 h-12 mb-2' />
                     <p className='text-sm font-bold uppercase tracking-widest'>Warenkorb leer</p>
                  </div>
               ) : (
                  topLevelItems.map((item) => {
                     const childItems = order.filter((child) => child.parentOrderId === item.orderId);

                     return (
                     <motion.div
                        key={item.orderId}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className='bg-white rounded-xl border border-slate-200 shadow-sm flex-shrink-0 overflow-hidden'
                     >
                        <div className='flex items-center justify-between p-2'>
                           <div className='flex-1 min-w-0 pr-2'>
                              <div className='font-bold text-slate-800 truncate text-sm'>{item.name}</div>
                              <div className='text-[10px] text-slate-500 font-bold uppercase'>
                                 {(item.price * item.quantity).toFixed(2)} €
                              </div>
                           </div>

                           <div className='flex items-center gap-2 flex-shrink-0'>
                              <div className='flex items-center bg-slate-100 rounded-lg overflow-hidden border border-slate-200'>
                                 <button
                                    onClick={() => onUpdateQuantity(item.orderId, -1)}
                                    className='p-1 hover:bg-slate-200 text-slate-600'
                                 >
                                    <Minus className='w-3 h-3' />
                                 </button>
                                 <span className='w-6 text-center text-xs font-black text-slate-800'>{item.quantity}</span>
                                 <button
                                    onClick={() => onUpdateQuantity(item.orderId, 1)}
                                    className='p-1 hover:bg-slate-200 text-slate-600'
                                 >
                                    <Plus className='w-3 h-3' />
                                 </button>
                              </div>

                              <button
                                 onClick={() => onRemoveFromOrder(item.orderId)}
                                 className='p-1.5 bg-black text-white rounded-lg transition-colors hover:bg-slate-800'
                              >
                                 <Trash2 className='w-4 h-4' />
                              </button>
                           </div>
                        </div>

                        {childItems.length > 0 && (
                           <div className='border-t border-slate-100 bg-slate-50/70 px-2 py-1.5 space-y-1.5'>
                              {childItems.map((child) => (
                                 <div key={child.orderId} className='flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1.5'>
                                    <div className='flex-1 min-w-0 pr-2'>
                                       <div className='font-bold text-slate-700 truncate text-xs'>
                                          {child.quantity > 1 ? `${child.quantity} x ${child.name}` : child.name}
                                       </div>
                                       <div className='text-[10px] text-slate-400 font-bold uppercase'>
                                          {(child.price * child.quantity).toFixed(2)} €
                                       </div>
                                    </div>

                                    <div className='flex items-center gap-1 flex-shrink-0'>
                                       <div className='flex items-center bg-slate-100 rounded-lg overflow-hidden border border-slate-200'>
                                          <button
                                             onClick={() => onUpdateQuantity(child.orderId, -1)}
                                             className='p-1 hover:bg-slate-200 text-slate-600'
                                          >
                                             <Minus className='w-3 h-3' />
                                          </button>
                                          <span className='w-5 text-center text-[10px] font-black text-slate-800'>{child.quantity}</span>
                                          <button
                                             onClick={() => onUpdateQuantity(child.orderId, 1)}
                                             className='p-1 hover:bg-slate-200 text-slate-600'
                                          >
                                             <Plus className='w-3 h-3' />
                                          </button>
                                       </div>

                                       <button
                                          onClick={() => onRemoveFromOrder(child.orderId)}
                                          className='p-1.5 bg-black text-white rounded-lg transition-colors hover:bg-slate-800'
                                       >
                                          <Trash2 className='w-3 h-3' />
                                       </button>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        )}
                     </motion.div>
                     );
                  })
               )}
            </AnimatePresence>
         </div>

         {/* Footer - Fixed Height, Bottom Aligned */}
         <div className={`flex-shrink-0 bg-white border-t border-slate-200 ${isMobilePortrait ? 'p-3 space-y-2' : 'p-4 space-y-3'}`}>
            <div className='flex justify-between items-center px-1'>
               <span className='text-slate-400 font-black uppercase text-[10px] tracking-widest'>Summe</span>
               <span className={`${isMobilePortrait ? 'text-2xl' : 'text-3xl'} font-black text-slate-900`}>{total.toFixed(2)} €</span>
            </div>

            <button
               onClick={onPaymentClick}
               disabled={order.length === 0}
               className={`w-full ${isMobilePortrait ? 'py-3 text-lg' : 'py-4 text-xl'} bg-green-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-green-700 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-30 shadow-lg shadow-green-200`}
            >
               Zahlung <ChevronRight className='w-6 h-6' />
            </button>

            <div className='grid grid-cols-2 gap-2'>
               <button
                  onClick={handleStornoClick}
                  disabled={order.length === 0}
                  className='flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-500 rounded-xl font-black text-[10px] uppercase hover:bg-red-50 hover:text-red-500 transition-all disabled:opacity-30'
               >
                  <RotateCcw className='w-3 h-3' /> Storno
               </button>
               <button className='flex items-center justify-center gap-2 py-3 bg-slate-100 text-slate-500 rounded-xl font-black text-[10px] uppercase hover:bg-slate-200 transition-all'>
                  <History className='w-3 h-3' /> Letzte
               </button>
            </div>
         </div>

         {/* Storno Confirmation Modal */}
         <AnimatePresence>
            {showStornoModal && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'
                  onClick={handleCancelStorno}
               >
                  <motion.div
                     initial={{ scale: 0.9, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.9, opacity: 0 }}
                     className='bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl'
                     onClick={(e) => e.stopPropagation()}
                  >
                     <div className='flex items-center justify-between mb-4'>
                        <h3 className='text-lg font-black uppercase tracking-tight'>Storno</h3>
                        <button
                           onClick={handleCancelStorno}
                           className='p-1 hover:bg-slate-100 rounded-lg transition-colors'
                        >
                           <X className='w-5 h-5 text-slate-500' />
                        </button>
                     </div>
                     <p className='text-slate-600 mb-6 font-medium'>Wirklich die gesamte Bestellung stornieren?</p>
                     <div className='grid grid-cols-2 gap-3'>
                        <button
                           onClick={handleCancelStorno}
                           className='py-3 bg-slate-100 text-slate-700 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all'
                        >
                           Abbrechen
                        </button>
                        <button
                           onClick={handleConfirmStorno}
                           className='py-3 bg-red-500 text-white rounded-xl font-black text-sm uppercase tracking-widest hover:bg-red-600 transition-all'
                        >
                           Stornieren
                        </button>
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};
