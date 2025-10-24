
import { HomePage } from "@/components/sections/Home"
import { Valak } from "@/components/sections/Valak"



export default function Home() {

   return (
      <main className={` min-h-screen flex`}>
         <Valak />
         <HomePage />
      </main>
   )
}
