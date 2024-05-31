<script lang="ts">
	export let data;

	interface ImageModule {
		default: string;
	}

	const imageModules = import.meta.glob(
		'$content/trainingen/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, ImageModule>;
</script>

<template lang="pug">
div
  .container.mt-3.mb-3.bg-white.pt-4
    .row
      .col-lg-9.col-md-8.col-sm-12
        .container
          .text-center.mb-4
            +if('data.img')
              enhanced:img.img-fluid(class="post-title-img" src="{imageModules[`/content/trainingen/${data.img}`].default}" alt="{data.alt}")
          h2 {data.title}
          .training-details-body
            svelte:component(this="{data.content}")
          div.text-center.pt-2
            button.m-1.btn.btn-primary(title="Stuur een email" onclick="window.location.href='mailto:marijn@yeptrainingen.nl?subject=Informatieverzoek training: {data.title}';") Informeer
            +if('data.springest')
              button.m-1.btn.btn-primary(title="Via Springest" onclick="window.open(`{data.springest}#ervaringen`);") Meer Ervaringen
      .col-lg-3.col-md-4.col-sm-5.sidebar
        +each('data.surroundingDocuments as surroundingdata')
          .card.mt-5.overflow-hidden.bg-dark.text-white
            enhanced:img.card-img-top.rounded-0(src="{imageModules[`/content/trainingen/${surroundingdata.meta.img}`].default}"	 alt="{surroundingdata.meta.alt}")
            .card-body.p-3
              h5.smalltext.card-title {surroundingdata.meta.title}
            a.stretched-link.font-bold(href=`/trainingen/{surroundingdata.path}`)
</template>

<style lang="scss">
	.smalltext {
		font-size: 16px;
	}

	.card-img-top {
		height: auto;
	}
</style>
