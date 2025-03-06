/*
  Warnings:

  - Added the required column `userId` to the `Measurement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Measurement` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Measurement` ADD CONSTRAINT `Measurement_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
