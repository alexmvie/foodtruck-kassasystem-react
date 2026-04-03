import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
   Home,
   ArrowLeft,
   Minimize2,
   Maximize2,
   BarChart3,
   ClipboardList,
   Settings,
   FileText,
   LogOut,
   History,
} from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { PaymentModal } from './components/PaymentModal';
import { CategoryMenu } from './components/CategoryMenu';
import { ProductGrid } from './components/ProductGrid';
import { useMobileDetection } from './hooks/useMobileDetection';
import { CATEGORY_ITEMS_ROWS } from './constants';
import { APP_VERSION } from './constants/version';
import { getButtonText } from './utils/buttonTexts';
import type { ViewState, OrderItem, Product } from './types';

const MENU_OPTIONS_CATEGORY_ID = 'menu_options';
const MENU_WITH_EXTRAS_ID = 'menu_with_extras';
const MENU_WITHOUT_EXTRAS_ID = 'menu_without_extras';

const MENU_OPTION_ROWS: Product[][] = [
   [
      {
         id: MENU_WITH_EXTRAS_ID,
         name: 'Mit Extras',
         price: 0,
         hidePrice: true,
         color: 'bg-green-100 border-green-200 text-green-900',
      },
      {
         id: MENU_WITHOUT_EXTRAS_ID,
         name: 'Ohne Extras',
         price: 0,
         hidePrice: true,
         color: 'bg-slate-100 border-slate-200 text-slate-900',
      },
   ],
];

const createOrderId = () => Math.random().toString(36).slice(2, 11);

const generateOrderNumber = () => Math.floor(Math.random() * 900) + 100;

