import { PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/navigation";
// CUSTOM DEFINED HOOK
import useAuth from "hooks/useAuth";

export default function GuestGuard({ children }: PropsWithChildren) {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) router.replace("/dashboard");
  }, [isAuthenticated]);

  return <>{children}</>;
}
