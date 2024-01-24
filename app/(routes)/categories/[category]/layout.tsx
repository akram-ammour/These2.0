import { Badge } from "@/components/ui/badge";
import { unSlugify } from "@/lib/utils";
import {ReactNode} from "react";

type Props = {
    params: {
      category: string;
    };
    children:ReactNode
  };
const Layout = ({params:{category},children}: Props) => {
  const unSlugified = unSlugify(category);

  return (
    <div className="px-8 py-5">
      <div className="flex  gap-2 text-lg">
        <p className="font-medium text-muted-foreground">Category:</p>
        <Badge className="bg-blue-600 text-white font-bold rounded-2xl shadow-md">
          {unSlugified}
        </Badge>
      </div>
      {children}
    </div>
  );
};

export default Layout;
