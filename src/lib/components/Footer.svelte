<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="jumbotron" style="background-color: #807d7d">
	<div class="container">
		<div class="row">
			<div class="col-md-4 text-light">
				<h2>Site-map</h2>
				<div class="row">
					<div class="col-sm-6">
						&gt;&nbsp; <a class="link-geel" href="/">{m.footer_home()}</a><br />
						&gt;&nbsp; <a class="link-geel" href="/team">{m.footer_team()}</a><br />
						&gt;&nbsp; <a class="link-geel" href="/trainingen">{m.footer_trainingen()}</a><br />
						&gt;&nbsp; <a class="link-geel" href="/coaching">{m.footer_coaching()}</a><br />
					</div>
					<div class="col-sm-6">
						&gt;&nbsp; <a class="link-geel" href="/blog">{m.footer_blog()}</a><br />
						&gt;&nbsp; <a class="link-geel" href="/tarieven">{m.footer_tarieven()}</a><br />
						&gt;&nbsp; <a class="link-geel" href="/klachten">{m.footer_klachten()}</a><br />
						&gt;&nbsp; <a class="link-geel" href="/contact">{m.footer_contact()}</a><br />
					</div>
				</div>
			</div>
			<div class="col-md-1"></div>
			<div class="col-md-3 text-light">
				<h2 class="mb-4">{m.footer_gegevens()}</h2>
				<p>
					Yep Trainingen<br />
					<br />
					<br /><br />
					KvK: 58989463<br />
					BTW: NL001795751B66<br />
					IBAN: NL49TRIO0254729886<br />
				</p>
			</div>
			<div class="col-md-1"></div>
			<div class="col-md-3 text-light">
				<enhanced:img
					sizes="min(1280px, 100vw)"
					src="/static/images/Logo-Yep-300x122.png"
					alt="yeptrainingen"
				/>
				<p></p>
				<a href="mailto:info@yeptrainingen.nl" target="_blank">
					<enhanced:img sizes="min(1280px, 100vw)" src="/static/images/email.png" alt="email" />
				</a>
				<a href="https://www.facebook.com/Yeptrainingen" target="_blank">
					<enhanced:img
						sizes="min(1280px, 100vw)"
						src="/static/images/facebook.png"
						alt="facebook"
					/>
				</a>
				<a href="https://twitter.com/yeptrainingen" target="_blank">
					<enhanced:img sizes="min(1280px, 100vw)" src="/static/images/twitter.png" alt="twitter" />
				</a>
				<a href="https://www.linkedin.com/company/marijn-blaisse-trainingen" target="_blank">
					<enhanced:img
						sizes="min(1280px, 100vw)"
						src="/static/images/linkedin.png"
						alt="linkedin"
					/>
				</a>
				<p></p>
				{m.footer_telefoon()}
			</div>
		</div>
	</div>
</div>
