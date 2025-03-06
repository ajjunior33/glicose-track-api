/*
  Warnings:

  - You are about to drop the column `moment` on the `Measurement` table. All the data in the column will be lost.
  - Added the required column `momentId` to the `Measurement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Measurement` DROP COLUMN `moment`,
    ADD COLUMN `momentId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Moment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Measurement` ADD CONSTRAINT `Measurement_momentId_fkey` FOREIGN KEY (`momentId`) REFERENCES `Moment`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
