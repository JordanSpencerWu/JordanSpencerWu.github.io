---
author: [Steve McConnell]
date: 2016-10-11
description: This book contains many useful tips about software construction and best practices on creating clean code. A list of issues that can happen during software construction and how to avoid them by testing your code before writing them. The best part is the checklist at the end of every section containing useful items to check for during software construction.
seo-description: Code complete second edition - a practical handbook of software construction by Steve McConnell notes.
title: Working Classes
---

A class is a collection of data and routines that share a cohesive, well-defined responsibility. An abstract data type is a collection of data and operations that work on that data. The operations both describe the data to the rest of the program and allow the rest of the program to change the data. Understanding ADT allows programmers to create classes that are easier to implement initially and easier to modify over time. One way of thinking of class is as an abstract data type plus inheritance and polymorphism.

A good interface consists of creating a good abstraction for the interface to represent and ensuring that the details remain hidden behind the abstraction. A class interface provides an abstraction of the implementation that's hidden behind the interface. Abstraction helps to manage complexity by providing models that allow you to ignore implementation details. Encapsulation is the enforcer that prevents you from looking at the details even if you want to.

Containment is the simple idea that a class contains a primitive data element or object. One way of thinking of containment is as a "has a" relationship.

Inheritance is the idea that one class is a specialization of another class. The purpose of inheritance is to create simpler code by defining a base class that specifies common elements of two or more derived classes. Inheritance helps avoid the need to repeat code and data in multiple locations by centralizing it within a base class. When a programmer decides to create a new class by inheriting from an existing class, that programmer is saying that the new class "is a" more specialized version of the older class.