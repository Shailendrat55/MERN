import React, { useState } from 'react'

export default function Home() {
    const [showModel,setShowModel]=useState(false);
    const [tasks,setTasks]=useState([]);
    const [input,setInput]=useState("");
    const [status,setStatus]=useState("Pending");
    console.log("Model",showModel)

    return (
        <>
            <div className=''>
                <nav className='bg-emerald-300 h-10'>
                    <div className='flex justify-between p-1 mx-2'>
                        <h1 className='font-bold p-1 font-serif'>YouToDo</h1>
                        <ul className='flex gap-3'>
                            <button onClick={()=>{setShowModel(prev=>!prev)}} className='btn-primary font-extrabold'>Add+</button>
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
                        <div className="flex flex-cols-4 p-1 mx-3 gap-4 font-semibold justify-between">
                            <h1>S.No</h1>
                            <h1>Task</h1>
                            <h1>Status</h1>
                            <h1>Actions</h1>
                        </div>
                        {tasks.map((t,index)=>(
                            <div className='flex flex-cols-4 p-2 mx-3 gap-4 justify-between'>
                                <span>{index+1}</span>
                                <span>{t}</span>
                                <span>{tasks[index]?.status || 'Pending'}</span>
                                <button onClick={()=>(
                                    setTasks(tasks.filter((_, i)=>i!==index))
                                )}
                                className='btn-primary rounded-sm hover:bg-pink-950 hover:text-white'
                                >Delete</button>
                            </div>
                        ))}
                        
                    </section>
                    {showModel && (
                        <div className='grid justify-center items-center text-center gap-5 rounded-2xl color-primary border border-green-500 p-5 mt-5 w-2xl mx-auto'>
                            <div className='grid justify-center items-center text-center gap-5 rounded-2xl color-primary '>
                                <h1 className='bg-pink-100 w-full font-bold rounded-2xl'>Add Your Task</h1>
                            <input 
                            value={input}
                            onChange={(e)=>setInput(e.target.value)}
                            placeholder='Enter Task'
                            type="text" 
                            className='rounded-xl border border-green-400 items-center text-center w-xl font-bold'/>
                            </div>
                            <div className='flex justify-center items-center gap-5'>
                                <button onClick={()=>{
                                setTasks([...tasks,input]);
                                setInput("");
                                setShowModel(false);
                            }}
                            className='btn-primary p-2 rounded-xl font-bold w-20'>
                                Add
                            </button>
                            <button onClick={()=>setShowModel(false)}
                                className='btn-primary p-2 rounded-xl font-bold w-20'>
                                Cancel
                            </button>
                            </div>
                            
                        </div>
                    )}
                </main>
            </div>

        </>
    )
}