import Link from 'next/link'
import React from 'react'

const ResultBox = ({h1, text = "", }) => {
  return (
    <div className='result-box flex flex-col items-start gap-5 w-[755px] text-white bg-[#202020] p-16'>
        <div className='text-2xl font-bold'>
            {h1}
        </div>
        {text && (
            <div>
                {text}
            </div>
        )}
        <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-3'>
                <div>21.06.2020</div>
                <div className="circle w-[6px] h-[6px] bg-[#C4C4C4] border border-0 rounded-full"></div>
                <div>продвижение видео</div>
            </div>
            <div>
                <Link className='text-[#107EFF]' href={`/chitat`}>
                    перейти
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ResultBox