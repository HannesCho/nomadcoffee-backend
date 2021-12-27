-- CreateTable
CREATE TABLE "UserPhoto" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "file" TEXT NOT NULL,
    "caption" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserPhoto" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "Category_name_key" RENAME TO "Category.name_unique";

-- RenameIndex
ALTER INDEX "CoffeeShopPhoto_url_key" RENAME TO "CoffeeShopPhoto.url_unique";

-- RenameIndex
ALTER INDEX "User_email_key" RENAME TO "User.email_unique";

-- RenameIndex
ALTER INDEX "User_githubUsername_key" RENAME TO "User.githubUsername_unique";

-- RenameIndex
ALTER INDEX "User_username_key" RENAME TO "User.username_unique";
