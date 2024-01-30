import { getAllCategories } from "@/actions/get-all-categories";
import CategoryCardsLister from "@/components/category-cards-lister";
import Loader from "@/components/loader";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";

type Props = {};

const Page = async (props: Props) => {
  const {categories} = await getAllCategories()

  // useEffect(() => {
  //   startTransition(() => {
  //     getAllCategories()
  //       .then((response) => {
  //         if (response?.success) {
  //           setCategories([...response.data]);
  //           toast.success(response.success);
  //         } else {
  //           setError(response.error);
  //           toast.error(response.error);
  //           console.error(response.returnedError)
  //           console.log(response.returnedError)
  //         }
  //       })
  //       // this only catches the .then so i bet it's not that useful
  //       // .catch((error) => {
  //       //   console.log(`[Page/cat_error] :${error}`);
  //       //   setError("something went wrong");
  //       //   toast.error("something went wrong please try again");
  //       // });
  //   });
  // }, []);


  // if (error) {
  //   return (
  //     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
  //       <p className="text-lg min-w-40">
  //         This is an Error contact us we would like it if we received your
  //         feedback{": "}
  //         <a
  //           href={`mailto:akram.ammour.mail@gmail.com?subject=From%20these2.0&body=error from getAllCategories() with the error ${JSON.stringify(
  //             error
  //           )}`}
  //           className="font-bold underline"
  //         >
  //           Learn more
  //         </a>
  //       </p>
  //     </div>
  //   );
  // }

  return <div className="px-8 py-12">
    <CategoryCardsLister categories={categories}/>
  </div>;
};

export default Page;
