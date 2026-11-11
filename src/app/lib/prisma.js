import "dotenv/config";
import {PrismaBetterSqlite} from "@prisma/better-sqlite";
import {PrismaClient} from "@prisma/client";
const globalForPrisma = globalThis;
const prismaClientSingleton = ()=>{
    const adapter = new PrismaBetterSqlite3({
        url: process.env.DATABASE_URL,
    });
    return new PrismaClient({
        adapter,
    });
}

export const prisma = globalForPrisma.prisma || prismaClientSingleton();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;