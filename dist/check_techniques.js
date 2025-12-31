"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
//# sourceMappingURL=check_techniques.js.map