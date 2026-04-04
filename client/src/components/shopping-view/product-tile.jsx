// import { Card, CardContent, CardFooter } from "../ui/card";
// import { Button } from "../ui/button";
// import { brandOptionsMap, categoryOptionsMap } from "@/config";
// import { Badge } from "../ui/badge";

// function ShoppingProductTile({
//   product,
//   handleGetProductDetails,
//   handleAddtoCart,
// }) {
//   return (
//     <Card className="w-full max-w-sm mx-auto">
//       <div onClick={() => handleGetProductDetails(product?._id)}>
//         <div className="relative">
//           <img
//             src={product?.image}
//             alt={product?.title}
//             className="w-full h-[300px] object-cover rounded-t-lg"
//           />
//           {product?.totalStock === 0 ? (
//             <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
//               Out Of Stock
//             </Badge>
//           ) : product?.totalStock < 10 ? (
//             <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
//               {`Only ${product?.totalStock} items left`}
//             </Badge>
//           ) : product?.salePrice > 0 ? (
//             <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
//               Sale
//             </Badge>
//           ) : null}
//         </div>
//         <CardContent className="p-4">
//           <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
//           <div className="flex justify-between items-center mb-2">
//             <span className="text-[16px] text-muted-foreground">
//               {categoryOptionsMap[product?.category]}
//             </span>
//             <span className="text-[16px] text-muted-foreground">
//               {brandOptionsMap[product?.brand]}
//             </span>
//           </div>
//           <div className="flex justify-between items-center mb-2">
//             <span
//               className={`${
//                 product?.salePrice > 0 ? "line-through" : ""
//               } text-lg font-semibold text-primary`}
//             >
//               ${product?.price}
//             </span>
//             {product?.salePrice > 0 ? (
//               <span className="text-lg font-semibold text-primary">
//                 ${product?.salePrice}
//               </span>
//             ) : null}
//           </div>
//         </CardContent>
//       </div>
//       <CardFooter>
//         {product?.totalStock === 0 ? (
//           <Button className="w-full opacity-60 cursor-not-allowed">
//             Out Of Stock
//           </Button>
//         ) : (
//           <Button
//             onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
//             className="w-full"
//           >
//             Add to cart
//           </Button>
//         )}
//       </CardFooter>
//     </Card>
//   );
// }

// export default ShoppingProductTile;
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { brandOptionsMap, categoryOptionsMap } from "@/config";
import { Badge } from "../ui/badge";
import { ShoppingCart } from "lucide-react";

function ShoppingProductTile({ product, handleGetProductDetails, handleAddtoCart }) {
  const isOutOfStock = product?.totalStock === 0;
  const isLowStock = product?.totalStock > 0 && product?.totalStock < 10;
  const hasSalePrice = product?.salePrice > 0;

  const badgeLabel = isOutOfStock
    ? "Out of Stock"
    : isLowStock
    ? `Only ${product?.totalStock} left`
    : hasSalePrice
    ? "Sale"
    : null;

  const badgeColor = isOutOfStock || isLowStock
    ? "bg-red-500 hover:bg-red-600"
    : "bg-primary hover:bg-primary/90";

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl border shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">

      {/* ── Image ── */}
      <div
        className="relative cursor-pointer group overflow-hidden"
        onClick={() => handleGetProductDetails(product?._id)}
      >
        <img
          src={product?.image}
          alt={product?.title}
          className="w-full h-[260px] object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

        {/* Badge */}
        {badgeLabel && (
          <Badge className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full shadow ${badgeColor}`}>
            {badgeLabel}
          </Badge>
        )}
      </div>

      {/* ── Content ── */}
      <CardContent
        className="p-4 flex-1 cursor-pointer space-y-2"
        onClick={() => handleGetProductDetails(product?._id)}
      >
        {/* Title */}
        <h2 className="text-base font-bold leading-snug line-clamp-2 text-foreground">
          {product?.title}
        </h2>

        {/* Category & Brand */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{categoryOptionsMap[product?.category]}</span>
          <span className="font-medium">{brandOptionsMap[product?.brand]}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 pt-1">
          <span
            className={`text-lg font-bold ${
              hasSalePrice ? "line-through text-muted-foreground text-sm font-normal" : "text-primary"
            }`}
          >
            ${product?.price}
          </span>
          {hasSalePrice && (
            <span className="text-lg font-bold text-primary">
              ${product?.salePrice}
            </span>
          )}
        </div>
      </CardContent>

      {/* ── Footer ── */}
      <CardFooter className="p-4 pt-0">
        {isOutOfStock ? (
          <Button className="w-full" disabled variant="secondary">
            Out of Stock
          </Button>
        ) : (
          <Button
            className="w-full gap-2 font-semibold"
            onClick={() => handleAddtoCart(product?._id, product?.totalStock)}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ShoppingProductTile;