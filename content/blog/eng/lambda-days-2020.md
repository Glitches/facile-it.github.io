---
authors: ["andreac"]
comments: true
date: "2020-04-09"
draft: false
share: true
categories: [English, Conference, Lambda-days, Krakow, Functional programming]
title: "Lambda-days-2020"
ita: "Lambda-days-2020"

languageCode: "en-US"
type: "post"
---

# Lambda Days 2021

This year, Facile attended for the first time to [Lambda Days](https://www.lambdadays.org/lambdadays2020) Conference in the beautiful polish city of Krakow.
It has been a two day full immersion, where the organizers have been able to gather speakers from all over the world
showcasing the latest trends and academic research in the functional world, spanning from beginner approaches to functional languages 
to super specific scientific applications.

This conference totally worth attending, albeit very intense (sometimens mind blowing, actually!), the talks were high quality, and perfect organization.
And very good food!

Here is a short list of talks that took our attention:

- **Keynote: How to specify it! A guide to writing properties of pure functions**

[Video](https://www.youtube.com/watch?v=G0NUOst-53U&list=PLvL2NEhYV4ZsV9Bw0wp1P46SOdtk4pFW6&index=3&t=0s)

**John Hughes** one of Haskell creators presented his QuickCheck library
He suggested first to write pure function as much as you can and creating properties by which test conditions can be automated.



- **The power of Π**

**Thorsten Altenkirch** from the University of Nottingham gave a talk about implementing dependent types
Think for a second if it was possible to base return types in functions by the value at runtime. Normally you wold think is not possible
because we should be at runtime to know the actual input vale. The truth is that with some mathematical assumptions is possible to obtain
type like non empty arrays that otherwise a compiler would not know

[Video](https://www.youtube.com/watch?v=3zT5eVHpQwA&list=PLvL2NEhYV4ZsV9Bw0wp1P46SOdtk4pFW6&index=13&t=0s)

- **Designing composable functional libraries, not just for data visualization**

[Video](https://www.youtube.com/watch?v=G1Dp0NtQHeY&list=PLvL2NEhYV4ZsV9Bw0wp1P46SOdtk4pFW6&index=11&t=0s)

**Tomas Petricek** from the Alan Turing Institute showed his tools library for data journalism
He presented this library written in `f#`, and with a live demo built some graphs highlighting the endless possibilities given from the composability.


- **Enhancing the type system with Refined Types**

[Video](https://www.youtube.com/watch?v=Fx8WXcAZWuk&list=PLvL2NEhYV4ZsV9Bw0wp1P46SOdtk4pFW6&index=28&t=0s)

**Juliano Alves**, Senior Software Engineer @TransferWise talked about refined types in Scala
Through [Refined](https://github.com/fthomas/refined) library, which is a porting from the homonymus Haskell one, he showed how is possible
constrain types using predicates and create types like below zero number and so on.



- **Effect Handlers: A New Approach to Computational Effects**

[Video](https://www.youtube.com/watch?v=6lv_E-CjGzg&list=PLvL2NEhYV4ZsV9Bw0wp1P46SOdtk4pFW6&index=37&t=0s)

**Maciej Piróg** is a researcher working on design and semantics of programming languge
His talk hinge on managing effects with `Effect handlers` instead of Monads, comparing the pros and cons of both approaches.
Then he showed how `Helium` language can handle easily and functionally effects without loosing typings.


### Conclusions

The Lambda Days is maybe one of the most important conference in the functional world and we were surprised by how well organized was.
The commitee choose carefully all the speakers giving ideas for a wide audience, from the beginner to the most advanced researchers in the field.
So if the pandemic will give some peace, surely we will be in Krakow next year!

![The Facile.it engineering team at Lambda Days 2020](/images/lambda-days-2020/the-team.jpg)
