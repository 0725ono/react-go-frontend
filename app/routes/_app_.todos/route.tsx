import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TodoList from "~/components/shared/TodoList";
import { validationSchema } from "~/lib/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const TodoLayout = () => {

    interface Todo {
        task: string;
        dueDate: Date;
        priority: string;
        description: string;
    }

    // 入力値を保持します
    const { register, handleSubmit, formState: { errors } } = useForm<Todo>({mode: "onChange", resolver: zodResolver(validationSchema)});
 
    const onSubmit = (data: Todo) => {
        console.log(data);
    }

    return ( 
        <>
            <div className="py-6 max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Todo App</h1>
                <form className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-end justify-between w-full">
                        <div className="flex flex-col space-y-4 w-full mb-2">
                            <div className="flex space-x-4 w-full">
                                <div className="flex flex-col w-100">
                                    <label className="text-sm font-bold">タスクを追加</label>
                                    <input 
                                        type="text"
                                        placeholder="Add Todo"
                                        {...register("task")}                                        
                                        className="border rounded px-2 py-1" />
                                        <p className="h-5 mt-1 text-red-500">{errors.task?.message as React.ReactNode}</p>
                                </div>

                                <div className="flex flex-col w-60">
                                    <label className="text-sm font-bold">期限を設定</label>
                                    <input 
                                        type="date"
                                        {...register("dueDate")} 
                                        className="border rounded px-2 py-1" />
                                </div>

                                <div className="flex flex-col w-40">
                                    <label className="text-sm font-bold">優先度</label>
                                    <select 
                                        className="border rounded px-2 py-1"
                                        {...register("priority")} 
                                    >
                                        <option>大</option>
                                        <option>中</option>
                                        <option>小</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-sm font-bold">詳細</label>
                                <textarea 
                                    {...register("description")} 
                                    className="border rounded px-2 py-1" />
                            </div>
                        </div>           
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <button onClick={handleSubmit(onSubmit)}
                            className="bg-blue-500 text-white my-4 px-4 py-3 w-60 rounded hover:bg-blue-600">追加</button>
                    </div>
                </form>
            </div>
            <TodoList />
        </>
    );
}

export default TodoLayout