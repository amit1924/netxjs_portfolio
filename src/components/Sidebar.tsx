import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        ☰
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full p-4">
            <Link href="/portfolio" className="block py-2">
              Portfolio
            </Link>
            <a href="/api/auth/logout" className="block py-2">
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}