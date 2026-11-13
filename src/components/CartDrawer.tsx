import React from 'react';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { Product } from './ProductCatalog';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-black/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl text-botanix-forest">
                Your Ritual Cart
              </span>
              <span className="text-xs bg-botanix-green/10 text-botanix-green font-bold px-2 py-0.5 rounded-full">
                {items.reduce((acc, i) => acc + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 text-gray-500 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <p className="text-sm">Your cart is currently empty.</p>
                <button
                  onClick={onClose}
                  className="mt-4 bg-botanix-green text-white text-xs font-bold uppercase px-6 py-2.5 rounded-full"
                >
                  Explore Rituals
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-black/5 shadow-xs"
                >
                  <div
                    className={`w-16 h-16 rounded-xl ${product.bgTone} p-2 flex items-center justify-center flex-shrink-0`}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-botanix-forest truncate">
                      {product.name}
                    </h4>
                    <div className="text-xs text-gray-500 mb-2">
                      ${product.price} each
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(product.id, -1)}
                        className="w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold w-4 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, 1)}
                        className="w-6 h-6 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(product.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer / Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-black/5 bg-white space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-display font-bold text-lg text-botanix-forest">
                  ${subtotal}
                </span>
              </div>
              <p className="text-[11px] text-gray-400">
                Shipping and taxes calculated at checkout. Free 30-day returns.
              </p>
              <button
                onClick={() => alert('Proceeding to secure checkout!')}
                className="w-full bg-botanix-green hover:bg-botanix-green-dark text-white font-bold text-sm uppercase py-4 rounded-full flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

