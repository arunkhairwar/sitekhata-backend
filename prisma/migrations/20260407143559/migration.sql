-- AlterTable
ALTER TABLE "Site" ADD COLUMN     "estimatedBudget" DOUBLE PRECISION,
ADD COLUMN     "expectedEndDate" TIMESTAMP(3),
ADD COLUMN     "startDate" TIMESTAMP(3);
