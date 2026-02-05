import { useState } from "react"
import { supabase } from "../lib/supabase"

export function useAuth() {
  const [user, setUser] = useState(null)

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) throw error

    console.log(data, data.user)

    setUser(data?.user ?? null)
  }

  return {
    user,
    login
  }
}