import React, { useState } from 'react'

export default function Home() {
    const [showModel,setShowModel]=useState(false)
    const [task,setTask]=useState(false)
    console.log("Model",showModel)
    return (
        <>
            <div className=''>
                <nav className='bg-emerald-300 h-10'>
                    <div className='flex justify-between p-1 mx-2'>
                        <h1>YouToDo</h1>
                        <ul className='flex gap-3'>
                            <a href="">Home</a>
                            <a href="">Status</a>
                            <a href=""></a>
                            <a href=""></a>
                            <button onClick={()=>{setShowModel(prev=>!prev)}} className='btn-primary'>New</button>
                        </ul>
                    </div>

                </nav>
                <main className=' rounded p-8 '>
                    {/* header */}
                    <section className='bg-pink-200 grid justify-center rounded-2xl items-center text-center h-full font-bold gap-2.5'>
                        <div>
                            <img className='h-20 w-20 rounded-full' src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg" alt="" />
                            <h1>TASKS</h1>
                        </div>
                    </section>
                    
                    {/* List */}
                    <section className="color-primary mt-5 rounded-2xl">
                        <div className="flex flex-cols-3 p-1 mx-3 gap-4 font-semibold justify-between">
                            <h1>S.No</h1>
                            <h1>Task</h1>
                            <h1>Actions</h1>
                        </div>
                    </section>

                </main>
            </div>

        </>
    )
}