# yeptrainingen

This is the source of the website of yeptrainingen

As the website is public, I thought I might as well make the source public. It is built using Nuxt.js.
All structured content is in Markdown files that is converted to a static website at build time.

## Develop

the repo is build with bun, but on windows you can use npm

    npm run dev

## reduce image sizes

The following command will resize all images in the current directory to a maximum width of 2200 pixels using ImageMagick.

```sh
find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec sh -c '
for img do
    width=$(identify -format "%w" "$img")
    if [ "$width" -gt 1600 ]; then
        mogrify -resize 1600x "$img"
    fi
done
' sh {} +
```
