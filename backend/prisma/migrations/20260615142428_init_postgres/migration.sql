-- CreateTable
CREATE TABLE "public"."users" (
    "user_id" SERIAL NOT NULL,
    "username" VARCHAR(32) NOT NULL,
    "email" VARCHAR(255),
    "pass_hash" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "username" ON "public"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "email" ON "public"."users"("email");
