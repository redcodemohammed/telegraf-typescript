import { TelegrafContext } from "telegraf/typings/context"

export default async (ctx: TelegrafContext, next: any) => {
    //@ts-ignore
    if (["group", "supergroup"].includes(ctx?.chat?.type)) {
        next();
    } else {
        ctx.reply("This command is for groups only.");
    }
}
