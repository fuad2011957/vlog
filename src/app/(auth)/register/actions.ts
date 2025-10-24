"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function saveUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const avatar = formData.get("avatar") as string | null;

  if (!name || !email || !password) {
    throw new Error("Не все поля заполнены");
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password,
      avatar: avatar || "/profile1.png",
    },
  });

  console.log("✅ Пользователь добавлен:", name);
}
