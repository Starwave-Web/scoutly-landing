import { ReactElement } from "react"


const CTACard = ({icon, text1, text2}:{icon: ReactElement, text1: string, text2:string}) => {
  return (
    <div className="w-full h-full min-[440px]:w-[190px] min-[440px]:h-[196px] rounded-[10px] py-6 px-6 bg-[#29C7C7] shadow-lg flex flex-col items-center justify-center gap-3">
        <div>{icon}</div>
        <p className="text-white text-[20px]/[30px] uppercase text-center">{text1}</p>
        <p className="text-white text-[24px]/[24px] uppercase text-center">{text2}</p>
    </div>
  )
}

export default CTACard