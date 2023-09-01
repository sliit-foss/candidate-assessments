//Declare Todo class attributes
class Todo {
  int id;
  String title;
  String description;
  bool status;

  //Constructor
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

  //Constructor that convert json to object instance
  fromJson(jsonData) {
    return Todo(
        id: jsonData['id'],
        title: jsonData['title'],
        description: jsonData['description'],
        status: jsonData['status']);
  }

  // Method to convert object to json string
  toJson() {
    return {
      "id": id,
      "description": description,
      "title": title,
      "status": status
    };
  }
}
