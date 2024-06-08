<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<template lang="html">
	<div>
		<div class="jumbotron jumbotron-fluid yep-geel">
			<div class="container">
				<div class="row justify-content-around">
					<h1>{m.contact_title()}</h1>
				</div>
			</div>
		</div>
		<div class="container p-4 text-center">
			<h2>{m.contact_company_name()}</h2>
			<p innerHTML={m.contact_address()}></p>
			<p>{m.contact_information()}</p>
			<p>{m.contact_training()}</p>
			<p>{m.contact_coaching()}</p>
			<p innerHTML={m.contact_kvk()}></p>
			<p innerHTML={m.contact_vat()}></p>
			<p innerHTML={m.contact_iban()}></p>
		</div>

		<div class="container_fluid mt-6 p-4 bg-white">
			<div class="container">
				<form
					id="mc4wp-form-1"
					class="mc4wp-form mc4wp-form-1369 mc4wp-form-theme mc4wp-form-theme-green"
					method="post"
					data-id="1369"
					data-name="Volg onze nieuwsbrief"
				>
					<div class="mc4wp-form-fields">
						<h2>{m.contact_newsletter_title()}</h2>
						<p>
							{m.contact_newsletter_text()}
						</p>

						<p>
							<label>{m.contact_name_label()}</label><br />
							<input
								type="text"
								name="NAAM"
								placeholder={m.contact_name_placeholder()}
								required=""
							/>
						</p>
						<p>
							<label>{m.contact_email_label()}:</label><br />
							<input
								type="email"
								name="EMAIL"
								placeholder={m.contact_email_placeholder()}
								required
							/>
						</p>
						<p>
							<input type="submit" value={m.contact_submit()} />
						</p>
						{m.contact_privacy()}
					</div>
					<label style="display: none !important"
						>{m.contact_honeypot()}
						<input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" />
					</label>
					<input type="hidden" name="_mc4wp_timestamp" value="1639488557" />
					<input type="hidden" name="_mc4wp_form_id" value="1369" />
					<input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
					<div class="mc4wp-response"></div>
				</form>
			</div>
		</div>
	</div>
</template>
