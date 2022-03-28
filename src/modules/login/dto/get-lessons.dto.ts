export interface GetLessonsDto {
  method: "credential" | "excel" | "source"
  studentCode?: string
  password?: string
  excel?: File
  source?: string
}
