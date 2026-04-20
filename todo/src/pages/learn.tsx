import React, { useState } from 'react'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  return (
    <div>
      <nav className='bg-emerald-300 h-10'>
        <div className='flex justify-between p-1 mx-2'>
          <h1>YouToDo</h1>
          <ul className='flex gap-3'>
            <li><a href="">Home</a></li>
            <li><a href="">Status</a></li>
            <li>
              <button
                onClick={() => setShowModal(true)}
                className='btn-primary'
              >
                New
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className='p-8'>

        {/* HEADER */}
        <section className='bg-pink-200 grid justify-center rounded-2xl text-center font-bold gap-2.5 p-6'>
          <div>
            <img
              className='h-20 w-20 rounded-full'
              src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg"
              alt=""
            />
            <h1>TASKS</h1>
          </div>
        </section>

        {/* TASK LIST */}
        <section className="mt-5">
          <div className="grid grid-cols-3 font-semibold">
            <span>S.No</span>
            <span>Task</span>
            <span>Actions</span>
          </div>

          {tasks.map((t, index) => (
            <div key={index} className="grid grid-cols-3 mt-2">
              <span>{index + 1}</span>
              <span>{t}</span>
              <button
                onClick={() =>
                  setTasks(tasks.filter((_, i) => i !== index))
                }
              >
                Delete
              </button>
            </div>
          ))}
        </section>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-xl w-96">
              <h2 className="text-lg font-bold mb-4">Add Task</h2>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter task"
                className="border w-full p-2 mb-4"
              />

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    if (!input.trim()) return
                    setTasks([...tasks, input])
                    setInput("")
                    setShowModal(false)
                  }}
                  className="px-3 py-1 bg-emerald-500 text-white rounded"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  )
}