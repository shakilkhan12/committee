import Header from "@/components/Header";
import SmallHeader from "@/components/SmallHeader";
import TableComponent from "@/components/Table";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Header />
     <SmallHeader />
     <TableComponent />
    </div>
  );
}
