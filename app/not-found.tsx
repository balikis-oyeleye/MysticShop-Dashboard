"use client";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-[80svh] flex-col gap-3">
      <h1 className="text-7xl font-bold">404</h1>
      <p>We {"couldn't"} find that page</p>
      <Link href="/" className="px-4 bg-gray py-2 text-white rounded-md">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
