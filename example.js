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