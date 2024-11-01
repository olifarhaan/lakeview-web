import React from "react";
import Header from "./_components/Header";

interface PageProps {
  searchParams: Record<string, string | string[]> | undefined;
}

export default function Page({ searchParams }: PageProps) {
  const checkInDate = searchParams?.date_in as string;
  const checkOutDate = searchParams?.date_out as string;

  return (
    <section>
      <Header checkInDate={checkInDate} checkOutDate={checkOutDate} />
    </section>
  );
}
