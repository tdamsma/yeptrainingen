<template lang="pug">
div
  b-navbar(toggleable='lg', type='light', variant='light')
    .container.d-flex.justify-content-between
      b-navbar-brand(href='#')
        img.ml-2(src='~/assets/images/Logo-Yep-300x122.png', alt='yeptrainingen')

      b-navbar-toggle.mr-2(target='nav-collapse')

      b-collapse#nav-collapse(is-nav='')
        b-navbar-nav.ml-4
          b-nav-item(to='/') Yep
          b-nav-item(href='/team') Ons team
          b-nav-item(href='/training') Trainingen
          b-nav-item(href='/coaching') Coaching
          b-nav-item(href='/werkgevers') Voor werkgevers
          b-nav-item(to='/blog') Blog
</template>

<style lang="scss">
@import 'assets/scss/custom.scss';
@include media-breakpoint-down(sm) {
  .navbar-brand > img {
    height: 50px;
  }
}
@include media-breakpoint-between(sm, md) {
  .navbar-brand > img {
    height: 80px;
  }
}
</style>
