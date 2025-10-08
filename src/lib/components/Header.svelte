<script lang="ts">
	let mobileMenuOpen = false;
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<header class="bg-white shadow-md fixed w-full top-0 z-50">
	<nav class="container-custom">
		<div class="flex justify-between items-center py-4">
			<!-- Logo -->
			<a href="/" class="flex items-center space-x-3">
				<div class="text-2xl font-bold text-primary">
					WINFOCUS <span class="text-primary-light">Fellowship</span>
				</div>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				<a href="/" class="text-dark hover:text-primary transition-colors font-medium">Home</a>
				<a href="/faculty" class="text-dark hover:text-primary transition-colors font-medium"
					>Faculty</a
				>
				<a
					href="/apply"
					class="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors"
					>Apply Now</a
				>
			</div>

			<!-- Mobile Menu Button -->
			<button class="md:hidden text-dark" onclick={toggleMobileMenu} aria-label="Toggle menu">
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					{#if mobileMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						></path>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					{/if}
				</svg>
			</button>
		</div>

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="md:hidden pb-4 space-y-3">
				<a
					href="/"
					class="block py-2 text-dark hover:text-primary transition-colors font-medium"
					onclick={toggleMobileMenu}>Home</a
				>
				<a
					href="/faculty"
					class="block py-2 text-dark hover:text-primary transition-colors font-medium"
					onclick={toggleMobileMenu}>Faculty</a
				>
				<a
					href="/apply"
					class="block bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors text-center"
					onclick={toggleMobileMenu}>Apply Now</a
				>
			</div>
		{/if}
	</nav>
</header>

<!-- Spacer to prevent content from going under fixed header -->
<div class="h-20"></div>
