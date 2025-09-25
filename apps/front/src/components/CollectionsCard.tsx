import { Search, Home, User, Settings, Bell, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function CollectionsCard() {
  const icons = [
    <Search key="search" size={40} strokeWidth={1} />,
    <Home key="home" size={40} strokeWidth={1} />,
    <User key="user" size={40} strokeWidth={1} />,
    <Settings key="settings" size={40} strokeWidth={1} />,
    <Bell key="bell" size={40} strokeWidth={1} />,
    <Heart key="heart" size={40} strokeWidth={1} />,
  ];

  return (
    <div>
      <Card className="inline-block px-0 py-4.5">
        <CardContent className="grid grid-cols-3 grid-rows-2 gap-2">
          {icons.map((icon) => icon)}
        </CardContent>
      </Card>
      <p className="text-sm font-normal">Analytics</p>
      <p className="text-sm font-normal">50 icons</p>
    </div>
  );
}
