import { Camera, SendHorizonal } from "lucide-react"


const Inputik = () => {
  return (
    <section className="input__con w-[770px] bg-[#121212] border rounded-2xl border-0">
      <div className="input__case flex items-center justify-between w-full border rounded-2xl border-0">
        <input className="text-white border-0 outline-0 w-full h-20" type="text" id="commentPlace" placeholder="Напишите что-нибудь"/>
        <div className="btns flex items-center gap-4.5">
          <button className="bg-[#EBEBEB] cursor-pointer" id="addPhto"> <Camera fill="#989898" color="#ebebeb" size={39} /></button>
          <button className="bg-[#3137C9] cursor-pointer" id="sendMassage"> <SendHorizonal size={29} fill="#fff" color="#fff" /> </button>
        </div>
      </div>
    </section>
  )
}

export default Inputik