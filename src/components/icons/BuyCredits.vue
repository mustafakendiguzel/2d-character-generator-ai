<template>
  <main
    class="container relative mx-auto flex min-h-screen flex-col items-center gap-8 text-center"
  >
    <h1 class="mt-8 text-4xl">Buy Credits!</h1>
    <p class="w-1/3 text-lg">
      Every new image you create in our web application deducts one credit from your account
      balance. You can also produce variations of existing images, but please note, this operation
      also costs one credit per image variant created.
    </p>
    <div class="alert alert-warning shadow-lg">
      <div>
        <p>
          Please review our<!-- -->
          <a class="text-white hover:text-cyan-200" href="/refund">Refund Policy</a>
          <!-- -->before buying credits. We do not issue refunds at this time.
        </p>
      </div>
    </div>
    <section class="mb-12 grid grid-cols-1 gap-8 md:w-full md:grid-cols-3">
      <div class="card w-full text-white shadow-xl" style="background-color: #0f1022">
        <figure><img class="mt-4 w-40" src="@/coins/silver-coin.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="mb-8 text-center text-xl md:text-2xl lg:text-3xl">
            50<!-- -->
            Credits
          </h2>
          <h3 class="mb-8 text-center text-xl">
            $<!-- -->0.10<!-- -->
            per image
          </h3>
          <div class="card-actions justify-center">
            <button class="btn-info btn">Buy for $<!-- -->5</button>
          </div>
        </div>
      </div>
      <div class="card w-full text-white shadow-xl" style="background-color: #2e1920">
        <figure><img class="mt-4 w-40" src="@/coins/gold-coin.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="mb-8 text-center text-xl md:text-2xl lg:text-3xl">
            100<!-- -->
            Credits
          </h2>
          <h3 class="mb-8 text-center text-xl">
            $<!-- -->0.09<!-- -->
            per image
          </h3>
          <div class="card-actions justify-center">
            <button class="btn-info btn">Buy for $<!-- -->9</button>
          </div>
        </div>
      </div>
      <div class="card w-full text-white shadow-xl" style="background-color: #15403d">
        <figure><img class="mt-4 w-40" src="@/coins/diamond-coin.png" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="mb-8 text-center text-xl md:text-2xl lg:text-3xl">
            250<!-- -->
            Credits
          </h2>
          <h3 class="mb-8 text-center text-xl">
            $<!-- -->0.08<!-- -->
            per image
          </h3>
          <div class="card-actions justify-center">
            <button class="btn-info btn">Buy for $<!-- -->20</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
