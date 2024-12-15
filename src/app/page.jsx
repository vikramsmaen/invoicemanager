import Image from "next/image";
import CreateInvoice from "@/components/invoice/CreateInvoice";
import ListInvoice from "@/components/invoice/ListInvoice";

export default function Home() {
  return (
    <>
      <div className="flex justify-center mt-10 ">
        <div className="flex  items-center justify-between w-[1000px] py-4 border-b-[1px]">
          <h1 className="text-3xl font-bold">Invoice manager</h1>
          <div className="">
            <CreateInvoice />
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex justify-center">
        <ListInvoice />
      </div>
      <div className="h-[500px]"></div>
    </>
  );
}
