<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<div>
	<div class="jumbotron jumbotron-fluid yep-geel">
		<div class="container">
			<div class="row justify-content-around">
				<h1>{m.klachten_title()}</h1>
			</div>
		</div>
	</div>
	<div class="container p-4">
		<p><strong>{m.klachten_expectations_title()}</strong></p>
		<p>{m.klachten_expectations_text()}</p>
		<p><strong>{m.klachten_definition_title()}</strong></p>
		<p>{m.klachten_definition_text()}</p>
		<p><strong>{m.klachten_submission_title()}</strong></p>
		<p>{m.klachten_submission_text()}</p>
		<p><strong>{m.klachten_response_title()}</strong></p>
		<p>{m.klachten_response_text()}</p>
		<p><strong>{m.klachten_confidentiality_title()}</strong></p>
		<p>{m.klachten_confidentiality_text()}</p>
		<p><strong>{m.klachten_solution_title()}</strong></p>
		<p>{m.klachten_solution_text()}</p>
		<p><strong>{m.klachten_appeal_title()}</strong></p>
		<p>{m.klachten_appeal_text()}</p>
	</div>
</div>
