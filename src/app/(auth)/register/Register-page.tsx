"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/header/header";
import { saveUser } from "./actions"; 

const RegisterPage = () => {
  const [avatarUrl, setAvatarUrl] = useState("/profile1.png");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (formData: FormData) => {
    if (password !== confirm) {
      alert("Пароли не совпадают!");
      return;
    }

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatarUrl);

    try {
      await saveUser(formData);
      alert("✅ Успешно сохранено!");
    } catch (err) {
      alert("❌ Ошибка при сохранении");
      console.error(err);
    }
  };

  useEffect(() => {
    return () => {
      if (avatarUrl.startsWith("blob:")) URL.revokeObjectURL(avatarUrl);
    };
  }, [avatarUrl]);

  return (
    <section className="flex flex-col w-full bg-[#181818] min-h-screen">
      <Header className="mb-100px" />
      <div className="noviy flex flex-col text-center">
        <h1 className="text-4xl text-white">Профиль</h1>
        <div className="flex justify-around items-center mt-8">
          <form
            action={handleSubmit}
            className="flex flex-col gap-[20px] w-full max-w-[400px]"
          >
            <input
              placeholder="Александр Провостин"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-[14px] text-white placeholder:text-[#828282] border-b border-b-[#3f3f3f]"
              type="text"
              name="name"
            />
            <input
              placeholder="alex.provo@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-[14px] text-white placeholder:text-[#828282] border-b border-b-[#3f3f3f]"
              type="email"
              name="email"
            />
            <input
              className="text-[14px] text-white placeholder:text-[#828282] border-b border-b-[#3f3f3f]"
              type="password"
              placeholder="Новый пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
            <input
              className="text-[14px] text-white placeholder:text-[#828282] border-b border-b-[#3f3f3f]"
              type="password"
              placeholder="Подтвердите пароль"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              name="confirm"
            />
            <button
              type="submit"
              className="text-[12px] text-white rounded-[7px] w-[90px] h-[30px] bg-[#3137C9]"
            >
              Сохранить
            </button>
          </form>

          <div>
            <img
              src={avatarUrl}
              className="rounded-[7px] w-[220px] h-[220px] object-cover"
              alt="avatar"
            />
            <input
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              type="file"
              accept="image/*"
            />
            <label
              onClick={() => fileInputRef.current?.click()}
              className="text-[14px] text-[#107EFF] mt-2 inline-block cursor-pointer"
            >
              выбрать аватар
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
