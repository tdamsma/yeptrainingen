<script>
	import kenmerken from './onze-aanpak.json';
	let data = kenmerken;
</script>

<template lang="html">
	<div class="container-fluid m-0 p-0 bg-white">
		<div class="jumbotron jumbotron-fluid yep-geel">
			<div class="row justify-content-around">
				<h1>Onze aanpak</h1>
			</div>
		</div>
		<div class="row overflow-hidden max-height-550">
			<div class="col-lg-6 overflow-hidden">
				<enhanced:img fluid="fluid" blank-color="#777" src="/static/images/onze-aanpak-1.jpg" />
			</div>
			<div class="col-lg-6 p-3 m-0">
				<h2>Maatschappelijke impact willen maken</h2>
				<p>
					We staan voor grote uitdagingen: de overstap naar een duurzamer economisch model gericht
					op welzijn, klimaatverandering, toenemende ongelijkheid, omgaan met corona, migratie en
					desinformatie zijn er daar een paar van.
				</p>
				<p>
					Om die het hoofd te bieden, hebben we mensen nodig die kunnen luisteren, samenwerken,
					kritisch redeneren, innoveren en bouwen. Die niet blijven hangen in (voor)oordelen,
					Top-down handelen en korte termijn winst, maar die duurzame verbeterslagen weten te
					initiëren en door te zetten. Die zichzelf pushen en niet in het comfortabele blijven
					hangen.
				</p>
				<p>Dat vergt:</p>

				<ul>
					<li>een goede dosis zelfkennis</li>
					<li>moed</li>
					<li>vaardigheden</li>
				</ul>
				<p>Die komen niet vanzelf - daarvoor moeten we onszelf ontwikkelen</p>
				<p>
					Wij geloven dat iedereen zich kan verbeteren en daardoor een meer waardevolle rol in kan
					nemen in de organisatie, maar ook in de buurt en in de maatschappij in het groot. Dit is
					waar het team van Yep elke dag zo veel mogelijk mee aan de slag wil zijn!
				</p>
			</div>
		</div>
		<div class="container m-auto bg-white pt-4">
			<h2>Op zoek naar inzicht, durf en vaardigheid.</h2>
			<p>
				Het is onze missie om samen met professionals te werken aan al die inzichten, de durf en de
				vaardigheden die nodig zijn om hun gewenste impact ook echt te kunnen maken. We hebben een
				aanpak ontwikkeld die past bij gedreven professionals. Op deze pagina lees je meer over de
				kenmerken van onze doelgroep en de werkwijze die we hanteren.
			</p>
			<p>&nbsp;</p>
			<h2>Kenmerken van onze doelgroep.</h2>
			<p>
				In 2010 begeleidden we onze eerste deelnemer. Onze focus lag in het begin op jonge talenten.
				Inmiddels zijn we honderden groepen verder en we hebben gaandeweg gemerkt dat onze werkwijze
				ook heel aansprekend is voor meer ervaren professionals. Logisch ook: want iedereen, jong en
				oud, heeft immers eens in de zoveel tijd behoefte aan een nieuwe impuls. We werken daarom
				niet alleen meer voor young professionals, maar ook voor ervaren krachten die hun stem
				(verder) willen ontdekken en laten horen. Vaak gaat het om professionals die
				maatschappelijke impact willen maken. Medewerkers die hun vleugels uit willen slaan en staan
				te popelen om zich te ontwikkelen. Heerlijk om op die manier de maatschappelijke
				organisaties die wij belangrijk vinden te kunnen ondersteunen in de drive om te vernieuwen,
				aan te blijven sluiten op wat er nodig is in de maatschappij en op de werkvloer.
			</p>
			<p>
				Wat hebben mensen die maatschappelijk (meer) impact willen maken met elkaar gemeen? De
				gedreven professionals die we binnen meer dan 20 gemeenten en vele stichtingen, verenigingen
				en commerciële bedrijven begeleidden, delen een aantal kenmerken. We noemen de belangrijkste
				kenmerken en laten aan de hand van een aantal voorbeelden zien hoe we die vertalen in onze
				werkwijze.
			</p>
		</div>

		<div class="jumbotron jumbotron-fluid mt-5 yep-grijs-donker bg-onze-aanpak">
			<enhanced:img src="/static/images/onze-aanpak.jpg" />
			<div class="row">
				{#each data as { kenmerk, aanpak }}
					<div class="col-xl-6">
						<div class="container">
							<div class="card" style="float: left; width: 50%; z-index: 2">
								<div class="card-header">
									<h2>Kenmerk</h2>
								</div>
								<div class="card-body">
									<h5>{kenmerk.title}</h5>
									{#each kenmerk.body as p}
										<p style="text-align: justify">{p}</p>
									{/each}
								</div>
							</div>
							<div
								class="card"
								style="float: right; width: 70%; position: relative; top: -50px; z-index: auto"
							>
								<div style="text-align: center" class="card-header">
									<h2>Aanpak</h2>
								</div>
								<div class="card-body">
									<h5>{aanpak.title}</h5>
									{#each aanpak.body as p}
										<p style="text-align: justify">{p}</p>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		<div class="jumbotron jumbotron-fluid bg-light">
			<div class="row">
				<div class="col-lg-6 p-4">
					<h2 class="text-center">Tips</h2>
					<p>
						Herken je de kenmerken bij je eigen medewerkers? Hoe beter je je medewerkers kent en hoe
						beter je ze hun positieve eigenschappen kunt aanboren, hoe meer ze de organisatie te
						bieden hebben. Alvast een paar tips:
					</p>
					<ul>
						<li>
							Stel je medewerkers regelmatig de vraag welke maatschappelijke impact zij zouden
							willen leveren. Wees oprecht nieuwsgierig naar de ideeën die je mensen hebben.
						</li>
						<li>
							Zorg voor een inspirerende stip op de horizon en onderzoek of je medewerkers zich
							daarmee verbonden voelen. Geef je medewerkers vervolgens zoveel mogelijk autonomie om
							zelf invulling te geven aan het &#8216;hoe?&#8217;
						</li>
						<li>
							Introduceer een cultuur van spelen en experimenteren, waarbij het toegestaan is om
							iets te proberen, zonder eraan vast te zitten. Dit geeft lucht voor die medewerkers
							bij wie perfectionisme in de weg zit.
						</li>
					</ul>
				</div>
				<div class="col-lg-6 max-height-550 overflow-hidden">
					<enhanced:img fluid="fluid" blank-color="#777" src="/static/images/IMG_2597.jpg" />
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	.bg-onze-aanpak.jumbotron img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}

	.bg-onze-aanpak.jumbotron {
		position: relative;
	}
</style>
