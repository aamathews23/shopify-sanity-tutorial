import {Link, useLoaderData, type LoaderFunctionArgs} from 'react-router';
import {type Product} from '@shopify/hydrogen/storefront-api-types';

export async function loader({
  params,
  context: {storefront},
}: LoaderFunctionArgs) {
  const {product} = await storefront.query<{product: Product}>(
    `#graphql
      query Product($handle: String!) {
        product(handle: $handle) { id title }
      }
    `,
    {variables: params},
  );

  return {product};
}

export default function Product() {
  const {product} = useLoaderData<typeof loader>();

  return (
    <div className="mx-auto p-12">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <Link className="text-blue-500" to="/collections/all">
        &larr; Back to All Products
      </Link>
    </div>
  );
}