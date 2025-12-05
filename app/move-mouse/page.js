'use client'

import React from 'react'
import { useState, useEffect } from 'react'
export default function MoveMouse() {
    const [mousePos, setMousePos]= useState({
        x:0,
        y:0
    })

    useEffect(() => {
        const moveMouse = (event) => {
            console.log('mouse moving')
            setMousePos({
                x: event.clientX,
                y: event.clientY
            })
        }
        window.addEventListener('mousemove',moveMouse)
      return () => {
        window.removeEventListener('mousemove',moveMouse)
      }
    }, [])
    
  return (
    <div className='w-screen h-screen bg-black'>
        <div
            className=' border-red-500 border-2 w-[30px] h-[30px] fixed z-[9999] rounded-full animate-pulse pointer-events-none'
            style={{
                left: mousePos.x,
                top: mousePos.y
            }}
        >

        </div>
    </div>
  )
}
