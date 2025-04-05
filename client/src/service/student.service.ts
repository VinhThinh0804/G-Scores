import http from "./http";

class StudentService{
  private baseURI = "student";
  private getURI(uri: string) {
    return `${this.baseURI}/${uri}`;
  }

  async getAllStudents() {
    return await http.get(this.getURI(""));
  }

  async getStudentById(id: string) {
    return await http.get(this.getURI(`${id}`));
  }
}
export default new StudentService();
