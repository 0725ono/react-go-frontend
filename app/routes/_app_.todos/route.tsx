import { useState } from "react";
import TodoList from "~/components/shared/TodoList";

const TodoLayout = () => {

    // 入力値を保持します
    const [todo, setTodo] = useState<string>("");
    const [dueDate, setDueDate] = useState("");
    const [priority, setPriority] = useState("中");
    const [description, setDescription] = useState("");
 
    const handleAddTodo = () => {
        console.log(todo, dueDate, priority);
        // APIを叩く動きを実装します

    }

    return ( 
        <>
            <div className="py-6 max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Todo App</h1>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-end justify-between w-full">
                        <div className="flex flex-col space-y-4 w-full mb-2">
                            <div className="flex space-x-4 w-full">
                                <div className="flex flex-col w-100">
                                    <label className="text-sm font-bold">タスクを追加</label>
                                    <input 
                                        type="text"
                                        placeholder="Add Todo"
                                        value={todo}
                                        onChange={(e) => setTodo(e.target.value)}
                                        className="border rounded px-2 py-1" />
                                </div>

                                <div className="flex flex-col w-60">
                                    <label className="text-sm font-bold">期限を設定</label>
                                    <input 
                                        type="date"
                                        value={dueDate}
                                        onChange={(e) => setDueDate(e.target.value)}
                                        className="border rounded px-2 py-1" />
                                </div>

                                <div className="flex flex-col w-40">
                                    <label className="text-sm font-bold">優先度</label>
                                    <select 
                                        className="border rounded px-2 py-1"
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
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
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="border rounded px-2 py-1" />
                            </div>
                        </div>           
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <button onClick={handleAddTodo}
                            className="bg-blue-500 text-white my-4 px-4 py-3 w-60 rounded hover:bg-blue-600">追加</button>
                    </div>
                </div>
            </div>
            <TodoList />
        </>
    );
}

export default TodoLayout