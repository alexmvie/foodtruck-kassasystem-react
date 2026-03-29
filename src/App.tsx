import { useState, useMemo } from 'react';
import { 
  Home,
  ArrowLeft,
  BarChart3,
  ClipboardList,
  History,
  Settings,
  FileText,
  LogOut
} from 'lucide-react';
import { motion } from 'motion/react';
import { Product, OrderItem, ViewState } from './types';
import { Sidebar } from './components/Sidebar';
import { ProductGrid } from './components/ProductGrid';
import { CategoryMenu } from './components/CategoryMenu';
import { PaymentModal } from './components/PaymentModal';

export default function App() {
  const [view, setView] = useState<ViewState>('POS');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentResult, setPaymentResult] = useState<string | null>(null);

  const total = useMemo(() => {
    return order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [order]);

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
            <h1 className="text-xl font-black tracking-tighter uppercase">
              {view === 'HOME' ? 'Administration' : view === 'CATEGORY' ? activeCategory?.replace('cat_', '').toUpperCase() : 'FoodTruck POS'}
            </h1>
          </div>
          <button 
            onClick={() => setView(view === 'HOME' ? 'POS' : 'HOME')}
            className={`p-3 rounded-xl transition-all flex items-center gap-2 font-bold uppercase text-xs tracking-widest ${view === 'HOME' ? 'bg-orange-500 text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
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
