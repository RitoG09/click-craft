import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <Image src="/404.svg" width={500} height={500} alt="404" />
      <Link href="/">
        <Button className="bg-indigo-500 cursor-pointer">Return Home</Button>
      </Link>
    </div>
  );
}
