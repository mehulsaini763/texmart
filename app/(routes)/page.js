import getBillboard from '@/actions/get-billboard';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import Conatiner from '@/components/ui/container';
import ProductList from '@/components/ui/product-list';

export const revalidate = 0;

const HomePage = async () => {
  const billboards = (await getBillboard('671d4cd63daeaa5e3c569e31')).data;
  const products = (await getProducts({ isFeatured: true })).data;
  return (
    <Conatiner>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Conatiner>
  );
};

export default HomePage;
