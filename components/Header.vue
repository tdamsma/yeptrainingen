<template lang="pug">
div
  b-navbar(toggleable="lg", type="light", variant="light")
    .container.d-flex.justify-content-between
      b-navbar-brand(href="#")
        img(src="/images/Logo-Yep-300x122.png", alt="yeptrainingen")

      b-navbar-toggle(target="nav-collapse")

      b-collapse#nav-collapse(is-nav="")
        b-navbar-nav
          b-nav-item(to="/") Yep
          b-nav-item(href="#") Ons team
          b-nav-item(href="#") Trainingsaanbod
          b-nav-item(href="#") Coachingsaanbod
          b-nav-item(href="#") Voor werkgevers
          b-nav-item(to="/blog") Blog
</template>

<style>
</style>
