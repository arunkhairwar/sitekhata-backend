/*
  Warnings:

  - You are about to drop the column `mobile` on the `Site` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `Site` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Site_mobile_key";

-- AlterTable
ALTER TABLE "Site" DROP COLUMN "mobile",
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "image" TEXT;

-- AddForeignKey
ALTER TABLE "Site" ADD CONSTRAINT "Site_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
