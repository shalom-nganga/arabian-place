
  const brand = document.querySelector('.brand');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  console.log('Nav rect:', JSON.stringify(nav.getBoundingClientRect()));
  console.log('Brand rect:', JSON.stringify(brand.getBoundingClientRect()));
  console.log('Burger rect:', JSON.stringify(burger.getBoundingClientRect()));
  console.log('Burger display:', window.getComputedStyle(burger).display);
  console.log('Burger visibility:', window.getComputedStyle(burger).visibility);
