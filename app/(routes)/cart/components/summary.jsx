import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import axios from 'axios';
import toast from 'react-hot-toast';

import Button from '@/components/ui/button';
import Currency from '@/components/ui/currency';
import useCart from '@/hooks/use-cart';

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('razorpay_payment_link_status') === 'paid') {
      toast.success('Payment Completed');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong');
      removeAll();
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item._id),
      phone: '+919900990099',
      address: 'A275, Some Random Street, Some Random State, 110001',
    });

    window.location = response.data.url;
  };

  return (
    <div className="space-y-6 lg:col-span-5">
      <div className="mt-16 rounded-lg bg-gray-50 px-4 pt-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
        <h2 className="text-lg font-medium text-gray-900">Shipping Address</h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">Name</div>
            Test User
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">Phone</div>
            +91 99009 90099
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">Address</div>
            A275, Some Random Street
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">State</div>
            Some Random State
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">Pincode</div>
            110001
          </div>
        </div>
      </div>
      <div className="mt-16 rounded-lg bg-gray-50 px-4 pt-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
        <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <div className="text-base font-medium text-gray-900">Order Total</div>
            <Currency value={totalPrice} />
          </div>
        </div>
        <Button className="w-full mt-6" onClick={onCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Summary;
