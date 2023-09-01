import 'package:flutter/material.dart';
import 'package:todo_application/models/todo.dart';

class TodoView extends StatefulWidget {
  Todo todo;
  TodoView({Key? key, required this.todo}) : super(key: key);

  @override
  _TodoViewState createState() => _TodoViewState(todo: this.todo);
}

class _TodoViewState extends State<TodoView> {
  Todo todo;
  _TodoViewState({required this.todo});
  TextEditingController titleController = TextEditingController();
  TextEditingController descriptionController = TextEditingController();

  @override
  void initState() {
    super.initState();
    if (todo != null) {
      titleController.text = todo.title;
      descriptionController.text = todo.description;
    }
  }

  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).canvasColor,
      appBar: AppBar(
        centerTitle: true,
        elevation: 10,
        backgroundColor: Theme.of(context).appBarTheme.backgroundColor,
        title: const Text("View Your To Do"),
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: const EdgeInsets.all(20),
          child: Column(
            children: [
              Container(
                child: TextField(
                  onChanged: (data) {
                    todo.title = data;
                  },
                  style: TextStyle(color: Theme.of(context).primaryColor),
                  decoration: InputDecoration(
                    labelStyle:
                        TextStyle(color: Theme.of(context).primaryColor),
                    labelText: "Title",
                    fillColor: Theme.of(context).primaryColor,
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10.0),
                      borderSide: BorderSide(
                          color: Theme.of(context).primaryColorLight),
                    ),
                  ),
                  controller: titleController,
                ),
              ),
              const SizedBox(
                height: 25,
              ),
              Container(
                child: TextField(
                  maxLines: 5,
                  onChanged: (data) {
                    todo.description = data;
                  },
                  style: TextStyle(color: Theme.of(context).primaryColor),
                  decoration: InputDecoration(
                    labelStyle:
                        TextStyle(color: Theme.of(context).primaryColor),
                    labelText: "Description",
                    fillColor: Theme.of(context).primaryColor,
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10.0),
                      borderSide: BorderSide(
                          color: Theme.of(context).primaryColorLight),
                    ),
                    //fillColor: Colors.green
                  ),
                  controller: descriptionController,
                ),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: Container(
        height: 55.0,
        child: BottomAppBar(
          color: Theme.of(context).bottomAppBarTheme.color,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              InkWell(
                  onTap: () {
                    showDialog(
                        context: context,
                        builder: (ctx) => AlertDialog(
                              title: Text("Alert"),
                              content: Text(
                                  "To Do ${todo.status ? 'not complete' : 'incomplete'}  "),
                              actions: <Widget>[
                                TextButton(
                                  onPressed: () {
                                    Navigator.of(ctx).pop();
                                  },
                                  child: Text("No"),
                                ),
                                TextButton(
                                  onPressed: () {
                                    setState(() {
                                      todo.status = !todo.status;
                                    });
                                    Navigator.of(ctx).pop();
                                  },
                                  child: const Text("Yes"),
                                )
                              ],
                            ));
                  },
                  child: Text(
                    "${todo.status ? 'To Do Complete' : 'To Do Incomplete'} ",
                    style: TextStyle(color: Theme.of(context).primaryColor),
                  )),
              const VerticalDivider(
                color: Colors.white,
              ),
              IconButton(
                icon: Icon(Icons.check_circle,
                    color: Theme.of(context).primaryColor),
                onPressed: () {
                  Navigator.pop(context, todo);
                },
              )
            ],
          ),
        ),
      ),
    );
  }
}
