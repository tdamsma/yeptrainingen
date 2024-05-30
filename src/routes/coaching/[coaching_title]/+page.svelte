<script lang="ts">
	export let data;

	interface ImageModule {
		default: string;
	}

	const imageModules = import.meta.glob(
		'$content/coaching/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
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
              enhanced:img.img-fluid(style="object-fit: contain; max-height: 800px; " src="{imageModules[`/content/coaching/${data.img}`].default}" alt="{data.alt}")
          h2 {data.title}
         
          .coaching-details-body
            svelte:component(this="{data.content}")
      .col-lg-3.col-md-4.col-sm-5.sidebar
        +each('data.surroundingDocuments as surroundingdata')
          .card.mt-5.overflow-hidden.bg-dark.text-white
            enhanced:img.card-img-top.rounded-0(src="{imageModules[`/content/coaching/${surroundingdata.meta.img}`].default}"	 alt="{surroundingdata.meta.alt}")
            .card-body.p-3
              h5.smalltext.card-title {surroundingdata.meta.title}
            a.stretched-link.font-bold(href=`/coaching/{surroundingdata.path}`)
</template>

<style lang="scss">
	.smalltext {
		font-size: 16px;
	}

	.nuxt-content > p > img {
		max-height: 500px;
		max-width: 100%;
		display: block;
		margin-left: auto;
		margin-right: auto;
		-webkit-filter: drop-shadow(5px 5px 5px #999);
		filter: drop-shadow(5px 5px 5px #999);
		margin-bottom: 20px;
		margin-top: 20px;
	}
	.card-img-top {
		height: auto;
	}
</style>
