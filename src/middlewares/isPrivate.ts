 
import { TelegrafContext } from "telegraf/typings/context"

export default async (ctx: TelegrafContext, next: any) => {
    //@ts-ignore
    if (ctx?.chat?.type === "private") {
        next();
    } else {
        ctx.reply("This command is for private only.");
    }
}
