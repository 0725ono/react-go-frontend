// app/components/TodoList.tsx
import React from "react";

type Todo = {
  task: string;
  dueDate: string;
  priority: string;
  description: string;
};

type Props = {
  todos: Todo[];
};

const TodoList = () => {

    const handleUpdate = () => {
        // update処理を実装します。
    }

    const handleDelete = () => {
        // delete処理を実装します。
    }

    // ダミーデータ
    const todos: null | Todo = [
        {
        task: "牛乳を買う",
        dueDate: "2021-10-01",
        priority: "中",
        description: "明日の朝食のために牛乳を買ってくるlorem ipsum dolor sit amet consectetur adipisicing elit. Quos laborum, quidem, quas,",
        },
        {
        task: "本を読む",
        dueDate: "2021-10-02",
        priority: "小",
        description: "今週中に読みたい本がある",
        },
        {
        task: "洗濯をする",
        dueDate: "2021-10-03",
        priority: "大",
        description: "週末までに洗濯を終わらせる",
        },
    ];

  return (
    <div className="max-w-5xl p-6 mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">TODO一覧</h2>
      <ul>
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">TODOがありません。</p>
        ) : (
          todos.map((todo: Todo, index: number
          ) => (
            <li key={index} 
                className="flex justify-between items-center bg-grey-100 p-4 my-2 rounded-lg shadow-sm">
                <div className="flex flex-col space-y-1 w-1/5">
                    <strong className="text-2xl text-gray-800">{todo.task}</strong> 
                    <p className="text-sm text-gray-600">期限: {todo.dueDate}</p>
                    <p className="text-sm text-gray-600">{todo.priority}</p>
                </div>
                <div className="space-y-2 ml-4 w-3/5">
                    <p className="text-sm text-gray-600">{todo.description}</p>
                </div>
                <div className="flex space-x-2 justify-end items-end w-1/5">
                    <button onClick={handleUpdate}
                        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm focus:outline-none">
                    編集
                    </button>
                    <button onClick={handleDelete}
                        className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm focus:outline-none">
                    削除
                    </button>
                </div>
                
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
