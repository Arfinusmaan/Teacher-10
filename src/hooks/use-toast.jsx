import { useState, useCallback } from 'react'

export const useToast = () => {
  const [toasts, setToasts] = useState([])

  const toast = useCallback(({ title, description, action }) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { id, title, description, action }
    
    setToasts(prev => [...prev, newToast])
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 5000)
    
    return id
  }, [])

  const dismiss = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  return { toasts, toast, dismiss }
}

export const toast = ({ title, description, action }) => {
  // This is a simplified toast function
  console.log('Toast:', { title, description, action })
}
