"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function authenticateUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Не все поля заполнены");
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("Пользователь с таким email не найден");
    }

    if (user.password !== password) {
      throw new Error("Неверный пароль");
    }

    console.log("✅ Пользователь авторизован:", user.name);
    return { success: true, user };
  } catch (error) {
    console.error("❌ Ошибка авторизации:", error);
    throw error;
  }
}
