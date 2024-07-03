import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlinePhone } from 'react-icons/ai'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FaArrowUp } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io'

const scrollVariants = {
  initial: { y: '.5rem', opacity: 0 },
  animate: {
    y: '0rem',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}
const ScrollToTop = () => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  // the scroll event fires when the document view has been scrolled
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          variants={scrollVariants}
          initial="initial"
          animate="animate"
          exit="initial"
          title="scroll to top"
          name="scroll to top"
          aria-label="scroll to top"
        >
          <FaWhatsapp
            size="2rem"
            onClick={() =>
              router.push(
                `https://api.whatsapp.com/send/?phone=971565111809&text&type=phone_number&app_absent=0`
              )
            }
            color="#fff"
          />

          <AiOutlinePhone
            size="2rem"
            color="#fff"
            onClick={() => router.push(`tel:0565111809`)}
          />
          <IoLogoInstagram
            size="2rem"
            color="#fff"
            onClick={() => router.push('https://www.instagram.com/')}
          />
          <FaArrowUp size="2rem" color="#fff" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
export default ScrollToTop
