import { client } from "@/sanity/lib/client";
import ProductDetails from "@/components/ProductDetails";

interface ProductType {
  name: string;
  image: {
    _type: "image";
    asset: { _ref: string; _type: "reference" };
  };
  discountPercent: number;
  colors: string[];
  sizes: string[];
  _id: string;
  price: number;
  description: string;
}

export default async function ProductsPage({ params }: { params: { name: string } }) {
    const decodedName = decodeURIComponent(params.name);

    const product: ProductType = await client.fetch(
      `*[_type == 'products' && name == $name][0] {
        _id,
        name,
        image,
        price,
        discountPercent,
        colors,
        sizes,
        description
      }`,
      { name: decodedName }
    );
  
    if (!product) {
      return (
        <div className="w-full flex justify-center">
          <div className="w-3/6 text-center py-10">
            <h1 className="text-2xl font-medium">Product not found.</h1>
          </div>
        </div>
      );
    }
  
    return <ProductDetails product={product} />;
  }