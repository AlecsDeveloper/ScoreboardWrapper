import * as GameTest from "@minecraft/server-gametest";
import { world, system } from "@minecraft/server";

const ov = world.getDimension('overworld');

export const DB = {
    
    Create: function (...args) {
        try {
            ov.runCommandAsync(`scoreboard objectives add ${args[0]} dummy`)
            for (const data of args[1]) ov.runCommandAsync(`scoreboard players add ${datas} ${args[0]} 0`);
        } catch { console.warn('An error occurred creating database'); }
    },

    New: function (...args) {
        try {
            ov.runCommandAsync(`scoreboard players add ${args[0]} ${args[1]} 0`);
        } catch { console.warn('An error occurred adding a value to the database'); }
    },
    
    Set: function (...args) {
        try {
            ov.runCommandAsync(`scoreboard players set ${args[1]} ${args[0]} ${args[2]}`);
        } catch { console.warn('An error occurred setting a value'); }
    },
    
    Get: function (...args) {
        try {
            const data = world.scoreboard.getObjetive(args[1]);
            return data.getScore(typeof args[0] == 'string' ? data.getParticipants().find(ob => ob.displayName == args[0]) : args[0].scoreboard);
        } catch {
            console.warn('An error occurred getting a value');
            return NaN;
        }
    }
    
}
