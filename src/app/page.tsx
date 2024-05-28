"use client";
import useUserQuery from "@/hooks/usePosts";

export default function Home() {
  const { data: userData, isError, isLoading, error, isSuccess } = useUserQuery();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>Application running</h1>
      {userData?.map((data) => (
        <h2 key={data.id}>{data.title}</h2>
      ))}
    </main>
  );
}
