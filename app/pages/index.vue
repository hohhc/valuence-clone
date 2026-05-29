<template>
  <main class="flex-grow">
    <!-- Hero をピン留めし、Mission が上に重なってスクロールする（PC のみ） -->
    <div class="relative">
      <div class="h-screen md:sticky md:top-0 z-0">
        <HeroSection />
      </div>
      <div class="relative z-10 bg-white">
        <MissionSection />
      </div>
    </div>
    <BusinessArea />
    <CdcSection />
    <GlobalAction />
    <ValuenceInNumbers />
    <NewsSection />
    <GroupSection />
    <RecruitBanner />
  </main>
</template>

<script setup>
useHead({
  title: 'Valuence Holdings - Circular Design Company'
})
</script>