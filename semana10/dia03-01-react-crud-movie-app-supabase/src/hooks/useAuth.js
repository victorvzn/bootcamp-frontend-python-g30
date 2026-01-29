import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'

export const useAuth = () => {
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 1️⃣ Verificar sesión inicial una sola vez
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })

    // Escuchar cambios de auth
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const login = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error

    setSession(data.session)
  }

  const logout = async () => {
    await supabase.auth.signOut()

    setSession(null)
  }

  return {
    session,
    user: session?.user ?? null,
    loading,
    login,
    logout,
    isAuthenticated: !!session
  }
}
