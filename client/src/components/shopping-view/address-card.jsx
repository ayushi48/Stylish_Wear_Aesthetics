// import { Button } from "../ui/button";
// import { Card, CardContent, CardFooter } from "../ui/card";
// import { Label } from "../ui/label";

// function AddressCard({
//   addressInfo,
//   handleDeleteAddress,
//   handleEditAddress,
//   setCurrentSelectedAddress,
//   selectedId,
// }) {
//   return (
//     <Card
//       onClick={
//         setCurrentSelectedAddress
//           ? () => setCurrentSelectedAddress(addressInfo)
//           : null
//       }
//       className={`cursor-pointer border-red-700 ${
//         selectedId?._id === addressInfo?._id
//           ? "border-red-900 border-[4px]"
//           : "border-black"
//       }`}
//     >
//       <CardContent className="grid p-4 gap-4">
//         <Label>Address: {addressInfo?.address}</Label>
//         <Label>City: {addressInfo?.city}</Label>
//         <Label>pincode: {addressInfo?.pincode}</Label>
//         <Label>Phone: {addressInfo?.phone}</Label>
//         <Label>Notes: {addressInfo?.notes}</Label>
//       </CardContent>
//       <CardFooter className="p-3 flex justify-between">
//         <Button onClick={() => handleEditAddress(addressInfo)}>Edit</Button>
//         <Button onClick={() => handleDeleteAddress(addressInfo)}>Delete</Button>
//       </CardFooter>
//     </Card>
//   );
// }

// export default AddressCard;

import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { MapPin, Building2, Hash, Phone, FileText, CheckCircle2 } from "lucide-react";

function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  const isSelected = selectedId?._id === addressInfo?._id;

  return (
    <Card
      onClick={
        setCurrentSelectedAddress
          ? () => setCurrentSelectedAddress(addressInfo)
          : null
      }
      className={`relative cursor-pointer transition-all duration-200 rounded-2xl overflow-hidden
        ${setCurrentSelectedAddress ? "cursor-pointer" : "cursor-default"}
        ${
          isSelected
            ? "border-2 border-primary shadow-md bg-primary/5"
            : "border border-muted hover:border-primary/40 hover:shadow-sm"
        }`}
    >
      {/* Selected checkmark */}
      {isSelected && (
        <div className="absolute top-3 right-3 text-primary">
          <CheckCircle2 className="w-5 h-5" />
        </div>
      )}

      <CardContent className="p-4 space-y-2.5">
        <div className="flex items-start gap-2.5">
          <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />
          <span className="text-sm font-medium leading-snug">{addressInfo?.address}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Building2 className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-sm text-muted-foreground">{addressInfo?.city}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Hash className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-sm text-muted-foreground">{addressInfo?.pincode}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-sm text-muted-foreground">{addressInfo?.phone}</span>
        </div>
        {addressInfo?.notes && (
          <div className="flex items-start gap-2.5">
            <FileText className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />
            <span className="text-sm text-muted-foreground italic">{addressInfo?.notes}</span>
          </div>
        )}
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-0 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={(e) => {
            e.stopPropagation();
            handleEditAddress(addressInfo);
          }}
        >
          Edit
        </Button>
        <Button
          variant="destructive"
          size="sm"
          className="flex-1"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteAddress(addressInfo);
          }}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

export default AddressCard;