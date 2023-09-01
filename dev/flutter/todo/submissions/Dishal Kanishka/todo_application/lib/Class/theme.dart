import 'package:flutter/material.dart';
import 'package:todo_application/Constants/colors.dart';

class ThemeClass {
  static ThemeData lightTheme = ThemeData(
      primaryColor: Colors.black,
      primaryColorLight: Colors.black,
      brightness: Brightness.light,
      scaffoldBackgroundColor: Colors.white,
      colorScheme: ColorScheme.light(),
      appBarTheme: AppBarTheme(
        backgroundColor: kAppBarColor,
      ),
      canvasColor: Colors.white,
      bottomAppBarTheme: BottomAppBarTheme(color: kAppBarColor));

  static ThemeData darkTheme = ThemeData(
      primaryColor: Color(0xFF80CBC4),
      primaryColorLight: Colors.white,
      scaffoldBackgroundColor: Colors.black,
      brightness: Brightness.dark,
      colorScheme: ColorScheme.dark(),
      appBarTheme: AppBarTheme(
        backgroundColor: Colors.black,
      ),
      canvasColor: Colors.black,
      bottomAppBarTheme: BottomAppBarTheme(color: Colors.black));
}
