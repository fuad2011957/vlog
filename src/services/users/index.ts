import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() // создаём объект локально, не экспортируем

interface IUser {
  fullName: string
  email: string
  password: string
  avatar?: string
}

export async function createUser(user: IUser) {
  try {
    const existedUser = await prisma.user.findUnique({
      where: { email: user.email },
    })

    if (existedUser) {
      return { success: false, message: 'Пользователь уже существует', error: 'Пользователь уже существует' }
    }

    const newUser = await prisma.user.create({
      data: {
        name: user.fullName,
        email: user.email,
        password: user.password,
        avatar: user.avatar ?? null,
      },
    })

    return { success: true, newUser, message: 'Пользователь успешно создан' }
  } catch (error: any) {
    return { success: false, message: 'Не удалось создать пользователя', error: error.message }
  }
}

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({ where: { email } })
    return { success: true, user, message: 'Пользователь успешно получен' }
  } catch (error: any) {
    return { success: false, message: 'Не удалось получить пользователя', error: error.message }
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } })
    return { success: true, user, message: 'Пользователь успешно получен' }
  } catch (error: any) {
    return { success: false, message: 'Не удалось получить пользователя', error: error.message }
  }
}

export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany()
    return { success: true, users, message: 'Пользователи успешно получены' }
  } catch (error: any) {
    return { success: false, message: 'Не удалось получить пользователей', error: error.message }
  }
}
