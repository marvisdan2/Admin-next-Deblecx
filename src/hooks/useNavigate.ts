import { useRouter } from "next/navigation";

const useNavigate = () => {
  const router = useRouter();
  return router.push;
};

export default useNavigate;
