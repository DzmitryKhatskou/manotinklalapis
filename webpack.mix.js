let mix = require("laravel-mix");

mix.js(["src/app.js", "js/mdb.min.js", "plugins/js/all.min.js"], "dist/app.js");

mix.setPublicPath("dist");

mix.css("src/app.css", "dist");

require("laravel-mix-webp");

mix.ImageWebp({
  disable: false,
  from: "img",
  to: "dist/img",
  imageminWebpOptions: {
    quality: 50,
  },
});

mix.copy("mail.php", "dist");
