import { motion, AnimatePresence } from 'motion/react';
import { X, Banknote, CreditCard, Receipt, FileText, RotateCcw, ClipboardList } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  total: number;
  paymentResult: string | null;
  onClose: () => void;
  onPaymentOption: (option: string) => void;
}

export const PaymentModal = ({ 
  isOpen, 
  total, 
  paymentResult, 
  onClose, 
  onPaymentOption 
}: PaymentModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-[2.5rem] p-8 max-w-2xl w-full shadow-2xl relative overflow-hidden"
          >
            {paymentResult ? (
              <div className="py-12 text-center">
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <ClipboardList className="w-12 h-12" />
                </motion.div>
                <h3 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">Aktion: {paymentResult}</h3>
                <p className="text-slate-500 text-lg">Wird verarbeitet...</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Zahlungsart wählen</h3>
                    <p className="text-slate-500 font-bold">Gesamtbetrag: {total.toFixed(2)} €</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="p-3 bg-slate-100 hover:bg-red-100 hover:text-red-500 rounded-2xl transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => onPaymentOption('CASH')}
                    className="flex flex-col items-center justify-center p-8 bg-green-50 border-2 border-green-100 rounded-3xl hover:border-green-500 transition-all group"
                  >
                    <Banknote className="w-16 h-16 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                    <span className="font-black text-xl uppercase tracking-widest text-green-900">Bargeld</span>
                  </button>
                  
                  <button 
                    onClick={() => onPaymentOption('KARTE')}
                    className="flex flex-col items-center justify-center p-8 bg-blue-50 border-2 border-blue-100 rounded-3xl hover:border-blue-500 transition-all group"
                  >
                    <CreditCard className="w-16 h-16 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                    <span className="font-black text-xl uppercase tracking-widest text-blue-900">Karte</span>
                  </button>

                  <div className="col-span-2 grid grid-cols-3 gap-4 mt-4">
                    <button 
                      onClick={() => onPaymentOption('RECHNUNG')}
                      className="flex flex-col items-center justify-center p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl hover:border-slate-400 transition-all"
                    >
                      <Receipt className="w-8 h-8 text-slate-600 mb-2" />
                      <span className="font-black text-[10px] uppercase tracking-widest text-slate-700">Rechnung</span>
                    </button>
                    <button 
                      onClick={() => onPaymentOption('KOPIE')}
                      className="flex flex-col items-center justify-center p-6 bg-slate-50 border-2 border-slate-100 rounded-2xl hover:border-slate-400 transition-all"
                    >
                      <FileText className="w-8 h-8 text-slate-600 mb-2" />
                      <span className="font-black text-[10px] uppercase tracking-widest text-slate-700">Kopie</span>
                    </button>
                    <button 
                      onClick={() => onPaymentOption('STORNO')}
                      className="flex flex-col items-center justify-center p-6 bg-red-50 border-2 border-red-100 rounded-2xl hover:border-red-500 transition-all"
                    >
                      <RotateCcw className="w-8 h-8 text-red-600 mb-2" />
                      <span className="font-black text-[10px] uppercase tracking-widest text-red-700">Storno</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
