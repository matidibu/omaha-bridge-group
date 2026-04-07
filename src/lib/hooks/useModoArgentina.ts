'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'obg_modo_argentina'

export function useModoArgentina() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(localStorage.getItem(STORAGE_KEY) === '1')
  }, [])

  function toggle() {
    setActive((prev) => {
      const next = !prev
      localStorage.setItem(STORAGE_KEY, next ? '1' : '0')
      return next
    })
  }

  return { active, toggle }
}
