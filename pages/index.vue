<template>
  <div>
    <!-- Top Bar -->
    <div class="bg-[#301E4A] text-white text-sm py-2"> <!-- Direct hex or use configured name bg-brand-purple-dark -->
      <div class="container mx-auto flex justify-center md:justify-between items-center flex-wrap px-4">
         <span class="font-semibold mr-4 hidden md:inline">S&P 500 Direct</span>
         <span>Index investing that can help you unlock tax savings on your stock comp.
           <a href="#" class="font-semibold underline hover:no-underline ml-1">Learn more</a>
         </span>
      </div>
    </div>

    <!-- Header Section -->
    <header class="bg-[#F7F5FA] sticky top-0 z-50 shadow-sm"> <!-- Direct hex or use configured name bg-brand-lavender -->
      <div class="container mx-auto flex justify-between items-center py-3">
        <!-- Logo -->
        <a href="#" class="flex items-center">
          <!-- Placeholder for Wealthfront Logo SVG or Image -->
          <!-- Replace text with actual SVG or <img> tag -->
          <img src="/favicon.ico" alt="Wealthfront Logo" class="h-8 w-auto">
          <!-- Fallback Text Logo if SVG fails -->
          <!-- <span class="text-2xl font-bold text-[#4A2E6F]">Wealthfront</span> -->
        </a>

        <!-- Navigation Links (Desktop) -->
        <nav class="hidden md:flex items-center space-x-6">
          <a href="#" class="text-gray-700 hover:text-[#4A2E6F] font-medium">Cash</a>
          <a href="#" class="flex items-center text-gray-700 hover:text-[#4A2E6F] font-medium">
            Bonds
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1 text-gray-400">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </a>
           <a href="#" class="flex items-center text-gray-700 hover:text-[#4A2E6F] font-medium">
            Automated Investing
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1 text-gray-400">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="#" class="text-gray-700 hover:text-[#4A2E6F] font-medium">Stocks</a>
           <a href="#" class="flex items-center text-gray-700 hover:text-[#4A2E6F] font-medium">
            Learn
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1 text-gray-400">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </a>
        </nav>

        <!-- Action Buttons -->
        <div class="flex items-center space-x-3">
           <!-- Log In Button (Outline Style) -->
           <button class="px-6 py-2 rounded-md font-semibold transition duration-150 ease-in-out border border-[#4A2E6F] text-[#4A2E6F] hover:bg-[#4A2E6F] hover:text-white">
             Log In
           </button>
           <!-- Get Started Button (Primary Style) -->
           <button class="px-6 py-2 rounded-md font-semibold transition duration-150 ease-in-out bg-[#4A2E6F] text-white hover:bg-opacity-90">
             Get started
           </button>
        </div>

         <!-- Mobile Menu Button (Basic) -->
         <button class="md:hidden p-2 text-gray-600">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
           </svg>
         </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-[#F7F5FA] pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden"> <!-- Direct hex or use configured name bg-brand-lavender -->
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Left Column: Text Content -->
          <div>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A2E6F] leading-tight mb-6"> <!-- Direct hex or use configured name text-brand-purple -->
              Money works <br class="hidden md:inline"> better here.
            </h1>
            <div class="space-y-6 mb-8">
              <!-- Feature 1: Earn APY -->
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#4A2E6F]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>
                </div>
                <div>
                  <p class="text-lg font-semibold text-[#4A2E6F]">Earn 4.00% APY*</p>
                  <p class="text-gray-600">on your cash from partner banks.</p> <!-- Use text-brand-gray if configured -->
                </div>
              </div>
              <!-- Feature 2: Invest -->
              <div class="flex items-start gap-4">
                 <div class="flex-shrink-0 w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#4A2E6F]">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591M12 6.375a3.375 3.375 0 0 0-3.375 3.375h6.75A3.375 3.375 0 0 0 12 6.375Zm-2.25 3.375a2.625 2.625 0 0 1 5.25 0h-5.25Z" />
                   </svg>
                 </div>
                <div>
                  <p class="text-lg font-semibold text-[#4A2E6F]">Invest with expert-built portfolios and strategies.</p>
                </div>
              </div>
            </div>
             <!-- Get Started Button (Primary Style, Large) -->
            <button class="px-8 py-3 text-lg rounded-md font-semibold transition duration-150 ease-in-out bg-[#4A2E6F] text-white hover:bg-opacity-90">
              Get started
            </button>
            <p class="text-xs text-gray-400 mt-3">*Rate subject to change.</p> <!-- Use text-brand-gray-light if configured -->
          </div>

          <!-- Right Column: Phone Image -->
           <div class="relative flex justify-center md:justify-end">
             <div class="max-w-xs w-full transform -rotate-3" style="perspective: 1000px;"> <!-- Inline style for perspective -->
                <img src="/favicon.ico" alt="Wealthfront app interface on a phone" class="rounded-3xl shadow-2xl w-full">
                <!-- NOTE: Ensure 'phone-mockup.png' is in the 'public/' directory -->
             </div>
           </div>
        </div>
      </div>
    </section>

    <!-- Awards / Social Proof Section -->
    <section class="bg-[#F7F5FA] py-8">
       <div class="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 flex-wrap">
          <!-- NerdWallet -->
          <div class="text-center md:text-left">
             <img src="/favicon.ico" alt="Nerdwallet Logo" class="h-6 mx-auto md:mx-0 mb-2 opacity-70">
             <p class="text-sm text-gray-600">Best Robo-advisor, Portfolio Options, 2023<sup class="text-xs">1</sup></p>
             <p class="text-sm text-gray-600">Best Robo-advisor, IRA, 2022<sup class="text-xs">1</sup></p>
          </div>
          <!-- Bankrate -->
          <div class="text-center md:text-left">
              <img src="/favicon.ico" alt="Bankrate Logo" class="h-6 mx-auto md:mx-0 mb-2 opacity-70">
             <p class="text-sm text-gray-600">Best Cash Management Account, 2023-24<sup class="text-xs">1</sup></p>
             <p class="text-sm text-gray-600">Best Investing App, 2024<sup class="text-xs">1</sup></p>
          </div>
       </div>
    </section>

     <!-- Stats Section -->
    <section class="bg-[#F7F5FA] pt-8 pb-16">
      <div class="container mx-auto">
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
          <!-- Stat 1: Trusted Clients -->
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1">1M+</p>
            <p class="text-sm text-gray-600">Trusted clients</p>
          </div>
          <!-- Stat 2: Total Assets -->
           <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1">$80B+</p>
            <p class="text-sm text-gray-600">In total assets</p>
          </div>
          <!-- Stat 3: Apple App Store -->
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1">
              4.8<span class="text-yellow-500 align-super text-xl ml-1">★</span>
              <sup class="text-xs font-normal top-[-0.8em] ml-0.5">2</sup>
            </p>
            <p class="text-sm text-gray-600">Apple App Store</p>
          </div>
          <!-- Stat 4: Google Play Store -->
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1">
              4.9<span class="text-yellow-500 align-super text-xl ml-1">★</span>
              <sup class="text-xs font-normal top-[-0.8em] ml-0.5">2</sup>
            </p>
            <p class="text-sm text-gray-600">Google Play Store</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Teaser Section -->
    <section class="border-t border-gray-200">
       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <!-- Product 1: Cash Account -->
          <div class="p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-green-50">
              <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">"NOW" MONEY</p>
              <h3 class="text-lg font-semibold text-[#4A2E6F]">Cash Account</h3>
          </div>
          <!-- Product 2: Bond Ladder -->
          <div class="p-6 border-b md:border-b-0 lg:border-r border-gray-200 bg-purple-50">
             <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">"SOON" MONEY</p>
             <h3 class="text-lg font-semibold text-[#4A2E6F]">Automated Bond Ladder</h3>
          </div>
           <!-- Product 3: Automated Investing -->
          <div class="p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-yellow-50">
             <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">"LATER" MONEY</p>
             <h3 class="text-lg font-semibold text-[#4A2E6F]">Automated Investing Account</h3>
          </div>
           <!-- Product 4: Stock Investing -->
          <div class="p-6 border-gray-200 bg-blue-50"> <!-- Removed borders on the last item -->
             <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">"DIY" MONEY</p>
             <h3 class="text-lg font-semibold text-[#4A2E6F]">Stock Investing Account</h3>
          </div>
       </div>
    </section>

    <!-- Footer Section -->
    <footer class="py-8 bg-gray-100 text-center text-sm text-gray-500">
      Placeholder Footer - Add detailed disclosures, links, and copyright here.
       <div class="mt-4 text-xs container mx-auto px-4">
          <p class="mb-1">1. Nerdwallet/Bankrate award source information and date ranges go here...</p>
          <p class="mb-1">2. App Store rating source and date as of go here...</p>
          <p class="mt-4">© {{ new Date().getFullYear() }} Wealthfront Clone Example. All rights reserved (or appropriate legal text).</p>
       </div>
    </footer>

  </div>
</template>

<script setup>
// No imports needed as components are inlined
// You can add page-specific logic here if required
</script>

<style>
/* You can add global or page-specific non-Tailwind styles here if needed */
/* Example: Ensure body has a reasonable default font if not set globally */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* Style for the footnote superscript to better match */
sup {
    vertical-align: super;
    font-size: smaller;
}
</style>