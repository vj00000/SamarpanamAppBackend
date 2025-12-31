import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const techniques = await prisma.technique.findMany({
        select: {
            id: true,
            title: true,
            videoUrl: true,
        },
    });
    console.log(JSON.stringify(techniques, null, 2));
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
