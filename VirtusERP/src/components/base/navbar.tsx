
import { useState } from 'react'
import { motion } from 'framer-motion'
import TypingAnimation from '@/components/ui/typing-animation'
import Logo from '@/assets/logo.webp'

export default function AnimatedNavbar() {
    const [activeItem, setActiveItem] = useState('Home')

    const menuItems = ['Início', 'Sobre', 'Serviços', 'Contact', 'Começar']

    return (
        <header className="flex bg-white shadow-sm items-center justify-around px-4">
            <div className='flex items-center gap-2'>
                <img src={Logo} alt="" className='w-12 h-12' />
                <TypingAnimation text='Virtus' className='text-md  font-afacad-flux' />
            </div>
            <nav className="container mx-auto px-4 py-4">
                <ul className="flex items-center justify-center space-x-4">
                    {menuItems.map((item) => (
                        <li key={item}>
                            <button
                                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${activeItem === item ? 'text-white' : 'text-gray-700 hover:text-gray-900'
                                    } ${item === 'Get Started' ? 'rounded-full' : ''}`}
                                onClick={() => setActiveItem(item)}
                            >
                                <span className="relative z-10">{item}</span>
                                {activeItem === item && (
                                    <motion.div
                                        className={`absolute inset-0 bg-gray-900 ${item === 'Get Started' ? 'rounded-full' : 'rounded-md'
                                            }`}
                                        layoutId="activeBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header >
    )
}