
<div align="center">

  <h1>🚀CoralGuesser🚀</h1>
  <br>

  <a href="https://www.youtube.com/watch?v=MdxO0hQsGZY&feature=youtu.be">
<img src="https://media.discordapp.net/attachments/969407601521590364/978050223131742288/unknown.png?width=1184&height=650"></a>

</div>



[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![GitHub commits](https://badgen.net/github/commits/Naereen/Strapdown.js)](https://GitHub.com/Naereen/StrapDown.js/commit/)
[![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)](https://github.com/Naereen/badges/)

CoralGuesser is a fun google maps-based guessing game. The player is randomly spawned into one of 11 coastal places in the world and is able to view the location in 360 degrees. 🚀 

![](https://media.discordapp.net/attachments/969407601521590364/978045581425524796/unknown.png?width=1020&height=650)

Then, they have 60 seconds to guess where they are in the world with an interactive position marking system. Based on the distance between the actual location and their guess, they receive points, making this a fun game to play with others! 🚀

![](https://media.discordapp.net/attachments/969407601521590364/978045606931087410/unknown.png?width=1020&height=650)

🚀 Playing again is as simple as clicking "play again," and the player will spawn in a new location with 60 more seconds. 

### How we made our game (Plans, ideas, inspiration)

#### Inspiration

At school, we would play a game called GeoGuessr where a user would have to guess where they are in the world, when shown a Google Maps street view. This inspired us to create a beach-guessing game.

##### Challenges

For the game, we experienced some troubles on how we could import the photospheres from Google Maps into our code. In addition, it was difficult to make a global database system for the maps and all the data that is carried along with it. In addition, there were tedious moments like looking for locations and performing research on the places that our maps were located.

##### Things we learned

We learned how to use Google Maps API; it is absolutely massive, and being able to have chipped away at just a little bit is something that we're really proud of. Also, out typescript skills were pushed to the test, and we learned a lot for that. From the basics to declaring variables all the way to the complicated stuff to using classes and importing/exporting methods, we did lots of reserach and were able to immediately implement our work!


## Running from Source

### Setup

```sh
npm i
npm start  # development
npm run build  # production
```

### Technologies
[![JavaScript](https://img.shields.io/badge/--F7DF1E?logo=javascript&logoColor=000)](https://www.javascript.com/)
[![TypeScript](https://img.shields.io/badge/--3178C6?logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)
[![Atom](https://badgen.net/badge/icon/atom?icon=atom&label)](https://atom.io)
[![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://https://npmjs.com/)

##### Small description 
For the game, we used Python, Google Maps API, and other tools as resources in order for the user to see and guess the beach. We also used some .json files in order to keep track of certain keys with respect to the selection of beaches available. The webiste is deployed with Node.js, and our project involved lots of typecscript!

### Feedback

For feedback related to this sample, please open a new issue on
[GitHub](https://github.com/seanboe/triton-shrimp/issues).


### Credits and Other Info

It was made primarily by [Ayush Nayak](https://github.com/Shad0wSeven) and [myself](https://github.com/seanboe) for [Tritonhacks 2022](https://www.tritonhacks.org). Our project also included [Coral](https://github.com/seanboe/coral), made by [Siddarth Calidas](https://github.com/t3chstop) and [Vignehs Nydhruva](https://github.com/CaptMD-11) a website that uses a neural network trained on illegal fishing boats around the world to determine if a fishing boat at some arbitrary fishing point in the world and at some time is fishing illegally or not. Originally, the plan was to put CoralGuesser on a website and Coral its subdomain since they use different deployment tools (Coral uses Django and CoralGuesser uses node.js) but the build for Coral kept failing and we ran out of time to figure it out before the end of the hackathon (we were _freaking out_). Regardless, we got 2nd place and won airpods, so it worked out well anyway!