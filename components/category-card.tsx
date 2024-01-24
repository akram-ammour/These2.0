"use client"
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";

// import getBase64, { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/utils";

type Props = {
  category: Category;
};

const CategoryCard = ({ category }: Props) => {
    const slug = slugify(category.category)
  return (
    <Link href={`/categories/${slug}`}>
      <Card className="bg-transparent border-none hover:border hover:bg-blue-600/10 transition-colors duration-300">
        <CardContent className="p-2">
          <AspectRatio ratio={4/ 3} className="bg-muted rounded-md">
            <Image
              src={category.image!}
              alt={category.category}
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </CardContent>
        <CardFooter>
            <h1 className="text-base font-medium">{category.category}</h1>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CategoryCard;
