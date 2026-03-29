import { useState, useMemo, useEffect } from 'react';
import { 
  Home,
  ArrowLeft,
  BarChart3,
  ClipboardList,
  History,
  Settings,
  FileText,
  LogOut,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { motion } from 'motion/react';
import { Product, OrderItem, ViewState } from './types';
import { Sidebar } from './components/Sidebar';
import { ProductGrid } from './components/ProductGrid';
import { CategoryMenu } from './components/CategoryMenu';
import { PaymentModal } from './components/PaymentModal';
import { useMobileDetection } from './hooks/useMobileDetection';

export default function App() {
  const [view, setView] = useState<ViewState>('POS');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentResult, setPaymentResult] = useState<string | null>(null);
  const [isProductsMinimized, setIsProductsMinimized] = useState(false);
  const [isOrderMinimized, setIsOrderMinimized] = useState(false);
  
  const { isMobile, isPortrait, isMobilePortrait } = useMobileDetection();

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

  // DUMMY: Füge viele Test-Produkte hinzu für schnellere Tests
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const dummyProducts = [
        { id: 'dummy1', name: 'Bubble Waffle', price: 8.00, quantity: 2 },
        { id: 'dummy2', name: 'Belgian Waffle', price: 8.00, quantity: 1 },
        { id: 'dummy3', name: 'Softeis', price: 4.00, quantity: 3 },
        { id: 'dummy4', name: 'Schlagobers', price: 1.00, quantity: 2 },
        { id: 'dummy5', name: 'Portion Eis', price: 2.00, quantity: 1 },
        { id: 'dummy6', name: 'Obst', price: 1.00, quantity: 1 },
        { id: 'dummy7', name: 'Oreo', price: 1.00, quantity: 2 },
        { id: 'dummy8', name: 'Smarties', price: 1.00, quantity: 1 },
        { id: 'dummy9', name: 'Krokant', price: 1.00, quantity: 1 },
        { id: 'dummy10', name: 'Espresso', price: 3.00, quantity: 2 },
        { id: 'dummy11', name: 'Doppelter Espresso', price: 5.50, quantity: 1 },
        { id: 'dummy12', name: 'Cappuccino', price: 4.50, quantity: 1 },
        { id: 'dummy13', name: 'Matcha', price: 6.50, quantity: 1 },
        { id: 'dummy14', name: 'Chai', price: 6.50, quantity: 1 },
        { id: 'dummy15', name: 'Aperol', price: 6.50, quantity: 1 },
        { id: 'dummy16', name: 'Limoncello', price: 6.50, quantity: 1 },
        { id: 'dummy17', name: 'Hugo', price: 6.50, quantity: 1 },
        { id: 'dummy18', name: 'Frizzante', price: 5.00, quantity: 1 },
        { id: 'dummy19', name: 'Spritzer', price: 3.00, quantity: 1 },
        { id: 'dummy20', name: 'Glühwein', price: 8.50, quantity: 1 },
      ];

      // Entferne DUMMY: Diese Zeile auskommentieren um Dummy-Daten zu deaktivieren
      // setOrder(dummyProducts.map((p, index) => ({ ...p, orderId: `dummy_${index}` })));
    }
  }, []);

  const goBack = () => {
    setView('POS');
    setActiveCategory(null);
  };

  const addToOrder = (product: Product) => {
    if (product.isCategory) {
      setActiveCategory(product.id);
      setView('CATEGORY');
      return;
    }
    
    setOrder(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, orderId: Math.random().toString(36).substr(2, 9) }];
    });
  };

  const removeFromOrder = (orderId: string) => {
    setOrder(prev => prev.filter(item => item.orderId !== orderId));
  };

  const updateQuantity = (orderId: string, delta: number) => {
    setOrder(prev => prev.map(item => {
      if (item.orderId === orderId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const clearOrder = () => {
    setOrder([]);
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
    <div className="flex h-screen w-full bg-slate-100 font-sans text-slate-900 overflow-hidden select-none">
      
      {isMobilePortrait ? (
        // Mobile Portrait: Split Layout - Top: Products, Bottom: Order
        <div className="flex flex-col w-full h-full">
          {/* Top Section: Product Grid */}
          <div className={`flex flex-col min-w-0 border-b border-slate-200 transition-all duration-300 ${
            isProductsMinimized ? 'h-16' : 'flex-1'
          }`}>
            {/* Product Header */}
            <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 shadow-sm z-10">
              <div className="flex items-center gap-2">
                {view !== 'POS' && (
                  <button 
                    onClick={goBack}
                    className="p-2 bg-black text-white rounded-lg transition-all hover:bg-slate-800 shadow-lg"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                )}
                <h1 className="text-lg font-black tracking-tighter uppercase flex items-center gap-2">
                  {view === 'HOME' ? 'Administration' : view === 'CATEGORY' ? activeCategory?.replace('cat_', '').toUpperCase() : 'FoodTruck POS'}
                  <span className="text-[10px] font-normal text-slate-400 tracking-normal">v1.0.2</span>
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsProductsMinimized(!isProductsMinimized)}
                  className="p-2 bg-black text-white rounded-lg transition-all hover:bg-slate-800 shadow-lg"
                >
                  {isProductsMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setView(view === 'HOME' ? 'POS' : 'HOME')}
                  className={`p-2 rounded-lg transition-all flex items-center gap-1 font-bold uppercase text-xs tracking-widest ${
                    view === 'HOME' ? 'bg-orange-500 text-white shadow-lg' : 'bg-black text-white hover:bg-slate-800 shadow-lg'
                  }`}
                >
                  <Home className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Product Content */}
            {!isProductsMinimized && (
              <div className="flex-1 p-2 overflow-hidden relative">
                {view === 'HOME' ? (
                  <div className="grid grid-cols-2 gap-2 h-full">
                    {[
                      { icon: BarChart3, label: 'Umsatz', color: 'bg-blue-500' },
                      { icon: ClipboardList, label: 'Abschluss', color: 'bg-green-500' },
                      { icon: History, label: 'Journal', color: 'bg-purple-500' },
                      { icon: Settings, label: 'Einstellungen', color: 'bg-slate-500' },
                    ].map((item, idx) => (
                      <motion.button
                        key={idx}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col items-center justify-center bg-white rounded-xl shadow-sm border border-slate-200 hover:border-slate-400 transition-all p-3"
                      >
                        <div className={`w-8 h-8 ${item.color} text-white rounded-lg flex items-center justify-center mb-2 shadow`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="font-black uppercase text-xs tracking-wider text-slate-700">{item.label}</span>
                      </motion.button>
                    ))}
                  </div>
                ) : view === 'CATEGORY' && activeCategory ? (
                  <CategoryMenu 
                    categoryId={activeCategory} 
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
          <div className={`flex flex-col bg-white border-t border-slate-200 transition-all duration-300 ${
            isOrderMinimized ? 'h-16' : 'flex-1'
          }`}>
            {/* Order Header */}
            <div className="h-16 bg-white border-t border-slate-200 flex items-center justify-between px-4 shadow-sm flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-[10px] font-black">
                  {order.reduce((a, b) => a + b.quantity, 0)} POS
                </div>
                <h2 className="text-lg font-black tracking-tighter uppercase">Bestellung</h2>
              </div>
              <button 
                onClick={() => setIsOrderMinimized(!isOrderMinimized)}
                className="p-2 bg-black text-white rounded-lg transition-all hover:bg-slate-800 shadow-lg"
              >
                {isOrderMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
            </div>
            
            {/* Order Content */}
            {!isOrderMinimized && (
              <div className="flex-1 flex flex-col min-h-0">
                <Sidebar 
                  order={order}
                  total={total}
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
        <div className="flex flex-1">
          {/* Left Side: Product Grid / Admin View */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Top Bar */}
            <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-10">
              <div className="flex items-center gap-4">
                {view !== 'POS' && (
                  <button 
                    onClick={goBack}
                    className="p-3 bg-black text-white rounded-xl transition-all hover:bg-slate-800 shadow-lg"
                  >
                    <ArrowLeft className="w-7 h-7" />
                  </button>
                )}
                <h1 className="text-xl font-black tracking-tighter uppercase flex items-center gap-2">
                  {view === 'HOME' ? 'Administration' : view === 'CATEGORY' ? activeCategory?.replace('cat_', '').toUpperCase() : 'FoodTruck POS'}
                  <span className="text-[10px] font-normal text-slate-400 tracking-normal">v1.0.2</span>
                </h1>
              </div>
              <button 
                onClick={() => setView(view === 'HOME' ? 'POS' : 'HOME')}
                className={`p-3 rounded-xl transition-all flex items-center gap-2 font-bold uppercase text-xs tracking-widest ${
                  view === 'HOME' ? 'bg-orange-500 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Home className="w-5 h-5" /> {view === 'HOME' ? 'Zurück' : 'Home'}
              </button>
            </div>

            <div className="flex-1 p-4 overflow-hidden relative">
              {view === 'HOME' ? (
                <div className="grid grid-cols-3 gap-4 h-full">
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
                      className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-slate-400 transition-all p-6"
                    >
                      <div className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                        <item.icon className="w-8 h-8" />
                      </div>
                      <span className="font-black uppercase text-sm tracking-widest text-slate-700">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              ) : view === 'CATEGORY' && activeCategory ? (
                <CategoryMenu 
                  categoryId={activeCategory} 
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
