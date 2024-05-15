-- CreateTable
CREATE TABLE `Task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `dueDateTime` DATETIME(3) NOT NULL,
    `description` TEXT NOT NULL,
    `status` ENUM('INCOMPLETE', 'COMPLETE') NOT NULL DEFAULT 'INCOMPLETE',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
