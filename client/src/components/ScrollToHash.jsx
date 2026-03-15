import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToHash() {

  const { hash } = useLocation()

  useEffect(() => {

    if (!hash) return

    const id = hash.replace("#", "")

    const scroll = () => {

      const element = document.getElementById(id)

      if (element) {

        const offset = 120

        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          offset

        window.scrollTo({
          top: y,
          behavior: "smooth"
        })

      } else {

        setTimeout(scroll, 100)

      }

    }

    scroll()

  }, [hash])

  return null
}