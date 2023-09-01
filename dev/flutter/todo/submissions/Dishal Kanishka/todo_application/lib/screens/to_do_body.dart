import "dart:convert";
import "dart:math";

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:todo_application/Class/todo.dart';
import 'package:todo_application/Constants/colors.dart';
import 'package:todo_application/screens/view_todo.dart';

class Body extends StatefulWidget {
  Body({Key? key}) : super(key: key);

  @override
  State<Body> createState() => _BodyState();
}

class _BodyState extends State<Body> {
  late SharedPreferences sharedPreferences;

  bool switchValue = false;

  List todos = [];

  @override
  void initState() {
    super.initState();
    initialGetSavedData();
  }

  void initialGetSavedData() async {
    sharedPreferences = await SharedPreferences.getInstance();
    String stringTodo = sharedPreferences.getString('todo')!;
    List todoList = jsonDecode(stringTodo);
    for (var todo in todoList) {
      setState(() {
        todos.add(Todo(id: 1, title: '', description: '', status: false)
            .fromJson(todo));
      });
    }
  }

  void saveTodo() {
    List items = todos.map((e) => e.toJson()).toList();
    sharedPreferences.setString('todo', jsonEncode(items));
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).appBarTheme.backgroundColor,
        title: const Text('To Do'),
      ),
      backgroundColor: Theme.of(context).canvasColor,
      body: ListView.builder(
          scrollDirection: Axis.vertical,
          itemCount: todos.length,
          itemBuilder: (BuildContext context, int index) {
            return Card(
              elevation: 8.0,
              margin:
                  const EdgeInsets.symmetric(horizontal: 10.0, vertical: 6.0),
              child: InkWell(
                onTap: () async {
                  Todo t = await Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => TodoView(todo: todos[index])));
                  if (t != null) {
                    setState(() {
                      todos[index] = t;
                    });
                    saveTodo();
                  }
                },
                child: makeListTile(todos[index], index),
              ),
            );
          }),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        backgroundColor: kButtonColor,
        onPressed: () {
          addToDo();
        },
      ),
    );
  }

  addToDo() async {
    int id = Random().nextInt(30);
    Todo t = Todo(id: id, title: '', description: '', status: false);
    Todo returnTodo = await Navigator.push(
        context, MaterialPageRoute(builder: (context) => TodoView(todo: t)));
    if (returnTodo != null) {
      setState(() {
        todos.add(returnTodo);
        saveTodo();
      });
    }
  }

  makeListTile(Todo todo, index) {
    return ListTile(
        contentPadding: EdgeInsets.symmetric(horizontal: 20.0, vertical: 10.0),
        leading: Container(
          padding: const EdgeInsets.only(right: 12.0),
          decoration: const BoxDecoration(
              border:
                  Border(right: BorderSide(width: 1.0, color: Colors.white))),
          child: CircleAvatar(
            backgroundColor: Color(0xFFECEFF1),
            child: Text(
              "${index + 1}",
              style: TextStyle(color: Color(0xFF000000)),
            ),
          ),
        ),
        title: Row(
          children: [
            Text(
              todo.title,
              style: const TextStyle(
                  color: Colors.black, fontWeight: FontWeight.bold),
            ),
            const SizedBox(
              width: 10,
            ),
            todo.status
                ? const Icon(
                    Icons.verified,
                    color: Colors.greenAccent,
                  )
                : Container()
          ],
        ),
        subtitle: Wrap(
          children: <Widget>[
            Text(todo.description,
                overflow: TextOverflow.clip,
                maxLines: 1,
                style: const TextStyle(color: Colors.black))
          ],
        ),
        trailing: InkWell(
            onTap: () {
              delete(todo);
            },
            child: Icon(Icons.remove, color: Colors.black, size: 20.0)));
  }

  delete(Todo todo) {
    return showDialog(
        context: context,
        builder: (ctx) => AlertDialog(
              title: const Text("Alert"),
              content: const Text("Remove To Do"),
              actions: [
                TextButton(
                    onPressed: () {
                      Navigator.pop(ctx);
                    },
                    child: const Text("No")),
                TextButton(
                    onPressed: () {
                      setState(() {
                        todos.remove(todo);
                      });
                      Navigator.pop(ctx);
                      saveTodo();
                    },
                    child: const Text("Yes"))
              ],
            ));
  }
}
