import * as GameTest from "@minecraft/server-gametest";
import { world, system } from "@minecraft/server";
import { WD } from './world.js';

export const DB = {
    
    Create: function (...args) {
        WD.Run(`scoreboard objectives add ${args[0]} dummy`)
        for (const data of args[1]) WD.Run(`scoreboard players add ${datas} ${args[0]} 0`)
    },
    
    Set: function (...args) {
        WD.Run(`scoreboard players set ${args[1]} ${args[0]} ${args[2]}`);
    },
    
    Get: function (...args) {
        try {
            const data = world.scoreboard.getObjetive(args[1]);
            return data.getScore(typeof args[0] == 'string' ? data.getParticipants().find(ob => ob.displayName == args[0]) : args[0].scoreboard);
        } catch { return NaN }
    }
    
}