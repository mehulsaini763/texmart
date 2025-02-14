import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Gallery from '@/components/gallery';
import Info from '@/components/info';
import Conatiner from '@/components/ui/container';
import ProductList from '@/components/ui/product-list';

const ProductPage = async ({ params }) => {
  const product = (await getProduct(params.productId)).data;
  const suggestedProducts = (
    await getProducts({
      categoryId: product?.categoryId._id,
    })
  ).data;
  return (
    <div className="bg-white">
      <Conatiner>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product?.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Conatiner>
    </div>
  );
};

export default ProductPage;
