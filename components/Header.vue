<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container d-flex justify-content-between">
        <b-navbar-brand href="#">
          <img src="/images/Logo-Yep-300x122.png" alt="yeptrainingen" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Yep</b-nav-item>
            <b-nav-item href="#">Ons team</b-nav-item>
            <b-nav-item href="#">Trainingsaanbod</b-nav-item>
            <b-nav-item href="#">Coachingsaanbod</b-nav-item>
            <b-nav-item href="#">Voor werkgevers</b-nav-item>
            <b-nav-item href="#">Blog</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
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
