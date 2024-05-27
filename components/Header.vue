<template lang="pug">
div
  b-navbar(toggleable='lg', type='light', variant='light')
    .container.d-flex.justify-content-between
      b-navbar-brand(to='/')
        img.ml-2(src='~/assets/images/Logo-Yep-300x122.png', alt='yeptrainingen')

      b-navbar-toggle.mr-2(target='nav-collapse')

      b-collapse#nav-collapse(is-nav='')
        b-navbar-nav.ml-4
          b-nav-item(to='/') {{ $t('home') }}
          b-nav-item(href='/team') {{ $t('team') }}
          b-nav-item(href='/trainingen') {{ $t('trainings') }}
          b-nav-item(href='/coaching') {{ $t('coaching') }}
          b-nav-item(href='/onze-aanpak') {{ $t('ourApproach') }}
          b-nav-item(to='/blog') {{ $t('blog') }}
        b-navbar-nav.ml-auto
          b-nav-item-dropdown(right)
            template(v-slot:button-content)
              span.flag-icon(:class="`flag-icon-${$i18n.locale}`")
              | {{ $i18n.locale.toUpperCase() }}
            b-dropdown-item(@click="changeLocale('en')") English
            b-dropdown-item(@click="changeLocale('nl')") Nederlands

</template>

<script>
export default {
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
}
</script>

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
