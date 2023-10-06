import { useAuth } from "@clerk/nextjs";

export default async function getSeller() {
  const { userId } = useAuth();
  return userId;
}
