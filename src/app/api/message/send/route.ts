import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { nanoid } from 'nanoid'
import { db } from "@/lib/db";

export async function POST(req: Request) {

    try {
        
        const { text, chatId }: { text: string; chatId: string } = await req.json()
        const session = await getServerSession(authOptions)
        if (!session) return new Response('Unauthorized', { status: 401 })

        const [userId1, userId2] = chatId.split('--')
        if (session.user.id !== userId1 && session.user.id !== userId2) {
            return new Response('Unauthorized', { status: 401 })
        }

        const friendId = session.user.id === userId1 ? userId2 : userId1

        const isfriend = await fetchRedis(
            'sismember', `user:${session.user.id}:friends`, friendId
        ) as 0 | 1
        if (!isfriend) {
            return new Response('Unauthorized', { status: 401 })
        }

        const senderData = await fetchRedis(
            'get', `user:${session.user.id}`
        ) as string
        const sender = JSON.parse(senderData) as User

        const timestamp = Date.now()

        const messageData: Message = {
            id: nanoid(),
            senderId: sender.id,
            receiverId: friendId,
            timestamp,
            text
        }

        //-----------PUSHER ADDED LATER ----------

        await db.zadd(`chat:${chatId}:messages`, {
            score: timestamp,
            member: JSON.stringify(messageData)
        })

        return new Response('OK')

    } catch (error) {
        if (error instanceof Error) {
            return new Response(error.message, { status: 500 })
        }

        return new Response('Internal Server Error', { status: 500 })
    }
}