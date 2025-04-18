<template>
  <div class="min-h-screen relative overflow-hidden bg-slate-50">
    <!-- SVG Gradient Background for Hero -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <defs>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6366F1" stop-opacity="0.18"/>
            <stop offset="0.5" stop-color="#3B82F6" stop-opacity="0.12"/>
            <stop offset="1" stop-color="#06B6D4" stop-opacity="0.10"/>
          </linearGradient>
          <radialGradient id="hero-radial" cx="50%" cy="40%" r="50%" fx="50%" fy="40%" gradientUnits="userSpaceOnUse">
            <stop stop-color="#a5b4fc" stop-opacity="0.35"/>
            <stop offset="1" stop-color="#fff" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-gradient)"/>
        <ellipse cx="75%" cy="20%" rx="25%" ry="20%" fill="url(#hero-radial)"/>
        <ellipse cx="25%" cy="80%" rx="25%" ry="20%" fill="url(#hero-radial)"/>
      </svg>
    </div>

    <!-- Decorative SVG Blobs -->
    <div class="pointer-events-none absolute -top-1/4 -left-1/4 w-1/2 h-1/2 max-w-[36rem] max-h-[36rem] z-0">
      <svg viewBox="0 0 600 600" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#6366F1" stop-opacity="0.18"/>
            <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="300" cy="300" rx="300" ry="300" fill="url(#blob1)" />
      </svg>
    </div>
    <div class="pointer-events-none absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 max-w-[28rem] max-h-[28rem] z-0">
      <svg viewBox="0 0 600 600" class="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="blob2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.13"/>
            <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <ellipse cx="300" cy="300" rx="300" ry="300" fill="url(#blob2)" />
      </svg>
    </div>
    
    <!-- Hero Section -->
    <header class="py-24 px-4 md:px-8 relative z-10">
      <div class="max-w-6xl mx-auto relative">
        <div class="text-center">
          <div class="inline-block mb-6">
            <h1 class="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-400 drop-shadow-lg">
              Smart Pricing for <span class="text-gray-900">Smart Business</span>
            </h1>
          </div>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Automatically optimize your prices based on real-time traffic and demand. Boost your revenue with AI-powered dynamic pricing.
          </p>
          <button class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-xl hover:shadow-blue-200">
            Start Free Trial
          </button>
        </div>
      </div>
    </header>

    <!-- Features Section -->
    <section class="py-16 px-4 md:px-8 relative z-10">
      <div class="absolute inset-0 bg-gradient-to-t from-blue-50/60 to-transparent"></div>
      <div class="max-w-6xl mx-auto relative">
        <h2 class="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400">
          Why Choose Dynamic-Price?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-blue-100">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Real-time Analytics</h3>
            <p class="text-gray-600">Monitor traffic patterns and adjust prices automatically based on demand.</p>
          </div>
          
          <div class="p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-blue-100">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Maximize Revenue</h3>
            <p class="text-gray-600">Optimize pricing strategies to increase profits and customer satisfaction.</p>
          </div>

          <div class="p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 border border-blue-100">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Easy Integration</h3>
            <p class="text-gray-600">Seamlessly integrate with your existing e-commerce platform.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 via-indigo-50/60 to-white relative z-10">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-indigo-100/30"></div>
      <div class="max-w-4xl mx-auto text-center relative">
        <h2 class="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-400">
          Ready to Transform Your Pricing Strategy?
        </h2>
        <p class="text-xl text-gray-600 mb-8">Join thousands of businesses already using Dynamic-Price to optimize their revenue.</p>
        <div class="flex flex-col md:flex-row gap-4 justify-center">
          <button class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-xl hover:shadow-blue-200">
            Get Started
          </button>
          <button class="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-blue-200">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
// Add any required functionality here
</script>

<style>
/* Add any custom styles here if needed */
</style>