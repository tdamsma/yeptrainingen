<template lang="pug">
div
  b-navbar(toggleable="lg", type="light", variant="light")
    .container.d-flex.justify-content-between
      b-navbar-brand(href="#")
        img(src="/images/Logo-Yep-300x122.png", alt="yeptrainingen")

      b-navbar-toggle target="nav-collapse"

      b-collapse#nav-collapse(is-nav="")
        b-navbar-nav
          b-nav-item(href="#") Yep
          b-nav-item(href="#") Ons team
          b-nav-item(href="#") Trainingsaanbod
          b-nav-item(href="#") Coachingsaanbod
          b-nav-item(href="#") Voor werkgevers
          b-nav-item(href="#") Blog
</template>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
