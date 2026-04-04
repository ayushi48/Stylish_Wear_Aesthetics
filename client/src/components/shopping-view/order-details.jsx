// import { useSelector } from "react-redux";
// import { Badge } from "../ui/badge";
// import { DialogContent } from "../ui/dialog";
// import { Label } from "../ui/label";
// import { Separator } from "../ui/separator";

// function ShoppingOrderDetailsView({ orderDetails }) {
//   const { user } = useSelector((state) => state.auth);

//   return (
//     <DialogContent className="sm:max-w-[600px]">
//       <div className="grid gap-6">
//         <div className="grid gap-2">
//           <div className="flex mt-6 items-center justify-between">
//             <p className="font-medium">Order ID</p>
//             <Label>{orderDetails?._id}</Label>
//           </div>
//           <div className="flex mt-2 items-center justify-between">
//             <p className="font-medium">Order Date</p>
//             <Label>{orderDetails?.orderDate.split("T")[0]}</Label>
//           </div>
//           <div className="flex mt-2 items-center justify-between">
//             <p className="font-medium">Order Price</p>
//             <Label>${orderDetails?.totalAmount}</Label>
//           </div>
//           <div className="flex mt-2 items-center justify-between">
//             <p className="font-medium">Payment method</p>
//             <Label>{orderDetails?.paymentMethod}</Label>
//           </div>
//           <div className="flex mt-2 items-center justify-between">
//             <p className="font-medium">Payment Status</p>
//             <Label>{orderDetails?.paymentStatus}</Label>
//           </div>
//           <div className="flex mt-2 items-center justify-between">
//             <p className="font-medium">Order Status</p>
//             <Label>
//               <Badge
//                 className={`py-1 px-3 ${
//                   orderDetails?.orderStatus === "confirmed"
//                     ? "bg-green-500"
//                     : orderDetails?.orderStatus === "rejected"
//                     ? "bg-red-600"
//                     : "bg-black"
//                 }`}
//               >
//                 {orderDetails?.orderStatus}
//               </Badge>
//             </Label>
//           </div>
//         </div>
//         <Separator />
//         <div className="grid gap-4">
//           <div className="grid gap-2">
//             <div className="font-medium">Order Details</div>
//             <ul className="grid gap-3">
//               {orderDetails?.cartItems && orderDetails?.cartItems.length > 0
//                 ? orderDetails?.cartItems.map((item) => (
//                     <li className="flex items-center justify-between">
//                       <span>Title: {item.title}</span>
//                       <span>Quantity: {item.quantity}</span>
//                       <span>Price: ${item.price}</span>
//                     </li>
//                   ))
//                 : null}
//             </ul>
//           </div>
//         </div>
//         <div className="grid gap-4">
//           <div className="grid gap-2">
//             <div className="font-medium">Shipping Info</div>
//             <div className="grid gap-0.5 text-muted-foreground">
//               <span>{user.userName}</span>
//               <span>{orderDetails?.addressInfo?.address}</span>
//               <span>{orderDetails?.addressInfo?.city}</span>
//               <span>{orderDetails?.addressInfo?.pincode}</span>
//               <span>{orderDetails?.addressInfo?.phone}</span>
//               <span>{orderDetails?.addressInfo?.notes}</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </DialogContent>
//   );
// }

// export default ShoppingOrderDetailsView;


import { useSelector } from "react-redux";
import { Badge } from "../ui/badge";
import { DialogContent } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { Package, CreditCard, MapPin, CalendarDays, Hash } from "lucide-react";

const statusStyles = {
  confirmed: "bg-green-500 hover:bg-green-600",
  rejected: "bg-red-500 hover:bg-red-600",
  delivered: "bg-blue-500 hover:bg-blue-600",
  pending: "bg-yellow-500 hover:bg-yellow-600",
};

function ShoppingOrderDetailsView({ orderDetails }) {
  const { user } = useSelector((state) => state.auth);

  const statusClass =
    statusStyles[orderDetails?.orderStatus] ?? "bg-gray-500 hover:bg-gray-600";

  return (
    <DialogContent className="sm:max-w-[580px] p-0 overflow-hidden rounded-2xl">
      {/* Header */}
      <div className="px-6 py-5 border-b bg-muted/30">
        <h2 className="text-lg font-bold">Order Details</h2>
        <p className="text-xs text-muted-foreground mt-0.5 font-mono break-all">
          #{orderDetails?._id}
        </p>
      </div>

      <div className="px-6 py-5 space-y-6 max-h-[75vh] overflow-y-auto">
        {/* Order Meta */}
        <div className="grid gap-3">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <CalendarDays className="w-4 h-4" /> Order Date
            </span>
            <span className="font-medium">
              {orderDetails?.orderDate?.split("T")[0]}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Hash className="w-4 h-4" /> Total Amount
            </span>
            <span className="font-bold text-primary">
              ${orderDetails?.totalAmount?.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="w-4 h-4" /> Payment Method
            </span>
            <span className="font-medium capitalize">
              {orderDetails?.paymentMethod}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="w-4 h-4" /> Payment Status
            </span>
            <span className="font-medium capitalize">
              {orderDetails?.paymentStatus}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Package className="w-4 h-4" /> Order Status
            </span>
            <Badge className={`text-xs px-3 py-1 rounded-full capitalize ${statusClass}`}>
              {orderDetails?.orderStatus}
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Order Items */}
        <div className="space-y-3">
          <p className="text-sm font-semibold">Items Ordered</p>
          <div className="space-y-2">
            {orderDetails?.cartItems?.length > 0 ? (
              orderDetails.cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-sm bg-muted/40 rounded-xl px-4 py-3"
                >
                  <span className="font-medium truncate max-w-[180px]">
                    {item.title}
                  </span>
                  <span className="text-muted-foreground">
                    x{item.quantity}
                  </span>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground italic">
                No items found
              </p>
            )}
          </div>
        </div>

        <Separator />

        {/* Shipping Info */}
        <div className="space-y-3">
          <p className="text-sm font-semibold flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Shipping Info
          </p>
          <div className="text-sm text-muted-foreground space-y-1 bg-muted/40 rounded-xl px-4 py-3">
            <p className="font-medium text-foreground">{user?.userName}</p>
            <p>{orderDetails?.addressInfo?.address}</p>
            <p>
              {orderDetails?.addressInfo?.city},{" "}
              {orderDetails?.addressInfo?.pincode}
            </p>
            <p>{orderDetails?.addressInfo?.phone}</p>
            {orderDetails?.addressInfo?.notes && (
              <p className="italic opacity-70">
                {orderDetails?.addressInfo?.notes}
              </p>
            )}
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

export default ShoppingOrderDetailsView;