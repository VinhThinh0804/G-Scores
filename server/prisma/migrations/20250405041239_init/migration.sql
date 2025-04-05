-- CreateTable
CREATE TABLE "Student" (
    "sbd" TEXT NOT NULL,
    "maNgoaiNgu" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("sbd")
);

-- CreateTable
CREATE TABLE "Scores" (
    "sbd" TEXT NOT NULL,
    "toan" DOUBLE PRECISION,
    "nguVan" DOUBLE PRECISION,
    "ngoaiNgu" DOUBLE PRECISION,
    "vatLi" DOUBLE PRECISION,
    "hoaHoc" DOUBLE PRECISION,
    "sinhHoc" DOUBLE PRECISION,
    "lichSu" DOUBLE PRECISION,
    "diaLi" DOUBLE PRECISION,
    "gdcd" DOUBLE PRECISION
);

-- CreateIndex
CREATE UNIQUE INDEX "Scores_sbd_key" ON "Scores"("sbd");

-- AddForeignKey
ALTER TABLE "Scores" ADD CONSTRAINT "Scores_sbd_fkey" FOREIGN KEY ("sbd") REFERENCES "Student"("sbd") ON DELETE RESTRICT ON UPDATE CASCADE;
