<template>
  <div class="bg-white">
    <!-- =============================== -->
    <!-- Top Bar -->
    <!-- =============================== -->

    <!-- <div class="bg-[#301E4A] text-white text-sm py-2">
      <div class="container mx-auto flex justify-center md:justify-between items-center flex-wrap px-4">
         <span class="font-semibold mr-4 hidden md:inline">S&P 500 Direct</span>
         <span>Index investing that can help you unlock tax savings on your stock comp.
           <a href="#" class="font-semibold underline hover:no-underline ml-1">Learn more</a>
         </span>
      </div>
    </div> -->

    <!-- =============================== -->
    <!-- Header Section -->
    <!-- =============================== -->
    <header
      class=" font-['Cabinet'] fixed top-4 left-1/2 -translate-x-1/2 w-[95vw] max-w-6xl bg-white/20 backdrop-blur-md shadow-2xl rounded-2xl z-50 border border-gray-200 transition-all duration-300"
      style="box-shadow: 0 8px 32px 0 rgba(80, 36, 120, 0.15);"
    >
      <div class="container mx-auto flex justify-between items-center py-2 px-4">
        <a href="#" class="flex items-center">
          <img src="/logo_big_p.png" alt="Wealthfront Logo" class="h-14 w-auto brightness-200 rounded-xl shadow">
        </a>
        <nav class="hidden md:flex items-center space-x-6">
          <a href="#" class="text-gray-700 hover:text-[#4A2E6F] transition-colors font-bold">Pricing</a>
          <a href="#" class="flex items-center text-gray-700 hover:text-[#4A2E6F] font-bold transition-colors">
            Learn
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 ml-1 text-gray-400"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
          </a>
        </nav>
        <div class="flex items-center space-x-3">
          <button class="px-6 py-2 rounded-lg font-extralight border border-[#4A2E6F] text-[#4A2E6F] bg-white/80 shadow hover:bg-[#4A2E6F] hover:text-white transition-all duration-150">Log In</button>
          <button class="px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#7b4ae2] to-[#4A2E6F] text-white shadow hover:scale-105 transition-all duration-150">Get started</button>
        </div>
        <button class="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-7 h-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
    <!-- <div class="h-10 md:h-0"></div> -->

    <!-- =============================== -->
    <!-- Hero Section -->
    <!-- =============================== -->
    <section class="bg-gradient-to-br from-[#dcc9f8] via-purple-50 to-[#F7F5FA] pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div class="font-['Cabinet']">
        <h1 class="font-['Stardom'] text-5xl md:text-6xl lg:text-8xl font-extrabold text-[#4A2E6F] leading-tight mb-6">Dynamic Pricing for <br class="hidden md:inline"> everybody, everywhere.</h1>
        <div class="space-y-6 mb-8">
          <div class="flex items-start gap-4">
          <div class="flex-shrink-0 w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#4A2E6F]"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg></div>
          <div>
            <p class="text-lg font-semibold text-[#4A2E6F]">Growth matters for us!</p>
            <p class="text-gray-600">help leverage vendor profits.</p>
          </div>
          </div>
          <div class="flex items-start gap-4">
           <div class="flex-shrink-0 w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#4A2E6F]"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591M12 6.375a3.375 3.375 0 0 0-3.375 3.375h6.75A3.375 3.375 0 0 0 12 6.375Zm-2.25 3.375a2.625 2.625 0 0 1 5.25 0h-5.25Z" /></svg></div>
          <div>
            <p class="text-lg font-semibold text-[#4A2E6F]">Smarter Prices, Bigger profits.</p>
          </div>
          </div>
        </div>
        <button class="px-8 py-3 text-lg rounded-md font-semibold transition duration-150 ease-in-out bg-[#4A2E6F] text-white hover:bg-opacity-90">Get started</button>
        <!-- <p class="text-xs text-gray-400 mt-3">*Rate subject to change.</p> -->
        </div>
         <div class="relative flex justify-center md:justify-end">
         <div class="max-w-xs w-full transform -rotate-3" style="perspective: 1000px;">
          <img src="/logo_big_p.png" alt="Wealthfront app interface on a phone" class="rounded-3xl shadow-2xl lg:-translate-x-7/12 lg:w-[170%] md:w-[130%] sm:w-[110%] md:max-w-xl">
         </div>
         </div>
      </div>
      </div>
    </section>

    <!-- =============================== -->
    <!-- Awards / Social Proof Section -->
    <!-- =============================== -->
    <section class="bg-[#F7F5FA] py-8">
       <div class="container mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 flex-wrap">
          <!-- <div class="text-center md:text-left">
             <img src="/logo_big_p.png" alt="Nerdwallet Logo" class="h-6 mx-auto md:mx-0 mb-2 opacity-70">
             <p class="text-sm text-gray-600">Best Robo-advisor, Portfolio Options, 2023<sup class="text-xs">1</sup></p>
             <p class="text-sm text-gray-600">Best Robo-advisor, IRA, 2022<sup class="text-xs">1</sup></p>
          </div>
          <div class="text-center md:text-left">
              <img src="/logo_big_p.png" alt="Bankrate Logo" class="h-6 mx-auto md:mx-0 mb-2 opacity-70">
             <p class="text-sm text-gray-600">Best Cash Management Account, 2023-24<sup class="text-xs">1</sup></p>
             <p class="text-sm text-gray-600">Best Investing App, 2024<sup class="text-xs">1</sup></p>
          </div> -->
       </div>
    </section>

     <!-- =============================== -->
    <!-- Stats Section (Hero) -->
    <!-- =============================== -->
    <section class="bg-[#F7F5FA] pt-8 pb-16 font-['Cabinet']">
      <div class="container mx-auto">
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1">+18%<span class="text-yellow-500 align-super text-xl ml-1">📈</span></p>
            <p class="text-sm text-gray-600">Revenue Uplift</p>
          </div>
           <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1">+22%<span class="text-yellow-500 align-super text-xl ml-1">🚀</span></p>
            <p class="text-sm text-gray-600">Profit Margin Growth</p>
          </div>
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1"><7 Days<span class="text-yellow-500 align-super text-xl ml-1">★</span></p>
            <p class="text-sm text-gray-600">Integration Time</p>
          </div>
          <!-- 
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1">4.9<span class="text-yellow-500 align-super text-xl ml-1">★</span><sup class="text-xs font-normal top-[-0.8em] ml-0.5">2</sup></p>
            <p class="text-sm text-gray-600">Google Play Store</p>
          </div> -->
        </div>
      </div>
    </section>

    <!-- =============================== -->
    <!-- Product Teaser Tabs -->
    <!-- =============================== -->
    <section class="border-y border-gray-200 font-['Cabinet']">
       <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div class="p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-green-50">
              <!-- <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">"NOW" MONEY</p> -->
              <h3 class="text-lg font-semibold text-[#4A2E6F]">Profit-Focused</h3>
          </div>
          <div class="p-6 border-b md:border-b-0 lg:border-r border-gray-200 bg-purple-50">
             <!-- <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">"SOON" MONEY</p> -->
             <h3 class="text-lg font-semibold text-[#4A2E6F]">Smart Pricing</h3>
          </div>
          <div class="p-6 border-b md:border-b-0 md:border-r border-gray-200 bg-yellow-50">
             <!-- <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">"LATER" MONEY</p> -->
             <h3 class="text-lg font-semibold text-[#4A2E6F]">Human Results</h3>
          </div>
          <div class="p-6 border-gray-200 bg-blue-50">
             <!-- <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">"DIY" MONEY</p> -->
             <h3 class="text-lg font-semibold text-[#4A2E6F]">Fast Decisions</h3>
          </div>
       </div>
    </section>

    <!-- =============================== -->
    <!-- Product Detail Section 1: Cash -->
    <!-- =============================== -->
    <section class="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
      <div class="py-16 px-6 lg:px-12 xl:px-20 flex flex-col justify-center order-2 md:order-1">
         <span class="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium mb-4 self-start">SHORT-TERM SAVINGS</span>
         <h2 class="font-['Cabinet'] text-4xl lg:text-5xl font-extrabold text-[#4A2E6F] mb-4 leading-tight">Aligned Revenue Sharing Model
        </h2>
         <!-- <p class="text-4xl lg:text-5xl font-bold text-[#4A2E6F] mb-6">Earn 4.00%* APY.</p> -->
         <p class="text-gray-600 mb-8">As retailers grow revenue using our tool, we grow too—creating a win-win feedback loop.
        </p>
         <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-700 mb-8">
            <div class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-red-500 flex-shrink-0 mt-px"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg> No account fees</div>
            <!-- <div class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-green-600 flex-shrink-0 mt-px"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> Free, 24/7 instant withdrawals <span class="text-gray-400">(?)</span></div> -->
            <!-- <div class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-green-600 flex-shrink-0 mt-px"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg> No minimum or maximum balance to earn 4.00%* APY</div> -->
            <div class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-green-600 flex-shrink-0 mt-px"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5H9.75v-4.5m-4.5 0H3.375a1.125 1.125 0 0 1-1.125-1.125V8.625c0-.621.504-1.125 1.125-1.125H9.75V4.5m4.5 0h1.125c.621 0 1.125.504 1.125 1.125V8.625c0 .621-.504 1.125-1.125 1.125H14.25v4.5m0 0h1.125c.621 0 1.125.504 1.125 1.125V18.75m-4.5-14.25v-1.5m0 1.5h-2.25m2.25 0h2.25" /></svg> No minimum or maximum price band.</div>
         </div>
         <div class="flex flex-col sm:flex-row gap-4 mb-4">
            <!-- <button class="px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out bg-[#4A2E6F] text-white hover:bg-opacity-90 flex-1">Join Now</button>
            <button class="px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out border border-gray-300 text-gray-700 hover:bg-gray-100 flex-1">Learn more</button> -->
         </div>
          <!-- <p class="text-xs text-gray-400 mt-1">*Rate as of 04/16/2025 and subject to change.</p> -->
      </div>
      <div class="bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center p-8 lg:p-16 relative order-1 md:order-2 min-h-[400px] md:min-h-0">
        <img src="https://tse3.mm.bing.net/th/id/OIP.jeHdMtInyTU1n9Grn8QZPAHaHa?rs=1&pid=ImgDetMain" alt="Cash Account screen" class="max-w-xs w-full rounded-3xl shadow-xl z-10">
        <!-- <img src="/favicon.ico" alt="Flying money" class="absolute bottom-10 right-10 w-24 h-auto opacity-80 hidden lg:block z-0"> -->
      </div>
    </section>

    <!-- =============================== -->
    <!-- Product Detail Section 2: Bonds -->
    <!-- =============================== -->
     <section class="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
       <div class="bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center p-8 lg:p-16 relative order-1 min-h-[400px] md:min-h-0">
         <img src="https://img.freepik.com/premium-vector/happy-client-customer-person-shaking-hands_87720-244.jpg" alt="Automated Bond Ladder screen" class="max-w-xs w-full rounded-3xl shadow-xl z-10">
         <!-- <img src="/favicon.ico" alt="Robot arm with cash" class="absolute bottom-10 right-10 w-28 h-auto opacity-80 hidden lg:block z-0"> -->
       </div>
      <div class="py-16 px-6 lg:px-12 xl:px-20 flex flex-col justify-center order-2">
         <div class="flex gap-2 mb-4">
           <!-- <span class="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">STEADY YIELD</span> -->
           <span class="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">STEADY YIELD</span>
         </div>
         <h2 class="font-['Cabinet'] text-4xl lg:text-5xl font-extrabold text-[#4A2E6F] mb-6 leading-tight">Optimizes for Willingness to Pay.</h2>
         <p class="text-gray-600 mb-8">Uses historical behavior and real-world tests to identify what your customers will pay—and when.</p>
         <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-700 mb-8">
            <!-- <div class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-green-600 flex-shrink-0 mt-px"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg> 4.13% – 4.15% Range of current yields on Treasuries in our 3-month ladder, after our advisory fee</div> -->
            <div class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-green-600 flex-shrink-0 mt-px"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.956 11.956 0 0 1 12 3c2.37 0 4.541.65 6.375 1.742m-.375 7.5a11.956 11.956 0 0 1-5.986 5.488l-1.966 1.016m-5.986-5.488A11.956 11.956 0 0 1 6 12c0-2.37.65-4.541 1.742-6.375m-.375 7.5a11.956 11.956 0 0 0 5.986 5.488l1.966 1.016" /></svg> Customer loyalty.</div>
            <div class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-green-600 flex-shrink-0 mt-px"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> Turn slow days into profit days.</div>
            <!-- <div class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-green-600 flex-shrink-0 mt-px"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662v4.286a.625.625 0 0 0 .625.625h2.125c.196 0 .38-.07.53-.19l1.649-1.319a.625.625 0 0 1 .9-.19h.207a.625.625 0 0 1 .9.19l1.65 1.319a.625.625 0 0 0 .53.19h2.125a.625.625 0 0 0 .625-.625v-4.286Zm-12-6.871A1.625 1.625 0 0 1 8.25 3.5h7.5c.71 0 1.365.402 1.625.979l-.375 6.871a.625.625 0 0 1-.623.624h-6.254a.625.625 0 0 1-.623-.624l-.375-6.87Z" /></svg> Withdraw your money with no penalties</div> -->
         </div>
         <div class="flex flex-col sm:flex-row gap-4">
            <!-- <button class="px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out bg-[#4A2E6F] text-white hover:bg-opacity-90 flex-1">Get started</button>
            <button class="px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out border border-gray-300 text-gray-700 hover:bg-gray-100 flex-1">Learn more</button> -->
         </div>
      </div>
    </section>

    

    <!-- =============================== -->
    <!-- Risk Level Section -->
    <!-- =============================== -->
    <section class="bg-green-50 py-20 lg:py-28">
       <div class="font-['Cabinet'] container mx-auto px-4 text-center">
         <h2 class="font-['Cabinet'] font-extrabold text-5xl lg:text-7xl text-[#4A2E6F] mb-16 max-w-3xl mx-auto leading-tight relative">
            Why choose us?
            <!-- <img src="/logo_big_p.png" alt="Paper plane" class="absolute -top-8 right-0 w-16 h-auto hidden md:block"> Placeholder -->
         </h2>

         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 text-left">
            <div>
               <!-- <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">CASH ACCOUNT</p> -->
               <h3 class="text-xl font-semibold text-[#4A2E6F] mb-2">Let your prices think on their feet✨</h3>
               <p class="text-sm text-gray-600 mb-3">Realtime pricing powered by complex algorithms.</p>
               <!-- <a href="#" class="text-sm font-semibold text-[#4A2E6F] hover:underline">Learn more</a> -->
            </div>
             <div>
               <!-- <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">AUTOMATED BOND LADDER</p> -->
               <h3 class="text-xl font-semibold text-[#4A2E6F] mb-2">Maximimise revenue potential🚀</h3>
               <p class="text-sm text-gray-600 mb-3">Unlock smarter strategies.</p>
               <!-- <a href="#" class="text-sm font-semibold text-[#4A2E6F] hover:underline">Learn more</a> -->
            </div>
             <!-- <div>
               <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">AUTOMATED INVESTING ACCOUNT</p>
               <h3 class="text-xl font-semibold text-[#4A2E6F] mb-2">Index Investing</h3>
               <p class="text-sm text-gray-600 mb-3">The time-tested method designed to maximize returns over the long term, while we automatically manage the risk for you.</p>
               <a href="#" class="text-sm font-semibold text-[#4A2E6F] hover:underline">Learn more</a>
            </div> -->
             <div>
               <!-- <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">STOCK INVESTING ACCOUNT</p> -->
               <h3 class="text-xl font-semibold text-[#4A2E6F] mb-2">Where demand meets intelligence💡</h3>
               <p class="text-sm text-gray-600 mb-3">Turn foot traffic into profit - <span class="italic">{{ "automatically." }}</span></p>
               <!-- <a href="#" class="text-sm font-semibold text-[#4A2E6F] hover:underline">Learn more</a> -->
            </div>
         </div>

         <!-- Wavy Line Graphic - VERY HARD TO REPLICATE WITH PURE CSS/TAILWIND -->
         <!-- Placeholder: Use an SVG image for this -->
         <div class="relative h-20 flex items-center justify-between px-4">
             <div class="absolute inset-0 flex items-center">
                 <!-- Dashed/Wavy line SVG would go here -->
                  <svg width="100%" height="50" viewBox="0 0 1000 50" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="stroke-current text-gray-400">
                    <path d="M 0 25 C 100 25, 150 25, 250 25 S 350 25, 400 30 C 450 35, 500 30, 550 20 C 600 10, 650 15, 750 35 S 900 45, 1000 40" stroke-width="2" fill="none" stroke-dasharray="4 4"/>
                    <!-- NOTE: This is a very basic approximation -->
                  </svg>
             </div>
             <div class="w-3 h-3 bg-[#4A2E6F] rounded-full z-10 relative"></div>
             <div class="w-3 h-3 bg-[#4A2E6F] rounded-full z-10 relative"></div>
             <div class="w-3 h-3 bg-[#4A2E6F] rounded-full z-10 relative"></div>
             <div class="w-3 h-3 bg-[#4A2E6F] rounded-full z-10 relative"></div>
             <div class="w-3 h-3 bg-[#4A2E6F] rounded-full z-10 relative"></div>
         </div>
         <!-- <p class="text-sm text-gray-500 mt-2">Increasing volatility</p> -->

       </div>
    </section>

    <!-- =============================== -->
    <!-- Testimonials Section -->
    <!-- =============================== -->
    <section class="bg-[#F7F5FA] py-20 lg:py-28">
      <div class="font-['Cabinet'] container mx-auto px-4 text-center">
         <h2 class="text-5xl lg:text-7xl font-medium text-[#4A2E6F] mb-12 relative">
           Don't just take our word for it.
            <!-- Curved arrow SVG placeholder -->
            <!-- <svg class="absolute top-0 right-0 -mt-4 -mr-4 w-16 h-auto text-gray-400 hidden md:block" viewBox="0 0 100 50"><path d="M 10 40 Q 50 0 90 10" fill="none" stroke="currentColor" stroke-width="2" marker-end="url(#arrowhead)"/><defs><marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/></marker></defs></svg> -->
         </h2>

        <!-- Main Quote -->
        <div class="bg-purple-100 rounded-lg p-8 md:p-12 max-w-3xl mx-auto mb-12 text-center">
          <p class="text-6xl text-[#4A2E6F] font-serif leading-none mb-4">“</p>
          <blockquote class="text-2xl md:text-3xl font-semibold text-[#4A2E6F] mb-6 leading-snug">
            EvoPrice is the best dynamic pricing tool on the market
          </blockquote>
          <div class="flex items-center justify-center gap-2 text-sm text-purple-800">
            <!-- <img src="/favicon.ico" alt="Investopedia" class="h-5"> Need Investopedia logo -->
            <span>Investopedia</span>
            <span class="text-purple-400">|</span>
            <span>2025</span>
          </div>
        </div>

        <!-- Smaller Testimonials -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
          <div class="bg-white rounded-lg shadow p-6">
            <p class="text-gray-800 mb-4 font-medium leading-snug">We used to guess our prices—now we know. The dashboard is super intuitive, and we saw a 12% bump in just 3 weeks</p>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-green-200"></div> <!-- Placeholder avatar -->
              <div>
                <p class="text-sm font-semibold text-gray-900">Stanley R</p>
                <p class="text-xs text-gray-500">Cash Account</p>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg shadow p-6">
            <p class="text-gray-800 mb-4 font-medium leading-snug">Honestly feels like having a pricing consultant in our back pocket. The AI learns fast and keeps us ahead of the curve.</p>
             <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-blue-200"></div> <!-- Placeholder avatar -->
              <div>
                <p class="text-sm font-semibold text-gray-900">Joshua B</p>
                <p class="text-xs text-gray-500">Store Owner</p>
              </div>
            </div>
          </div>
           <div class="bg-white rounded-lg shadow p-6">
            <p class="text-gray-800 mb-4 font-medium leading-snug">I LOVE Evoprice.It has made a huge impact for us</p>
             <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-orange-200"></div> <!-- Placeh older avatar -->
              <div>
                <p class="text-sm font-semibold text-gray-900">Daniel C</p>
                <p class="text-xs text-gray-500">Restaurant  Owner</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Read More Button -->
        <button class="px-6 py-3 rounded-md font-semibold transition duration-150 ease-in-out bg-[#4A2E6F] text-white hover:bg-opacity-90">Read more reviews</button>

        <!-- Disclaimer -->
        <p class="text-xs text-gray-500 max-w-3xl mx-auto mt-8 leading-relaxed">
          The testimonials above are by clients of EvoPrice. No compensation was provided. These testimonials may not be representative of other clients' experience. Past performance is no guarantee of success. Investopedia receives compensation from EvoPrice for advertising, which presents a conflict of interest. The endorsements provided are independent and not directly influenced by the compensation. There is no other affiliation between Investopedia and EvoPrice.
        </p>

         <!-- Illustration -->
         <img src="/logo.png" alt="House building illustration" class="mx-auto mt-12 w-48 h-auto">
      </div>
    </section>

    <!-- =============================== -->
    <!-- Ready? CTA + Stats Section -->
    <!-- =============================== -->
    <section class="font-['Cabinet'] bg-[#F7F5FA] py-20 lg:py-28">
       <div class="container mx-auto px-4 text-center">
          <h2 class="text-5xl lg:text-7xl font-medium text-[#4A2E6F] mb-12">Ready to maximise your profit?</h2>
          <div class="container mx-auto">
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24">
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1">+18%<span class="text-yellow-500 align-super text-xl ml-1">📈</span></p>
            <p class="text-sm text-gray-600">Revenue Uplift</p>
          </div>
           <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1">+22%<span class="text-yellow-500 align-super text-xl ml-1">🚀</span></p>
            <p class="text-sm text-gray-600">Profit Margin Growth</p>
          </div>
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1"><7 Days<span class="text-yellow-500 align-super text-xl ml-1">★</span></p>
            <p class="text-sm text-gray-600">Integration Time</p>
          </div>
          <!-- 
          <div class="text-center">
            <p class="text-3xl lg:text-4xl font-bold text-[#4A2E6F] mb-1">4.9<span class="text-yellow-500 align-super text-xl ml-1">★</span><sup class="text-xs font-normal top-[-0.8em] ml-0.5">2</sup></p>
            <p class="text-sm text-gray-600">Google Play Store</p>
          </div> -->
        </div>
      </div>
          <button class="px-8 my-5 py-3 text-lg rounded-md font-semibold transition duration-150 ease-in-out bg-[#4A2E6F] text-white hover:bg-opacity-90">Get started</button>
       </div>
    </section>

     <!-- =============================== -->
    <!-- FAQ Section -->
    <!-- =============================== -->
    <section class="font-['Cabinet'] bg-purple-50 py-20 lg:py-28">
       <div class="container mx-auto px-4">
         <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-1">
               <h2 class="text-4xl lg:text-5xl font-medium text-[#4A2E6F] leading-tight">Your money questions, answered.</h2>
            </div>
            <div class="lg:col-span-2">
              <div class="space-y-4">
                <!-- FAQ Item 1 -->
                <div class="border-b border-purple-200 pb-4">
                  <button class="flex justify-between items-center w-full text-left text-lg font-medium text-[#4A2E6F] hover:text-purple-900">
                    <span>How does this actually help me make more money?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-purple-400 transition-transform duration-200"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
                  </button>
                  <!-- <div class="mt-3 text-gray-600 text-sm">Answer would go here...</div> -->
                </div>
                 <!-- FAQ Item 2 -->
                <div class="border-b border-purple-200 pb-4">
                  <button class="flex justify-between items-center w-full text-left text-lg font-medium text-[#4A2E6F] hover:text-purple-900">
                    <span>What kind of business is this for?</span>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-purple-400 transition-transform duration-200"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
                  </button>
                </div>
                 <!-- FAQ Item 3 -->
                <div class="border-b border-purple-200 pb-4">
                  <button class="flex justify-between items-center w-full text-left text-lg font-medium text-[#4A2E6F] hover:text-purple-900">
                    <span>How long before I see results?</span>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-purple-400 transition-transform duration-200"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
                  </button>
                </div>
                 <!-- FAQ Item 4 -->
                <!-- <div class="border-b border-purple-200 pb-4">
                  <button class="flex justify-between items-center w-full text-left text-lg font-medium text-[#4A2E6F] hover:text-purple-900">
                    <span>How should I be thinking about short-term cash during inflation?</span>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-purple-400 transition-transform duration-200"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
                  </button>
                </div> -->
                 <!-- FAQ Item 5 -->
                 <!-- <div class="border-b border-purple-200 pb-4">
                  <button class="flex justify-between items-center w-full text-left text-lg font-medium text-[#4A2E6F] hover:text-purple-900">
                    <span>Why should I invest now if I can get 4.00% APY on my FDIC-insured savings?</span>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-purple-400 transition-transform duration-200"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
                  </button>
                </div> -->
                 <!-- FAQ Item 6 -->
                 <!-- <div class="border-b border-purple-200 pb-4">
                  <button class="flex justify-between items-center w-full text-left text-lg font-medium text-[#4A2E6F] hover:text-purple-900">
                    <span>Not a question, but sell me on this "automated diversification" thing.</span>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-purple-400 transition-transform duration-200"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
                  </button>
                </div> -->
                 <!-- FAQ Item 7 -->
                 <div class="pb-4"> <!-- No border on last item -->
                  <button class="flex justify-between items-center w-full text-left text-lg font-medium text-[#4A2E6F] hover:text-purple-900">
                    <span>Is this legal?</span>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-purple-400 transition-transform duration-200"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" /></svg>
                  </button>
                </div>
              </div>
            </div>
         </div>
       </div>
    </section>

     <!-- =============================== -->
    <!-- Footer Section -->
    <!-- =============================== -->
    <footer class="bg-[#1A0D2B] text-gray-400 py-16 font-['Cabinet']"> <!-- Very dark purple/near black -->
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <!-- Col 1: Logo -->
          <div class="col-span-2 md:col-span-4 lg:col-span-1">
             <img src="/logo_big_p.png" alt="Wealthfront Logo" class="mb-4 lg:w-[200%] w-[50%]"> <!-- Need white version -->
          </div>

          <!-- Col 2: Investing -->
          <!-- <div>
            <h4 class="font-semibold text-white mb-3">Investing</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white">Automated Investing</a></li>
              <li><a href="#" class="hover:text-white">Stock Investing</a></li>
              <li><a href="#" class="hover:text-white">Explore all investments</a></li>
              <li><a href="#" class="hover:text-white">Retirement</a></li>
              <li><a href="#" class="hover:text-white">College</a></li>
              <li><a href="#" class="hover:text-white">Socially Responsible</a></li>
              <li><a href="#" class="hover:text-white">Pricing</a></li>
              <li><a href="#" class="hover:text-white">Tax-loss Harvesting</a></li>
              <li><a href="#" class="hover:text-white">Historical Performance</a></li>
              <li><a href="#" class="hover:text-white">Whitepapers</a></li>
            </ul>
          </div> -->

          <!-- Col 3: Save & Bonds -->
          <!-- <div>
            <h4 class="font-semibold text-white mb-3">Save</h4>
            <ul class="space-y-2 text-sm mb-6">
              <li><a href="#" class="hover:text-white">Cash</a></li>
              <li><a href="#" class="hover:text-white">ATM Locator</a></li>
            </ul>
             <h4 class="font-semibold text-white mb-3">Bonds</h4>
            <ul class="space-y-2 text-sm">
               <li><a href="#" class="hover:text-white">Automated Bond Ladder</a></li>
               <li><a href="#" class="hover:text-white">Automated Bond Portfolio</a></li>
            </ul>
             <h4 class="font-semibold text-white mb-3 mt-6">Borrow</h4>
            <ul class="space-y-2 text-sm">
               <li><a href="#" class="hover:text-white">Borrow</a></li>
            </ul>
          </div> -->

          <!-- Col 4: Learn -->
          <div>
            <h4 class="font-semibold text-white mb-3">Learn</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white">Blog</a></li>
              <li><a href="#" class="hover:text-white">Help Center</a></li>
              <li><a href="#" class="hover:text-white">What level of risk suits you best?</a></li>
              <li><a href="#" class="hover:text-white">IRA Contributions Calculator</a></li>
            </ul>
          </div>

          <!-- Col 5: About -->
          <div>
            <h4 class="font-semibold text-white mb-3">About</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white">Newsroom</a></li>
              <li><a href="#" class="hover:text-white">Reviews</a></li>
              <li><a href="#" class="hover:text-white">Careers</a></li>
              <li><a href="#" class="hover:text-white">Legal</a></li>
              <li><a href="#" class="hover:text-white">Security</a></li>
              <li><a href="#" class="hover:text-white">Sitemap</a></li>
              <!-- <li><a href="#" class="hover:text-white mt-4 inline-block">Back to top</a></li> -->
            </ul>
          </div>

        </div>

        <hr class="border-gray-700 mb-8">

        <!-- Fine Print / Disclosures -->
        <!-- <div class="text-xs space-y-4 text-gray-500">
           <p>All investing involves risk, including the loss of principal. Performance data represents past performance and does not guarantee future results. Financial returns, expected returns, and probability projections are provided for informational and illustrative purposes, and may not reflect actual future performance. Please see our <a href="#" class="text-gray-400 hover:text-white underline">Full Disclosure</a> for important details.</p>
           <p>Nerdwallet receives cash compensation for referring potential clients to Wealthfront Advisers, LLC (“Wealthfront Advisers”) via advertisements placed on their website. Nerdwallet and Wealthfront Advisers are not associated with one another and have no formal relationship outside of this arrangement. Nerdwallet’s opinions are their own. Their ratings are determined by their editorial team. The scoring formula for online brokers and robo-advisors takes into account over 15 factors, including account fees and minimums, investment choices, customer support and mobile app capabilities. Nerdwallet ranking as of [Date]. Wealthfront provides cash compensation in connection with obtaining this ranking. This ranking may not be representative of any one client’s experience because it reflects an average of the conditions listed above. This ranking is not indicative of the future performance. [Add more details as needed...]</p>
           <p>Apple App Store and Google Play Store ratings are based on user ratings and are subject to change. [...]</p>
            <p>Wealthfront Cash Account is offered by Wealthfront Brokerage LLC (“Wealthfront Brokerage”), Member <a href="#" class="text-gray-400 hover:text-white underline">FINRA</a>/<a href="#" class="text-gray-400 hover:text-white underline">SIPC</a>. The Annual Percentage Yield (APY) for cash deposits is as of [Date]. [...] Wealthfront Brokerage is not a bank. Deposits are held at partner banks and are protected by FDIC insurance up to allowable limits. More information about FDIC insurance, visit <a href="#" class="text-gray-400 hover:text-white underline">www.FDIC.gov</a>.</p>
           <p>[Include other disclosures about Bond Ladder, Investing, Tax-Loss Harvesting, etc. as seen in the image...]</p>
           <p>© {{ new Date().getFullYear() }} Wealthfront Corporation. All rights reserved.</p>
        </div> -->

      </div>
    </footer>

  </div>
</template>

<script setup>
// No component imports needed
// Page-specific logic can go here if necessary
</script>

<style>
/* Global or page-specific non-Tailwind styles */


sup {
    vertical-align: super;
    font-size: smaller;
}
</style>