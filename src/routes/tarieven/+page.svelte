<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<template lang="html">
	<div>
		<div class="jumbotron jumbotron-fluid yep-geel">
			<div class="row justify-content-around">
				<h1>{m.tarieven_title()}</h1>
			</div>
		</div>
		<div class="container bg-white mt-4">
			<div class="row">
				<div class="col-md-6 p-4">
					<h2>{m.tarieven_yep_rek()}</h2>
					<p>{m.tarieven_info1()}</p>
					<p>{m.tarieven_info2()}</p>
					<p>{m.tarieven_info3()}</p>
				</div>
				<div class="col-md-6 p-4" style="background-color: lightgrey">
					<table class="table mt-5">
						<tbody>
							<tr>
								<td>{m.tarieven_training()}</td>
								<td>{m.tarieven_training_price()}</td>
							</tr>
							<tr>
								<td>{m.tarieven_preparatory_work()}</td>
								<td>{m.tarieven_preparatory_work_price()}</td>
							</tr>
							<tr>
								<td>{m.tarieven_coaching()}</td>
								<td>{m.tarieven_coaching_price()}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="container-fluid bg-white mt-4 text-center">
			<enhanced:img class="fluid" src="/static/CRKBO_erkenning.jpg" alt="CRKBO erkenning" />
		</div>
	</div>
</template>
