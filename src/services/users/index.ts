'use server'

// import {User}  from '@/generated/prisma'

import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()




interface IUser {
   name: string
   fullName: string
   email: string
   password: string
}

export async function createUser( user: IUser ) {
   try {
      const existedUser = await prisma.user.findUnique( {
         where: {
            email: user.email,
         },
      } )
      if ( existedUser ) {
         return { success: false, error: 'Пользователь уже существует', message: 'Пользователь уже существует' }
      }
      const newUser = await prisma.user.create( {
         data: user,
      } )
      return { success: true, newUser, message: 'Пользователь успешно создан' }

   } catch ( error ) {
      return { success: false, error: 'Не удалось создать пользователя', message: error.message }
   }
}
// внутри компонента RegisterPage (use client)
const handleSave = async () => {
  const payload = { fullName: 'Имя', email: 'mail@example.com', password: 'secret' }; // соберите из state/инпутов
  const res = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  console.log(data);
  if (data.success) {
    // перенаправление или сообщение
  } else {
    // показать ошибку
  }
};
export async function getUserByEmail( email: string ) {
   try {
      const user = await prisma.user.findUnique( {
         where: { email },
      } )
      return { success: true, user, message: 'Пользователь успешно получен' }
   } catch ( error ) {
      return { success: false, error: 'Не удалось получить пользователя', message: error.message }
   }
}

export async function getUserById( id: string ) {
   try {
      const user = await prisma.user.findUnique( {
         where: { id: Number(id) },
      } )
      return { success: true, user, message: 'Пользователь успешно получен' }
   } catch ( error ) {
      return { success: false, error: 'Не удалось получить пользователя', message: error.message }
   }
}


export async function getAllUser() {
   try {
      const users = await prisma.user.findMany()
      return { success: true, users, message: 'Пользователи успешно получены' }
   } catch ( error ) {
      return { success: false, error: 'Не удалось получить пользователей', message: error.message }
   }

}