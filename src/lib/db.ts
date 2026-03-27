import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  try {
    return new PrismaClient();
  } catch {
    // Return a proxy that throws on any DB operation — API routes catch this and return fallback data
    return new Proxy({} as PrismaClient, {
      get() {
        return new Proxy(() => {}, {
          get() {
            return () => { throw new Error("Database not available"); };
          },
          apply() {
            throw new Error("Database not available");
          },
        });
      },
    });
  }
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
