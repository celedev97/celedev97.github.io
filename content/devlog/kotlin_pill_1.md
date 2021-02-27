---
title: "Kotlin's pills #1"
date: 2020-07-17T18:24:53+02:00
toc: false
images:


tags:
  - kotlin
  - kotlin_pills
---

Why is kotlin awesome?

Because unlike java it doesn't sucks.

For example kotlin have properties:

```kotlin
var test = "hello"
  get(){
    return field + " world"
  }
  set(value){
    field = value
  }
```

Does this look like the classical Java shit with getters and setters?

Yes it does, but...

You can use it like this
```kotlin
test = "what a shitty"
println(test)
```
OUTPUT:
```
what a shitty world
```

<hr>

This is the most awesome thing ever, as it makes everything more simple, no more:
```java
dog.getOwner().getDad().setName("Patrick")
```

This just becomes:
```kotlin
dog.owner.dad.name = "Patrick"
```

That's way more synthetic and clear.

Plus it keeps its interoperability with Java since on compile-time it get translated to a private field with public getter and setter.

<hr>

Another super nice thing is that kotlin automatically turn Java getters and setters into Kotlin properties.

So from Kotlin you can reference a Java class and if it has the correct naming convention you can use its properties without the need to call getters and setters.

<hr>

Protip:

If the get is a single line you can make it shorter by writing it like this:

```kotlin
var test = "hello"
  get() = field + " world"
  set(value){
    field = value
  }
```