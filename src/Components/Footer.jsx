import React from 'react'
const Footer = () => {
  return (
    <div>
       <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Smart Reply. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-blue-400">About</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
          <a href="#" className="hover:text-blue-400">Privacy Policy</a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
