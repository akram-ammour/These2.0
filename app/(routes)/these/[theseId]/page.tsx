import { getLocalData } from "@/actions/load-data";
import TheseCard from "@/components/these-card";
import { Separator } from "@/components/ui/separator";
import { formatTitle } from "@/lib/utils";
import { redirect } from "next/navigation";

type Props = {
  params: {
    theseId: string;
  };
};

const Page = async ({ params: { theseId } }: Props) => {
  const isMatch = theseId.match(/^these(\d+)-(\d+)$/);

  if (!isMatch) {
    return redirect("/");
  }

  const { data } = await getLocalData();
  const found = data.find((item) => item.href.includes(theseId));
  if (!found) {
    return <p>these not found</p>;
  }
  return (
    <div className="h-full  py-12 px-32 ">
      <div className="space-y-4">
        <p className="font-semibold text-3xl text-neutral-800">
          {"Dr. " + formatTitle(found.author)}
        </p>
        <Separator />
        <TheseCard these={found} />
        {/* <embed src={"/api/get-pdf?url=http://wd.fmpm.uca.ma/biblio/theses/annee-htm/FT/2010/these44-10.pdf"} type="" /> */}
      </div>
    </div>
  );
};

export default Page;
