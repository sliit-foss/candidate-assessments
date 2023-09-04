class Todo {
  int id;
  String title;
  String description;
  bool status;

  Todo(
      {required this.id,
      required this.title,
      required this.description,
      required this.status}) {
    id = this.id;
    title = this.title;
    description = this.description;
    status = this.status;
  }

  static fromJson(jsonData) async =>
      Todo(id: null!, title: '', description: '', status: null!);

  toJson() {
    return {
      "id": id,
      "description": description,
      "title": title,
      "status": status
    };
  }
}
