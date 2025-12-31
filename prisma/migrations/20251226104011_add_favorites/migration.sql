-- CreateTable
CREATE TABLE "FavoriteTechnique" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "techniqueId" TEXT NOT NULL,
    CONSTRAINT "FavoriteTechnique_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FavoriteTechnique_techniqueId_fkey" FOREIGN KEY ("techniqueId") REFERENCES "Technique" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteTechnique_userId_techniqueId_key" ON "FavoriteTechnique"("userId", "techniqueId");
