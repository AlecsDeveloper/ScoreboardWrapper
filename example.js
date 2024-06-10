import { DB } from './database.js'

// DB Name, [Targets]
DB.Create('EntitiesDB',[
    'Creepers',
    'Zombies',
    'Skeletons',
    'Spiders'
]);

// Existing DB, New Target
DB.New('EntitiesDB','Endermans');

// Existing DB, Existing Target, Value
DB.Set('EntitiesDB','Skeletons',10)

// Target, Existing DB
const a = DB.Get('Skeletons','EntitiesDB');

console.log(a) // 10

/*
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            width: 300px;
        }

        h1 {
            text-align: center;
        }

        h2 {
            margin-top: 20px;
        }

        .task-list {
            list-style: none;
            padding: 0;
        }

        .task-list li {
            display: flex;
            justify-content: space-between;
            padding: 10px;
            background: #eee;
            margin-bottom: 5px;
            border-radius: 5px;
        }

        .task-list li.completed {
            text-decoration: line-through;
            background: #d4edda;
        }

        button {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 10px;
        }

        button:hover {
            background: #0056b3;
        }

        input, select {
            width: calc(100% - 22px);
            padding: 10px;
            margin-top: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Lista de Tareas</h1>
        
        <input type="text" id="task-input" placeholder="Nueva tarea...">
        <select id="task-type">
            <option value="escuela">Escuela</option>
            <option value="trabajo">Trabajo</option>
        </select>
        <button onclick="addTask()">Añadir Tarea</button>
        
        <h2>Escuela</h2>
        <ul id="escuela-list" class="task-list">
            <!-- Tareas de la escuela aparecerán aquí -->
        </ul>
        
        <h2>Trabajo</h2>
        <ul id="trabajo-list" class="task-list">
            <!-- Tareas de trabajo aparecerán aquí -->
        </ul>
    </div>
    <script>
        function addTask() {
            const input = document.getElementById('task-input');
            const taskText = input.value.trim();
            const taskType = document.getElementById('task-type').value;

            if (taskText !== "") {
                const taskList = document.getElementById(`${taskType}-list`);

                const li = document.createElement("li");
                li.textContent = taskText;
                li.onclick = () => toggleTaskStatus(li);
                
                taskList.appendChild(li);
                input.value = "";
            }
        }

        function toggleTaskStatus(taskElement) {
            taskElement.classList.toggle("completed");
        }
    </script>
</body>
</html>
*/