export default function App() {
   const [view, setView] = useState<ViewState>('POS');
   const [activeCategory, setActiveCategory] = useState<string | null>(null);
   const [order, setOrder] = useState<OrderItem[]>([]);
   const [activeMenuParentOrderId, setActiveMenuParentOrderId] = useState<string | null>(null);
   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
   const [paymentResult, setPaymentResult] = useState<string | null>(null);
   const [isProductsMinimized, setIsProductsMinimized] = useState(false);
   const [isOrderMinimized, setIsOrderMinimized] = useState(false);
   const [orderNumber, setOrderNumber] = useState<number>(() => generateOrderNumber());

   const { isMobilePortrait } = useMobileDetection();

   // Dark Mode verhindern und Theme fixieren
   useEffect(() => {
      // Meta-Tags für Dark Mode Prevention
      const metaColorScheme = document.querySelector('meta[name="color-scheme"]');
      if (metaColorScheme) {
         metaColorScheme.setAttribute('content', 'light only');
      } else {
         const meta = document.createElement('meta');
         meta.name = 'color-scheme';
         meta.content = 'light only';
         document.head.appendChild(meta);
      }

      // CSS Variablen für Light Mode forcieren
      document.documentElement.style.colorScheme = 'light only';
      document.documentElement.setAttribute('data-theme', 'light');
   }, []);

   const total = useMemo(() => {
      return order.reduce((sum, item) => sum + item.price * item.quantity, 0);
   }, [order]);

   const activeMenuParent = useMemo(() => {
      return order.find((item) => item.orderId === activeMenuParentOrderId) ?? null;
   }, [order, activeMenuParentOrderId]);

   const categoryRows = useMemo(() => {
      if (activeCategory === MENU_OPTIONS_CATEGORY_ID) {
         return MENU_OPTION_ROWS;
      }

      if (!activeCategory) {
         return [];
      }

      return CATEGORY_ITEMS_ROWS[activeCategory] || [];
   }, [activeCategory]);

   const headline = useMemo(() => {
      if (view === 'HOME') {
         return 'Administration';
      }

      if (activeMenuParent) {
         return activeMenuParent.name;
      }

      if (view === 'CATEGORY' && activeCategory) {
         const buttonText = getButtonText(activeCategory, true);
         return buttonText.line1 + (buttonText.line2 ? ' ' + buttonText.line2 : '');
      }

      return 'FoodTruck POS';
   }, [view, activeMenuParent, activeCategory]);

   useEffect(() => {
      if (activeMenuParentOrderId && !activeMenuParent) {
         setActiveMenuParentOrderId(null);
         setActiveCategory(null);
         setView('POS');
      }
   }, [activeMenuParent, activeMenuParentOrderId]);

   const goBack = () => {
      setView('POS');
      setActiveCategory(null);
      setActiveMenuParentOrderId(null);
   };

   const openCategory = (categoryId: string) => {
      setActiveMenuParentOrderId(null);
      setActiveCategory(categoryId);
      setView('CATEGORY');
   };

   const addStandaloneToOrder = (product: Product) => {
      setOrder((prev) => {
         const existing = prev.find((item) => item.id === product.id && !item.parentOrderId);

         if (existing) {
            return prev.map((item) => (item.orderId === existing.orderId ? { ...item, quantity: item.quantity + 1 } : item));
         }

         return [...prev, { ...product, quantity: 1, orderId: createOrderId() }];
      });
   };

   const startMenuOrder = (product: Product) => {
      const orderId = createOrderId();

      setOrder((prev) => [...prev, { ...product, quantity: 1, orderId }]);
      setActiveMenuParentOrderId(orderId);
      setActiveCategory(MENU_OPTIONS_CATEGORY_ID);
      setView('CATEGORY');
   };

   const addChildToOrder = (product: Product, parentOrderId: string) => {
      setOrder((prev) => {
         const existing = prev.find((item) => item.id === product.id && item.parentOrderId === parentOrderId);

         if (existing) {
            return prev.map((item) => (item.orderId === existing.orderId ? { ...item, quantity: item.quantity + 1 } : item));
         }

         return [...prev, { ...product, quantity: 1, orderId: createOrderId(), parentOrderId }];
      });
   };

   const handleMenuOptionClick = (product: Product) => {
      if (!activeMenuParent) {
         return;
      }

      if (product.id === MENU_WITH_EXTRAS_ID && activeMenuParent.menuCategoryId) {
         setActiveCategory(activeMenuParent.menuCategoryId);
         setView('CATEGORY');
         return;
      }

      goBack();
   };

   const addToOrder = (product: Product) => {
      if (activeCategory === MENU_OPTIONS_CATEGORY_ID && activeMenuParentOrderId) {
         handleMenuOptionClick(product);
         return;
      }

      if (product.isCategory) {
         openCategory(product.id);
         return;
      }

      if (activeMenuParentOrderId) {
         addChildToOrder(product, activeMenuParentOrderId);
         return;
      }

      if (product.menuCategoryId) {
         startMenuOrder(product);
         return;
      }

      addStandaloneToOrder(product);
   };

   const removeFromOrder = (orderId: string) => {
      setOrder((prev) => prev.filter((item) => item.orderId !== orderId && item.parentOrderId !== orderId));

      if (activeMenuParentOrderId === orderId) {
         setActiveMenuParentOrderId(null);
         setActiveCategory(null);
         setView('POS');
      }
   };

   const updateQuantity = (orderId: string, delta: number) => {
      setOrder((prev) =>
         prev.map((item) => {
            if (item.orderId === orderId || item.parentOrderId === orderId) {
               const newQty = Math.max(1, item.quantity + delta);
               return { ...item, quantity: newQty };
            }
            return item;
         }),
      );
   };

   const clearOrder = () => {
      setOrder([]);
      setActiveCategory(null);
      setActiveMenuParentOrderId(null);
      setOrderNumber(generateOrderNumber());
   };

   const toggleHomeView = () => {
      setView((currentView) => (currentView === 'HOME' ? 'POS' : 'HOME'));
      setActiveCategory(null);
      setActiveMenuParentOrderId(null);
   };

   const handlePaymentOption = (option: string) => {
      setPaymentResult(option);
      if (option === 'CASH' || option === 'KARTE' || option === 'RECHNUNG') {
         setTimeout(() => {
            setIsPaymentModalOpen(false);
            setPaymentResult(null);
            clearOrder();
         }, 1500);
      } else {
         setTimeout(() => {
            setIsPaymentModalOpen(false);
            setPaymentResult(null);
         }, 1000);
      }
   };

   return (
      <div className='flex h-screen w-full bg-slate-100 font-sans text-slate-900 overflow-hidden select-none'>
         {isMobilePortrait ? (
            // Mobile Portrait: Split Layout - Top: Products, Bottom: Order
            <div className='flex flex-col w-full h-full'>
               {/* Top Section: Product Grid */}
               <div
                  className={`flex flex-col min-w-0 border-b border-slate-200 transition-all duration-300 ${
                     isProductsMinimized ? 'h-16' : 'flex-1'
                  }`}
               >
                  {/* Product Header */}
                  <div className='h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 shadow-sm z-10'>
                     <div className='flex items-center gap-2'>
                        {view !== 'POS' && (
                           <button
                              onClick={goBack}
                              className='p-2 bg-black text-white rounded-lg transition-all hover:bg-slate-800 shadow-lg'
                           >
                              <ArrowLeft className='w-5 h-5' />
                           </button>
                        )}
                        <h1 className='text-lg font-black tracking-tighter uppercase flex items-center gap-2'>
                           {headline}
                           <span className='text-[10px] font-normal text-slate-400 tracking-normal'>v{APP_VERSION}</span>
                        </h1>
                     </div>
                     <div className='flex items-center gap-2'>
                        <button
                           onClick={() => setIsProductsMinimized(!isProductsMinimized)}
                           className='p-2 bg-black text-white rounded-lg transition-all hover:bg-slate-800 shadow-lg'
                        >
                           {isProductsMinimized ? <Maximize2 className='w-4 h-4' /> : <Minimize2 className='w-4 h-4' />}
                        </button>
                        <button
                           onClick={toggleHomeView}
                           className={`p-2 rounded-lg transition-all flex items-center gap-1 font-bold uppercase text-xs tracking-widest ${
                              view === 'HOME'
                                 ? 'bg-orange-500 text-white shadow-lg'
                                 : 'bg-black text-white hover:bg-slate-800 shadow-lg'
                           }`}
                        >
                           <Home className='w-4 h-4' />
                        </button>
                     </div>
                  </div>

                  {/* Product Content */}
                  {!isProductsMinimized && (
                     <div className='flex-1 p-2 overflow-hidden relative'>
                        {view === 'HOME' ? (
                           <div className='grid grid-cols-2 gap-2 h-full'>
                              {[
                                 { icon: BarChart3, label: 'Umsatz', color: 'bg-blue-500' },
                                 { icon: ClipboardList, label: 'Abschluss', color: 'bg-green-500' },
                                 { icon: History, label: 'Journal', color: 'bg-purple-500' },
                                 { icon: Settings, label: 'Einstellungen', color: 'bg-slate-500' },
                              ].map((item, idx) => (
                                 <motion.button
                                    key={idx}
                                    whileTap={{ scale: 0.98 }}
                                    className='flex flex-col items-center justify-center bg-white rounded-xl shadow-sm border border-slate-200 hover:border-slate-400 transition-all p-3'
                                 >
                                    <div
                                       className={`w-8 h-8 ${item.color} text-white rounded-lg flex items-center justify-center mb-2 shadow`}
                                    >
                                       <item.icon className='w-4 h-4' />
                                    </div>
                                    <span className='font-black uppercase text-xs tracking-wider text-slate-700'>
                                       {item.label}
                                    </span>
                                 </motion.button>
                              ))}
                           </div>
                        ) : view === 'CATEGORY' && activeCategory ? (
                           <CategoryMenu
                              categoryId={activeCategory}
                              rows={categoryRows}
                              onBack={goBack}
                              onProductClick={addToOrder}
                           />
                        ) : (
                           <ProductGrid onProductClick={addToOrder} />
                        )}
                     </div>
                  )}
               </div>

               {/* Bottom Section: Order Panel */}
               <div
                  className={`flex flex-col bg-white border-t border-slate-200 transition-all duration-300 ${
                     isOrderMinimized ? 'h-16' : 'flex-1 min-h-0'
                  }`}
               >
                  {/* Order Header */}
                  <div className='h-16 bg-white border-t border-slate-200 flex items-center justify-between px-4 shadow-sm flex-shrink-0'>
                     <div className='flex items-center gap-2'>
                        <div className='bg-orange-500 text-white px-2 py-1 rounded-full text-[10px] font-black'>
                           {order.reduce((a, b) => a + b.quantity, 0)} POS
                        </div>
                        <h2 className='text-lg font-black tracking-tighter uppercase'>Bestellung</h2>
                     </div>
                     <button
                        onClick={() => setIsOrderMinimized(!isOrderMinimized)}
                        className='p-2 bg-black text-white rounded-lg transition-all hover:bg-slate-800 shadow-lg'
                     >
                        {isOrderMinimized ? <Maximize2 className='w-4 h-4' /> : <Minimize2 className='w-4 h-4' />}
                     </button>
                  </div>

                  {/* Order Content */}
                  {!isOrderMinimized && (
                     <div className='flex-1 flex flex-col min-h-0'>
                        <Sidebar
                           order={order}
                           total={total}
                           orderNumber={orderNumber}
                           onUpdateQuantity={updateQuantity}
                           onRemoveFromOrder={removeFromOrder}
                           onClearOrder={clearOrder}
                           onPaymentClick={() => setIsPaymentModalOpen(true)}
                           isMobilePortrait={true}
                        />
                     </div>
                  )}
               </div>
            </div>
         ) : (
            // Desktop/Landscape: Original Layout
            <div className='flex flex-1'>
               {/* Left Side: Product Grid / Admin View */}
               <div className='flex-1 flex flex-col min-w-0'>
                  {/* Top Bar */}
                  <div className='h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-10'>
                     <div className='flex items-center gap-4'>
                        {view !== 'POS' && (
                           <button
                              onClick={goBack}
                              className='p-3 bg-black text-white rounded-xl transition-all hover:bg-slate-800 shadow-lg'
                           >
                              <ArrowLeft className='w-7 h-7' />
                           </button>
                        )}
                        <h1 className='text-xl font-black tracking-tighter uppercase flex items-center gap-2'>
                           {headline}
                           <span className='text-[10px] font-normal text-slate-400 tracking-normal'>v{APP_VERSION}</span>
                        </h1>
                     </div>
                     <button
                        onClick={toggleHomeView}
                        className={`p-3 rounded-xl transition-all flex items-center gap-2 font-bold uppercase text-xs tracking-widest ${
                           view === 'HOME'
                              ? 'bg-orange-500 text-white shadow-lg'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                     >
                        <Home className='w-5 h-5' /> {view === 'HOME' ? 'Zurück' : 'Home'}
                     </button>
                  </div>

                  <div className='flex-1 p-4 overflow-hidden relative'>
                     {view === 'HOME' ? (
                        <div className='grid grid-cols-3 gap-4 h-full'>
                           {[
                              { icon: BarChart3, label: 'Umsatz Heute', color: 'bg-blue-500' },
                              { icon: ClipboardList, label: 'Tagesabschluss', color: 'bg-green-500' },
                              { icon: History, label: 'Journal / Historie', color: 'bg-purple-500' },
                              { icon: Settings, label: 'Einstellungen', color: 'bg-slate-500' },
                              { icon: FileText, label: 'Berichte', color: 'bg-orange-500' },
                              { icon: LogOut, label: 'Abmelden', color: 'bg-red-500' },
                           ].map((item, idx) => (
                              <motion.button
                                 key={idx}
                                 whileTap={{ scale: 0.98 }}
                                 className='flex flex-col items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-slate-400 transition-all p-6'
                              >
                                 <div
                                    className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                                 >
                                    <item.icon className='w-8 h-8' />
                                 </div>
                                 <span className='font-black uppercase text-sm tracking-widest text-slate-700'>{item.label}</span>
                              </motion.button>
                           ))}
                        </div>
                     ) : view === 'CATEGORY' && activeCategory ? (
                        <CategoryMenu
                           categoryId={activeCategory}
                           rows={categoryRows}
                           onBack={goBack}
                           onProductClick={addToOrder}
                        />
                     ) : (
                        <ProductGrid onProductClick={addToOrder} />
                     )}
                  </div>
               </div>

               {/* Right Side: Order Summary & Actions */}
               <Sidebar
                  order={order}
                  total={total}
                  orderNumber={orderNumber}
                  onUpdateQuantity={updateQuantity}
                  onRemoveFromOrder={removeFromOrder}
                  onClearOrder={clearOrder}
                  onPaymentClick={() => setIsPaymentModalOpen(true)}
               />
            </div>
         )}

         {/* Payment Options Modal */}
         <PaymentModal
            isOpen={isPaymentModalOpen}
            total={total}
            paymentResult={paymentResult}
            onClose={() => setIsPaymentModalOpen(false)}
            onPaymentOption={handlePaymentOption}
         />
      </div>
   );
}
