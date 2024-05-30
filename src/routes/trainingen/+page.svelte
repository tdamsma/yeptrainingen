<script lang="ts">
    import { onMount } from 'svelte';
    import type { TrainingModule, ImageModule, Training } from '$lib/types';
  
    const imageModules = import.meta.glob(
      '$content/trainingen/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
      {
        eager: true,
        query: {
          enhanced: true
        }
      }
    ) as Record<string, ImageModule>;
  
    const trainingModules = import.meta.glob('$content/trainingen/*.md', {
      eager: true,
      query: {
        enhanced: true
      }
    }) as Record<string, TrainingModule>;
  
    let trainings: Training[] = [];
  
    function formatDate(date: string) {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString('en', options);
    }
  
    onMount(() => {
      trainings = Object.entries(trainingModules)
        .map(([path, module]) => ({
          path: path.replace(/\.md$/, ''),
          name: path.replace(/\.md$/, '').split('/').pop() || path,
          meta: module.metadata,
          content: module.default
        }))
        .sort((a, b) => a.meta.volgnummer - b.meta.volgnummer);
    });
  </script>
  
  
  <template lang="pug">
    div
      .jumbotron.jumbotron-fluid.yep-geel
        .row.justify-content-around
          h1 Trainingen
  
      .container.mb-5.mt-4
        p
          | Yep verzorgt maatwerk trainingen voor gedreven professionals, waarin het vergroten van je kracht en effect centraal staat. Om een idee te krijgen van
          | wat wij zoal kunnen bieden, kun je hieronder een kijkje nemen. Deze pagina kun je zien als ons portfolio: een aantal kenmerkende trainingen die wij
          | eerder verzorgd hebben. Wil je weten wat we met jouw ontwikkeldoel kunnen? Dan is het handig om even contact op te nemen!
        p.text-center
          | Hier staan onze 
          a.link-groen(href="/tarieven") tarieven
        h2.text-center.mb-3.mt-5 Trainingsoverzicht
        .row.row-cols-1.row-cols-md-3
          +each('trainings as training')
            .col.mb-4
              .card.card-cascade.narrower.min-height-330
                .view.view-cascade.overlay
                  .container2(style="height: 60%")
                    .rect-img-container
                      enhanced:img.rect-img.card-img-top.card-img(src="{imageModules[`/content/trainingen/${training.meta.img}`].default}" sizes="50vw" alt=`{training.meta.alt}`)
                      a(href="#!")
                        .mask.rgba-white-slight
                  .card-body.card-body-cascade(style="min-height: 105px")
                    h4.card-title {training.meta.title}
                    a.stretched-link.font-bold(href="/trainingen/{training.name}")
  </template>