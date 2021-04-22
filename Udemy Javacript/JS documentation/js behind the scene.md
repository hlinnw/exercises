## Overview
1. JS is a high-level language: contrary to low-level language i.e. C, for high-level languages developers do not have to manage resources at all. High level langages have abstractions that take all of that work away from us.
2. JS is garbage-collected language. Garbage-collection, one of the tools to manage resources is an algorism inside the JS engine that automatically removes old, unused objects from the computer memory so we don't have to do it mannually in our code.
3. JS is interpreted or just-in-time compiled language. Inside JS engineer source code are interpreted or compiled to machine code.
4. One of the things that makes JS popular is that JS is a multi-paradigm language. In programing, paradigm is an approach and mindset of structing code, which will direct your coding style and technique. 
* There are three paradigms: 
  * Procedural programming: organizing the code in a very linear way with functions in between.
  * Object-Oriented programming: Almost everything in JS is an object, except the primitive values. We create an object from a blueprint, or the prototype that contains all the object's methods. Then the created object inherits methods from the prototype.
 * An example is to use .push method in array object
  * Functional programming.
JS does all of the three paradigms so it is very flexible and versatile so developers can use whatever paradigm they want
5. JS is a language with first-class functions, meaning functions are simply treated as variables. We can pass them into other functions and return them from functions. This allows us to use a lot of power techniques and allows for functional-programming
6. JS is a dynamically-typed language. In JS, we don't assign data types to variables. Instead they only become known when the JS engine executes our code. Also the type of variables can easily be changed as we reassign variables. The downside is the possibility of more bugs in programs. Look into Typescript for types.
7. Concurrency model: how JS engine handles multiple tasks happening at the same time. JS runs in one single thread, so it can only do one thing at a time. Therefore we need a way of handling multiple things happening at the same time. A thread is like a set of instructions that is executed in the computer's CPU. So a thread is where our code is actually executed in a machine's processor. For long-running task what we can do to prevent long-running task from blocking the single thread? The solutions is using an event loop. An event loop takes long running tasks, executes them in the background and puts them back in the main thread once they are finished.

## JS engine
1. Defintion. A program that executes JS code. Every browser has its onw JS engine but probably the most well know engine is Google's V-Eight. The V-Eight engine powers Google Chrom as well as Node.js, which is JS runtime and that we can use to build server side applications with JS outside of any brower.
2. Components and how it works. Every JS engine contains a call stack and heap. Call stack is where our code is executed using execution context. The heap is an unstructured memory pool, which stores all the objects that our application needs 

<img src="js engine.png" width="400">
