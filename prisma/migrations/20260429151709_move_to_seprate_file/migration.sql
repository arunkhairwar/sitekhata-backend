/*
  Warnings:

  - Made the column `addressLine1` on table `Address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `addressLine2` on table `Address` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "addressLine1" SET NOT NULL,
ALTER COLUMN "addressLine2" SET NOT NULL;
