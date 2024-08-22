-- CreateTable
CREATE TABLE "Plant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "common_name" TEXT NOT NULL,
    "scientific_name" TEXT NOT NULL,
    "other_name" TEXT,
    "cycle" TEXT NOT NULL,
    "watering" TEXT NOT NULL,
    "sunlight" TEXT NOT NULL,
    "defaultImage" TEXT,
    "expiresAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "UserPlant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "plantId" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserPlant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserPlant_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PlantImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "license" INTEGER NOT NULL,
    "license_name" TEXT NOT NULL,
    "license_url" TEXT NOT NULL,
    "original_url" TEXT NOT NULL,
    "regular_url" TEXT NOT NULL,
    "medium_url" TEXT NOT NULL,
    "small_url" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "plantId" INTEGER NOT NULL,
    CONSTRAINT "PlantImage_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Note" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "note" TEXT NOT NULL,
    "plantId" INTEGER NOT NULL,
    "userPlantId" INTEGER,
    CONSTRAINT "Note_plantId_fkey" FOREIGN KEY ("plantId") REFERENCES "Plant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Note_userPlantId_fkey" FOREIGN KEY ("userPlantId") REFERENCES "UserPlant" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "PlantImage_plantId_key" ON "PlantImage"("plantId");
