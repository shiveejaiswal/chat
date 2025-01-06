import Link from 'next/link'
import { FaInstagram, FaTwitter, FaTelegramPlane } from 'react-icons/fa' // Instagram and Twitter from react-icons/fa

export function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link href="/" className="text-[#E5958E] text-2xl font-bold">
          Logo
        </Link>
        <div className="flex items-center space-x-4">
          <div className="text-[#FFD700]">Contact@1900000000.tech</div>
          {/* Telegram Link with orange color */}
          <Link href="https://telegram.org" className="text-[#FFA500] hover:text-white">
            <FaTelegramPlane className="h-5 w-5 text-[#FFA500]" />
          </Link>
          {/* Instagram Link with orange color */}
          <Link href="https://instagram.com" className="text-[#FFA500] hover:text-white">
            <FaInstagram className="h-5 w-5 text-[#FFA500]" />
          </Link>
          {/* Twitter Link with orange color */}
          <Link href="https://twitter.com" className="text-[#FFA500] hover:text-white">
            <FaTwitter className="h-5 w-5 text-[#FFA500]" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
