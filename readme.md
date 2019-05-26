# What

A simple colorful welcome pattern (ascii word) for my terminal  
Just For fun ;)

![intro](https://user-images.githubusercontent.com/5526096/58380709-089a1780-7fe7-11e9-8c4b-d9337b0571e7.gif)

# How

No, I'd not to publish it to npm or what, because the project is so personal.  
And I want to keep it simple.

You can read the source code and write your own one,  
or just simply fork and change the content in `./cli.js`.

**Installation:**

Install `Node` first.

Then

```
# git clone the repo
git clone https://github.com/seognil-craft/color-welcome
cd color-welcome

npm i
npm link
```

**Usage:**

Just type the command in terminal,  
And add it to your `.bashrc / .zshrc`

```
color-welcome
```

**Uninstallation:**

unlink the package and you can safely remove the code folder.

```
npm uninstall -g color-welcome
```

Or this one if you linked it with yarn.

```
yarn unlink color-welcome
```
