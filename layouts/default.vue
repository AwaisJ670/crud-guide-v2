<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="container mx-auto flex-1 my-4">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
