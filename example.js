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
    <title>Piedra, Papel o Tijeras</title>
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
            text-align: center;
        }

        h1 {
            margin-bottom: 20px;
        }

        .choices {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
        }

        .choice {
            cursor: pointer;
            padding: 10px;
            font-size: 2em;
        }

        .result {
            margin-top: 20px;
            font-size: 1.2em;
        }

        .win {
            color: green;
        }

        .lose {
            color: red;
        }

        .draw {
            color: orange;
        }

        .battlefield {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 20px 0;
            font-size: 2em;
            height: 50px;
        }

        .option {
            font-size: 2em;
        }

        .player-option {
            font-size: 2em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Piedra, Papel o Tijeras</h1>
        <div class="battlefield">
            <div id="computer-choice" class="option">❓</div>
            <div id="player-choice" class="option"></div>
        </div>
        <div class="choices">
            <div class="choice" onclick="play('🪨')">🪨</div>
            <div class="choice" onclick="play('📄')">📄</div>
            <div class="choice" onclick="play('✂️')">✂️</div>
        </div>
        <div class="result" id="result"></div>
    </div>
    <script>
        const choices = ['🪨', '📄', '✂️'];
        let computerInterval;

        function startAnimation() {
            let index = 0;
            computerInterval = setInterval(() => {
                document.getElementById('computer-choice').textContent = choices[index];
                index = (index + 1) % choices.length;
            }, 200);
        }

        function stopAnimation() {
            clearInterval(computerInterval);
        }

        function play(playerChoice) {
            document.getElementById('player-choice').textContent = playerChoice;
            startAnimation();

            setTimeout(() => {
                stopAnimation();
                const computerChoice = choices[Math.floor(Math.random() * choices.length)];
                document.getElementById('computer-choice').textContent = computerChoice;

                let result = '';
                if (playerChoice === computerChoice) {
                    result = `Empate! Ambos eligieron ${playerChoice}.`;
                    document.getElementById('result').className = 'result draw';
                } else if (
                    (playerChoice === '🪨' && computerChoice === '✂️') ||
                    (playerChoice === '📄' && computerChoice === '🪨') ||
                    (playerChoice === '✂️' && computerChoice === '📄')
                ) {
                    result = `Ganaste! ${playerChoice} vence a ${computerChoice}.`;
                    document.getElementById('result').className = 'result win';
                } else {
                    result = `Perdiste! ${computerChoice} vence a ${playerChoice}.`;
                    document.getElementById('result').className = 'result lose';
                }

                document.getElementById('result').textContent = result;
            }, 2000);  // La animación dura 2 segundos antes de mostrar el resultado
        }
    </script>
</body>
</html>
*/