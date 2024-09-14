import { useRouter } from 'next/router'

const useFullPageReload = () => {
  const router = useRouter()

  const handleFullReload = (e, href) => {
    e.preventDefault()
    window.location.href = href // Triggers a full page reload
  }

  return handleFullReload
}

export default useFullPageReload
