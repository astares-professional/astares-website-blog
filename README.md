# astares-website-blog

The [https://blog.astares.com](https://blog.astares.com) and [https://astares-website-blog.netlify.app](https://astares-website-blog.netlify.app) site.

This is a blog for the website done with Hugo and TailwindCSS. Theme is based on [https://hugo-theme-tailwind.tomo.dev](https://hugo-theme-tailwind.tomo.dev)
with adoptions necessary to follow brand style. Also the theme is inlined and not done as the usual git submodule.

## Quick start

to run just use [Hugo](https://gohugo.io/)
```
hugo server --disableFastRender
```

If you want to do modifications on tailwind.config.js or other just run:
```
cd /theme/tailwind
npx tailwindcss -i assets/css/main.css -o assets/css/index.css --watch
```
