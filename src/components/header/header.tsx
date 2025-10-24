"use client"

import { ChevronDownIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Header = ( { className } ) => {
   const router = useRouter()
   const [ searchQuery, setSearchQuery ] = useState( "" )



   const handleSearch = ( e ) => {
      if ( e.key === "Enter" && searchQuery.trim() ) {
         const query = searchQuery.trim()
         if ( query.toLowerCase() === "создание сайта" ) {
            router.push( `/search-result?q=${encodeURIComponent( query )}` )
         } else {
            router.push(
               `/search-result?q=${encodeURIComponent( query )}&notfound=true`,
            )
         }
      }
   }
   return (
      <header className={className}>
         <nav>
            <ul>
               <Link className="" href={`/`}>
                  <li>Главная</li>
               </Link>
               <li className="relative">
                  <Link
                     className="flex items-end gap-2 justify-center text-center"
                     href="#"
                  >
                     Статьи <ChevronDownIcon className="size-7 arrow_1" />
                  </Link>
                  <div className="dropdown">
                     <ul className="dropdown-list">
                        <li>
                           <a href="/search-result">Создание сайтов</a>
                        </li>
                        <li>
                           <a href="/internet-marketing">Интернет-маркетинг</a>
                        </li>
                        <li>
                           <a href="/video-promotion">Продвижение видео</a>
                        </li>
                     </ul>
                  </div>
               </li>
               <li>
                  <Link href="#">Обо мне</Link>
               </li>
               <li>
                  <Link href="#">Реклама</Link>
               </li>
            </ul>
         </nav>
         <div className="search-bar">
            <ul>
               
                  <Link href="/login">
                     <li>
                     Профиль
                     </li>
                  </Link>
               
            </ul>
            <input
               type="text"
               name="search"
               id="search"
               placeholder="Поиск по блогу"
               value={searchQuery}
               onChange={( e ) => setSearchQuery( e.target.value )}
               onKeyPress={handleSearch}
            />
         </div>
      </header>
   )
}

export default Header
