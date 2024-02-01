<script>
	export let titulo = "";
	export let  subtitulo = "";
	export const img = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5bffb50-795a-4fcd-b892-52caa775b601/dewh6ww-b89b1fb9-f9c8-43c2-8f0f-655d464b4693.png/v1/fill/w_500,h_556/rick_and_morty_png_by_trentonxsterling88_dewh6ww-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU2IiwicGF0aCI6IlwvZlwvYTViZmZiNTAtNzk1YS00ZmNkLWI4OTItNTJjYWE3NzViNjAxXC9kZXdoNnd3LWI4OWIxZmI5LWY5YzgtNDNjMi04ZjBmLTY1NWQ0NjRiNDY5My5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.py2SiPjbG7BFPPt5hMGZ7gfV2wICTkO2-CigWX7QPkU';

</script>

<main class="md:pt-72 md:pb-60 ">
	<div class="grid grid-cols-1 md:grid-cols-2 md:w-980px mx-auto">
		<div class="mx-auto my-20 md:mr-10 md:pt-10">
			<h1 class="font-fonte_legal font-bold text-6xl">{titulo}</h1>
			<p class="mt-3 font-fonte_foda font-thin text-2xl">{subtitulo}</p>
		</div>
        <div class="mx-auto md:ml-10 md:-mt-20">
			<img src={img} alt="" >
		</div>
	</div>
</main>
