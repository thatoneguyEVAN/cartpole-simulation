<a name="readme-top"></a>

# Cartpole Simulation • [![License][License]][License] [![Commits][Commits]][Commits] [![Issues][Issues]][Issues] [![Lastcommit][Lastcommit]][Lastcommit]

<!-- ABOUT THE PROJECT -->
## About The Project

I was scrolling through YouTube and saw that Dan from [The Coding Train](https://www.youtube.com/c/TheCodingTrain) uploaded a video called [Robot Controllers Part 1: PID (with Dr. Christian Hubicki)](https://www.youtube.com/watch?v=fWQWX9-8_sA). I said to myself "Now didn't you want to learn something about PID controllers." I did in fact want to do that.

Why would I want to learn this. First it's just really neat math at its core. After wrting this I have a much better understanding of how these types of systems work. Second...

I love space. I really love space. So much so I love to play games involving space. One of those games is the absolutly legendary [Kerbal Space Program](https://www.kerbalspaceprogram.com). What made this game so legendary was ones ability, through trial and error, to understand the physics concepts that govern the world around us. Also mods, specifically a mod called [kOS](https://ksp-kos.github.io/KOS/). This mod gave us the ability to write scripts and have a computer on our ship run them. This opened up alot of possibiltites to control and automate flight to space. However there was one problem. How do you tell the rocket which heading to hold, or how much thurst to use to hover. The documention of kOS was pretty clear though. There was only one thing to do. Learn how PID control systems work.

This finaly brings us back to today, right now. The reason your hopefully reading this. I watched that whole ~3 hour stream video thing, and I made my own version! Please feel free to look though the code, tear it to shreads, refactor. Have fun.


### Built With

* [![MatterJS][Matter.js]][Matter-url]
* [![MathJax][MathJax.js]][Mathjax-url]

<!-- USAGE EXAMPLES -->
## Install

1. Clone or download the repo into a folder of your choosing.
    * `git clone https://github.com/thatoneguyEVAN/cartpole-simulation`
    * Download a zip of the repo from [the repo](https://github.com/thatoneguyEVAN/cartpole-simulation)
2. Navigate to the folder you just extracted or cloned into, and open index.html

## Controls

* Left Arrow - Applied a tiny force in the left facing direction to the weight atop the pole.
* Right Arrow - Applied a tiny force in the right facing direction to the weight atop the pole.
* The Sliders - Alow you to in real time control the gains of the PID loop.


<!-- ROADMAP -->
## Roadmap

- Add some sides to contain the simulation.
- Make it a full screen simulation.
- Add some movement features.
    - Seek a target
    - Hold a target

See the [issues](https://github.com/thatoneguyEVAN/cartpole-simulation/issues) for a full list of known issues.


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- CONTACT -->
## Contact

Evan Sopchak - evan@evansopchak.org

Project Link: [https://github.com/thatoneguyEVAN/cartpole-simulation/](https://github.com/thatoneguyEVAN/cartpole-simulation/)


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [The Coding Train](https://www.youtube.com/c/TheCodingTrain)
* [Dr. Christian Hubicki](https://twitter.com/chubicki)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[Lastcommit]: https://badgen.net/github/last-commit/thatoneguyEvan/cartpole-simulation
[Issues]: https://badgen.net/github/issues/thatoneguyEvan/cartpole-simulation
[Commits]: https://badgen.net/github/commits/thatoneguyEVAN/cartpole-simulation
[License]: https://badgen.net/github/license/thatoneguyEvan/cartpole-simulation
[Matter.js]: https://badgen.net/badge/Matter.js/0.18.0/green
[MathJax.js]: https://badgen.net/badge/Mathjax/3.2/green
[Matter-url]: https://brm.io/matter-js/
[Mathjax-url]: https://www.mathjax.org
[product-screenshot]: https://i.ibb.co/2M4FHXQ/App-Screenshot.png