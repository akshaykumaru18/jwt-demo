'use client'
import { useState } from "react"
import { getStudentData } from "./core/apiService"
export default function StudentsPage(){
  const [studentList, setStudentList]= useState([])

  return <div className="flex flex-col bg-yellow-200 min-h-screen p-2">
      <div>Student Data</div>
      <button
        className="bg-green-500 text-white font-bold p-2"
      onClick={async (event)=> {
        const data = await getStudentData()
        setStudentList(data)
      }}>Get Data</button>

      {studentList.map((student)=> {
          return <div className="bg-white my-5 border-2 pl-5 rounded-2xl text-lg text-black font-bold">
            
            <div>{student.name}</div>
            <div>{student.id}</div>
            <div>{student.std}</div>
            <div>{student.sec}</div>
            </div>
      })}

  </div>
}