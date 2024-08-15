import FundComponent from "@/components/FundComponent";
import Header from "@/components/Header";
import SmallHeader from "@/components/SmallHeader";
import TableComponent from "@/components/Table";
import WarningHeader from "@/components/WarningHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Header />
     <SmallHeader />
     <FundComponent />
     <WarningHeader />
     <TableComponent />
    </div>
  );
}
