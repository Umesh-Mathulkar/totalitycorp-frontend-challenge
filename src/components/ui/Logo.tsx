import { FaShoppingBag } from 'react-icons/fa'

export default function Logo({ text }:{text:string}) {
  return (
    <div className="flex items-center">
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-500">
        {text}
      </div>
      <FaShoppingBag className="w-8 h-8 ml-2 text-white-800 transition duration-300 transform hover:scale-125 hover:-rotate-12" />
    </div>
  )
}
