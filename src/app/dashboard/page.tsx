import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { Map } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* map */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-center rounded-md w-full h-[500px] border border-black border-dashed text-9xl shadow-sm">
          This is a map
        </div>
        <div className="flex py-4 flex-row-reverse">
          <Button variant={"default"}> Insert New Area </Button>
        </div>
        <div>
          <h1 className="font-bold text-3xl">This is a list of areas</h1>
          <div className="w-full h-64 bg-slate-300 rounded-md p-4">
            <Link href={"/dashboard/1"}>
              <Button variant={"secondary"}>
                An Item of Area
                <Map />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
