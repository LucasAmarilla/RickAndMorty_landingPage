<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	let final = [];
	const getPerosnagens = async () => {
		let personagens = [];

		const res = await fetch('https://rickandmortyapi.com/api/character');
		const json = await res.json();

		for (let i = 0; i < 6; i++) {
			let img = '';
			switch (json.results[i].name) {
				case 'Rick Sanchez':
					img = 'https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-non-toxic-rick-sanchez-18.png';
					break;
				case 'Morty Smith':
					img = 'https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-rick-morty-projectacademy-medium-17.png';
					break;
				case 'Summer Smith':
					img = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e360559-b08a-4367-bcf3-0851f92ed33f/dfhinug-77eff2dc-6496-4a42-8f4b-2fad94750844.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlMzYwNTU5LWIwOGEtNDM2Ny1iY2YzLTA4NTFmOTJlZDMzZlwvZGZoaW51Zy03N2VmZjJkYy02NDk2LTRhNDItOGY0Yi0yZmFkOTQ3NTA4NDQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xCQ4exTVnPA-Zrz9ic1gou7NBP3POtobb5TlRGUpczg';
					break;
				case 'Beth Smith':
					img = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8e360559-b08a-4367-bcf3-0851f92ed33f/df3vhtq-097c0abb-541e-4045-b051-4e5d49558f88.png/v1/fill/w_816,h_980/beth_smith_png_by_jakeyfrollogothel_df3vhtq-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAzMiIsInBhdGgiOiJcL2ZcLzhlMzYwNTU5LWIwOGEtNDM2Ny1iY2YzLTA4NTFmOTJlZDMzZlwvZGYzdmh0cS0wOTdjMGFiYi01NDFlLTQwNDUtYjA1MS00ZTVkNDk1NThmODgucG5nIiwid2lkdGgiOiI8PTg1OSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Xtu3WXOed0l0Y7-DwesHYZsafy_cTONs-6kPMAgyWLw';
					break;
				case 'Jerry Smith':
					img = 'https://www.nicepng.com/png/full/74-749613_image-jerrytransparent-wiki-fandom-jerry-smith-rick-and.png';
					break;

				default:
					img =
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThudZ9ddpz-SvfJ1ipQoFE7MuU7d7sPfM3NS5MhSSNVA6SCNRvDgGdTTD4J6p0D8vH3Gs&usqp=CAU';
			}
			const personagem = {
				id: json.results[i].id,
				name: json.results[i].name,
				image: img
			};

			personagens.push(personagem);
		}
		return personagens;
	};
	onMount(async () => {
		final = await getPerosnagens();
		console.log(final);
	});
</script>

<div class="container bg-lime-300 mx-auto mt-10 w-4/5 rounded-lg font-fonte_legal overflow-hidden">
	<h1 class="text-center font-semibold text-2xl">Personagems pricipais</h1>

	<div class="grid md:grid-cols-3 gap-4">
		{#each final as { id, name, image }, i}
			<div
				class="bg-white w-72 m-4 rounded-lg mx-auto overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:scale-105 hover:bg-gray-200"
			>
				<h1 class="justify mx-2"><b>Id:</b>{id}</h1>
				<img src={image} class="mx-auto w-64 h-60" alt="" srcset="" />
				<h1 class="text-center">{name}</h1>
			</div>
		{/each}
	</div>
</div>
