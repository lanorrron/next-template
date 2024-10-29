'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {useAuth} from "@/hooks/useAuth";

export default function Home() {
  const router = useRouter();
  const {isAuthenticated} = useAuth()
  console.log(isAuthenticated)

  useEffect(() => {
    // Redirige automáticamente a /dashboard cuando se cargue la página
    if(isAuthenticated)
    router.replace('/dashboard');
    else
      router.replace('/login')
  }, [router]);

  return null; // Retorna null o un fragmento vacío, ya que no necesitas renderizar nada
}
