# yeptrainingen

This is the source of the website of yeptrainingen

As the website is public, I thought I might as well make the source public. It is built using Nuxt.js.
All structured content is in Markdown files that is converted to a static website at build time.

## Develop

npm run dev

## reduce image sizes

The following command will resize all images in the current directory to a maximum width of 2200 pixels using ImageMagick.

```sh
find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec sh -c '
for img do
    width=$(identify -format "%w" "$img")
    if [ "$width" -gt 2200 ]; then
        mogrify -resize 2200x "$img"
    fi
done
' sh {} +
```
