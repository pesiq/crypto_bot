'use client'

import { useEffect } from 'react'
import { invoke } from '@tauri-apps/api/tauri'

export default function Test() {
  useEffect(() => {
    invoke<string>('test', { name: 'DrDisreskekt' })
      .then(console.log)
      .catch(console.error)
  }, [])

  // Necessary because we will have to use Test as a component later.
  return <></>
}