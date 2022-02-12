import { useRouter } from "next/router";
import React from "react";
import data from "../../utils/data";

function ProductScren() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}

export default ProductScren;
