"use client";

import { useState } from "react";
import Header from '@/components/header/header'
import Link from 'next/link'
import { authenticateUser } from './actions'

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (formData: FormData) => {
    if (!email || !password) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    formData.append("email", email);
    formData.append("password", password);

    try {
      const result = await authenticateUser(formData);
      if (result.success) {
        alert("✅ Успешный вход!");
        
        window.location.href = "/";
      }
    } catch (err) {
      alert("❌ Ошибка входа: " + (err as Error).message);
      console.error(err);
    }
  };

  return (
    <section className='bg-[#181818] w-full min-h-screen'>
        <Header className={``} />
        <div className="ccc w-full flex items-center justify-center flex-col">
            <div className="title text-white text-5xl font-semibold">
                <h1>Вход</h1>
            </div>
            <form action={handleSubmit} className='flex flex-col gap-8 items-center'>
                <div className="inp__con flex flex-col gap-2.5 w-[300px]">
                    <input 
                        className='border-0 border-b-2 border-b-[#3F3F3F] focus:border-b-[#107EFF] transition bg-transparent text-white placeholder:text-[#828282]' 
                        placeholder='alex.provo@mail.com' 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                    />
                    <input 
                        className='border-0 border-b-2 border-b-[#3F3F3F] focus:border-b-[#107EFF] transition bg-transparent text-white placeholder:text-[#828282]' 
                        placeholder="Пароль" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                    />
                </div>
                <div className="btn text-white">
                    <button 
                        type="submit" 
                        className="peyser text-white bg-[#3137C9] px-6 py-2 rounded-[7px] hover:bg-[#2a2fb8] transition"
                    >
                        Войти
                    </button>
                </div>
                <div className="bottom text-white flex gap-3">
                    <Link href={``} className="text-[#107EFF] hover:underline">Восстановить</Link>
                    <Link href={`/register`} className="text-[#107EFF] hover:underline">Регистрация</Link>
                </div>
            </form>
        </div>
    </section>
  )
}
