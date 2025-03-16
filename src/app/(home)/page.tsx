import { Button } from "@/components/ui/button"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      <Image src="/logo.svg" height={50} width={50} alt="Logo" />
      <p className="text-xl font-semibold tracking-tight">Dolviu</p>
    </div>
  )
}

export default Home