import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Header() {
  return (
    <header className="border-b border-gray-800 px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-[#E5958E] text-2xl font-bold">
            Logo
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/explore" className="text-gray-300 hover:text-white flex items-center">
              <Image
                src="/home.png"
                alt="home"
                width={24} 
                height={24}                className="mr-2"
              />
              Explore
            </Link>
            <Link href="/create" className="text-gray-300 hover:text-white flex items-center">
              <Image
                src="/create.png"
                alt="Create"
                width={24}
                height={24}
                className="mr-2"
              />
              Create
            </Link>
            <Link href="/edit" className="text-gray-300 hover:text-white flex items-center">
              <Image
                src="/edit.png"
                alt="Edit"
                width={24}
                height={24}
                className="mr-2"
              />
              Edit
            </Link>
          </nav>
        </div>
        <Button className="bg-[#E5958E] hover:bg-[#d88880] text-white rounded-full px-6">
          Login
        </Button>
      </div>
    </header>
  )
}
