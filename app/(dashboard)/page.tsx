import { UserButton } from "@clerk/nextjs";

export default function Home() {

  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to your new Clerk app!</h1>
      <UserButton />
    </div>
  );
}