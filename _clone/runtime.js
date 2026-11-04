/* Clonador runtime */
(function () {
  if (window.__CLONADOR_RT__) return;
  var S = document.currentScript;
  if (!S) return;
  var ROOT = new URL('../', S.src).href;
  var ORIG = S.getAttribute('data-orig') || location.href;
  var MAP = {"https://inlead.digital/_next/static/css/dd39038178352821.css":"_ext/inlead.digital/_next/static/css/dd39038178352821.css","https://inlead.digital/_next/static/chunks/main-7562da0533a9d12d.js":"_ext/inlead.digital/_next/static/chunks/main-7562da0533a9d12d.js","https://inlead.digital/_next/static/css/1206925b23ddaa45.css":"_ext/inlead.digital/_next/static/css/1206925b23ddaa45.css","https://inlead.digital/_next/static/chunks/framework-b21a9a9d949ebca4.js":"_ext/inlead.digital/_next/static/chunks/framework-b21a9a9d949ebca4.js","https://inlead.digital/_next/static/chunks/webpack-2c67ede6620143cb.js":"_ext/inlead.digital/_next/static/chunks/webpack-2c67ede6620143cb.js","https://inlead.digital/_next/static/chunks/pages/_app-d0b1198d08caa709.js":"_ext/inlead.digital/_next/static/chunks/pages/_app-d0b1198d08caa709.js","https://inlead.digital/_next/static/chunks/80755-b4e8f85b9b3b640a.js":"_ext/inlead.digital/_next/static/chunks/80755-b4e8f85b9b3b640a.js","https://inlead.digital/_next/static/chunks/43885-a29d8e8488820633.js":"_ext/inlead.digital/_next/static/chunks/43885-a29d8e8488820633.js","https://inlead.digital/_next/static/chunks/18570-ef434921a6954f72.js":"_ext/inlead.digital/_next/static/chunks/18570-ef434921a6954f72.js","https://inlead.digital/_next/static/chunks/3185-e5dbb2f13918cb3d.js":"_ext/inlead.digital/_next/static/chunks/3185-e5dbb2f13918cb3d.js","https://inlead.digital/_next/static/chunks/74399-7dcf6243f422f0f6.js":"_ext/inlead.digital/_next/static/chunks/74399-7dcf6243f422f0f6.js","https://inlead.digital/_next/static/chunks/pages/%5B...all%5D-94d9aef19fbddb25.js":"_ext/inlead.digital/_next/static/chunks/pages/[...all]-94d9aef19fbddb25.js","https://inlead.digital/_next/static/qgBbdQXjMR0J30zC8mUKC/_ssgManifest.js":"_ext/inlead.digital/_next/static/qgBbdQXjMR0J30zC8mUKC/_ssgManifest.js","https://inlead.digital/_next/static/chunks/61304-5c36cc693bc6503b.js":"_ext/inlead.digital/_next/static/chunks/61304-5c36cc693bc6503b.js","https://inlead.digital/_next/static/chunks/64670-fabf6b1a758b276a.js":"_ext/inlead.digital/_next/static/chunks/64670-fabf6b1a758b276a.js","https://inlead.digital/_next/static/chunks/24424-4a02afcafcc5a853.js":"_ext/inlead.digital/_next/static/chunks/24424-4a02afcafcc5a853.js","https://inlead.digital/_next/static/chunks/17313-2db12e31af3034ca.js":"_ext/inlead.digital/_next/static/chunks/17313-2db12e31af3034ca.js","https://inlead.digital/_next/static/chunks/32413-41115eb3b5470f9d.js":"_ext/inlead.digital/_next/static/chunks/32413-41115eb3b5470f9d.js","https://inlead.digital/_next/static/chunks/61647-b782f50757390db4.js":"_ext/inlead.digital/_next/static/chunks/61647-b782f50757390db4.js","https://inlead.digital/_next/static/media/e4af272ccee01ff0-s.p.woff2":"_ext/inlead.digital/_next/static/media/e4af272ccee01ff0-s.p.woff2","https://inlead.digital/_next/static/qgBbdQXjMR0J30zC8mUKC/_buildManifest.js":"_ext/inlead.digital/_next/static/qgBbdQXjMR0J30zC8mUKC/_buildManifest.js","https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap":"_c/a8db5d63b8-css2.css","https://fonts.googleapis.com/css?family=Inter:400,500,700&display=swap":"_c/f7a0ba4abc-css.css","https://inlead.digital/_next/static/chunks/15616.2e21996458555f75.js":"_ext/inlead.digital/_next/static/chunks/15616.2e21996458555f75.js","https://inlead.digital/_next/static/chunks/88669.ef358724488126ec.js":"_ext/inlead.digital/_next/static/chunks/88669.ef358724488126ec.js","https://desparasita.fun/wp-content/uploads/2026/10/Papa-sorridente-recebe-antigos-pergaminhos.png":"_ext/desparasita.fun/wp-content/uploads/2026/10/Papa-sorridente-recebe-antigos-pergaminhos.png","https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2","https://inlead.digital/_next/static/chunks/32257.98f385c11d17321e.js":"_ext/inlead.digital/_next/static/chunks/32257.98f385c11d17321e.js","https://inlead.digital/_next/static/chunks/54198.9d3043d57aa86ded.js":"_ext/inlead.digital/_next/static/chunks/54198.9d3043d57aa86ded.js","https://inlead.digital/_next/static/chunks/41824.4ae24855732e9fa3.js":"_ext/inlead.digital/_next/static/chunks/41824.4ae24855732e9fa3.js","https://inlead.digital/_next/static/chunks/28274.4fcde41cfd2ff1b1.js":"_ext/inlead.digital/_next/static/chunks/28274.4fcde41cfd2ff1b1.js","https://inlead.digital/_next/static/chunks/49398.4ee66a8efe978bc2.js":"_ext/inlead.digital/_next/static/chunks/49398.4ee66a8efe978bc2.js","https://inlead.digital/_next/static/chunks/93784.1093e96bb3671b42.js":"_ext/inlead.digital/_next/static/chunks/93784.1093e96bb3671b42.js","https://desparasita.fun/wp-content/uploads/2026/10/Screenshot-2026-10-12-171344.png":"_ext/desparasita.fun/wp-content/uploads/2026/10/Screenshot-2026-10-12-171344.png","https://inlead.digital/_next/static/chunks/polyfills-42372ed130431b0a.js":"_ext/inlead.digital/_next/static/chunks/polyfills-42372ed130431b0a.js","https://inlead.digital/_next/static/media/ba9851c3c22cd980-s.woff2":"_ext/inlead.digital/_next/static/media/ba9851c3c22cd980-s.woff2","https://inlead.digital/_next/static/media/c5fe6dc8356a8c31-s.woff2":"_ext/inlead.digital/_next/static/media/c5fe6dc8356a8c31-s.woff2","https://inlead.digital/_next/static/media/21350d82a1f187e9-s.woff2":"_ext/inlead.digital/_next/static/media/21350d82a1f187e9-s.woff2","https://inlead.digital/_next/static/media/19cfc7226ec3afaa-s.woff2":"_ext/inlead.digital/_next/static/media/19cfc7226ec3afaa-s.woff2","https://inlead.digital/_next/static/media/df0a9ae256c0569c-s.woff2":"_ext/inlead.digital/_next/static/media/df0a9ae256c0569c-s.woff2","https://inlead.digital/_next/static/media/8e9860b6e62d6359-s.woff2":"_ext/inlead.digital/_next/static/media/8e9860b6e62d6359-s.woff2","https://inlead.digital/_next/static/chunks/3999-78a64237dedb8739.js":"_ext/inlead.digital/_next/static/chunks/3999-78a64237dedb8739.js","https://inlead.digital/_next/static/css/d0320de32467736e.css":"_ext/inlead.digital/_next/static/css/d0320de32467736e.css","https://inlead.digital/_next/static/css/a2084c63c3e3e33c.css":"_ext/inlead.digital/_next/static/css/a2084c63c3e3e33c.css","https://inlead.digital/_next/static/chunks/98462-50742db0e2b0b86b.js":"_ext/inlead.digital/_next/static/chunks/98462-50742db0e2b0b86b.js","https://inlead.digital/_next/static/chunks/pages/404-4807ec1a5c1641d0.js":"_ext/inlead.digital/_next/static/chunks/pages/404-4807ec1a5c1641d0.js","https://inlead.digital/_next/static/chunks/pages/_auth-eb98e466a1a090e1.js":"_ext/inlead.digital/_next/static/chunks/pages/_auth-eb98e466a1a090e1.js","https://inlead.digital/_next/static/chunks/pages/blog/categoria/[...all]-613d9e91aeeb766f.js":"_ext/inlead.digital/_next/static/chunks/pages/blog/categoria/[...all]-613d9e91aeeb766f.js","https://inlead.digital/_next/static/chunks/pages/_error-ed01d48551c6a00c.js":"_ext/inlead.digital/_next/static/chunks/pages/_error-ed01d48551c6a00c.js","https://inlead.digital/_next/static/chunks/pages/blog/page/[page]-88608ac1b092e887.js":"_ext/inlead.digital/_next/static/chunks/pages/blog/page/[page]-88608ac1b092e887.js","https://inlead.digital/_next/static/chunks/pages/blog/result-16b39caeb0bd8db7.js":"_ext/inlead.digital/_next/static/chunks/pages/blog/result-16b39caeb0bd8db7.js","https://inlead.digital/_next/static/chunks/pages/blog/[slug]-01ecfa6ec846219e.js":"_ext/inlead.digital/_next/static/chunks/pages/blog/[slug]-01ecfa6ec846219e.js","https://inlead.digital/_next/static/chunks/pages/checkout-1f48694882bf6c1f.js":"_ext/inlead.digital/_next/static/chunks/pages/checkout-1f48694882bf6c1f.js","https://inlead.digital/_next/static/chunks/pages/checkout/redirect/[price]-c355558691b6336e.js":"_ext/inlead.digital/_next/static/chunks/pages/checkout/redirect/[price]-c355558691b6336e.js","https://inlead.digital/_next/static/chunks/pages/comunicados/[slug]-38f8a5543acf2c4a.js":"_ext/inlead.digital/_next/static/chunks/pages/comunicados/[slug]-38f8a5543acf2c4a.js","https://inlead.digital/_next/static/chunks/pages/checkout/success-b2cc66695b746544.js":"_ext/inlead.digital/_next/static/chunks/pages/checkout/success-b2cc66695b746544.js","https://inlead.digital/_next/static/chunks/pages/index-023bbc3ecbdb122f.js":"_ext/inlead.digital/_next/static/chunks/pages/index-023bbc3ecbdb122f.js","https://inlead.digital/_next/static/chunks/pages/dashboard-d579c2675b5a94b9.js":"_ext/inlead.digital/_next/static/chunks/pages/dashboard-d579c2675b5a94b9.js","https://inlead.digital/_next/static/chunks/30883-5ed6603aacb2df26.js":"_ext/inlead.digital/_next/static/chunks/30883-5ed6603aacb2df26.js","https://inlead.digital/_next/static/chunks/pages/dashboard/account-309987ca65fc4058.js":"_ext/inlead.digital/_next/static/chunks/pages/dashboard/account-309987ca65fc4058.js","https://inlead.digital/_next/static/chunks/pages/contato-0f89ef910eb4b8c2.js":"_ext/inlead.digital/_next/static/chunks/pages/contato-0f89ef910eb4b8c2.js","https://inlead.digital/_next/static/chunks/d30e4e6b-dbaecd8a08a28ca9.js":"_ext/inlead.digital/_next/static/chunks/d30e4e6b-dbaecd8a08a28ca9.js","https://inlead.digital/_next/static/chunks/pages/dashboard/funnel/create-a532679534351e8b.js":"_ext/inlead.digital/_next/static/chunks/pages/dashboard/funnel/create-a532679534351e8b.js","https://inlead.digital/_next/static/chunks/28843-14a6efa0dae712bc.js":"_ext/inlead.digital/_next/static/chunks/28843-14a6efa0dae712bc.js","https://inlead.digital/_next/static/chunks/89979-f4f35967de1c1898.js":"_ext/inlead.digital/_next/static/chunks/89979-f4f35967de1c1898.js","https://inlead.digital/_next/static/css/5b9abfc41395c6f0.css":"_ext/inlead.digital/_next/static/css/5b9abfc41395c6f0.css","https://inlead.digital/_next/static/chunks/93863-ba0dc9a395908174.js":"_ext/inlead.digital/_next/static/chunks/93863-ba0dc9a395908174.js","https://inlead.digital/_next/static/chunks/pages/login-52483ecc1601d784.js":"_ext/inlead.digital/_next/static/chunks/pages/login-52483ecc1601d784.js","https://inlead.digital/_next/static/chunks/pages/login/auth/google/[token]-143be4c0472dbe51.js":"_ext/inlead.digital/_next/static/chunks/pages/login/auth/google/[token]-143be4c0472dbe51.js","https://inlead.digital/_next/static/chunks/pages/login/2f-verification/[token]-bedc579afdee1008.js":"_ext/inlead.digital/_next/static/chunks/pages/login/2f-verification/[token]-bedc579afdee1008.js","https://inlead.digital/_next/static/chunks/pages/dashboard/subscription-525a24cd2cc67cab.js":"_ext/inlead.digital/_next/static/chunks/pages/dashboard/subscription-525a24cd2cc67cab.js","https://inlead.digital/_next/static/chunks/pages/logout-240c099198069113.js":"_ext/inlead.digital/_next/static/chunks/pages/logout-240c099198069113.js","https://inlead.digital/_next/static/chunks/pages/dashboard/funnel/[id]-1417964096431ecf.js":"_ext/inlead.digital/_next/static/chunks/pages/dashboard/funnel/[id]-1417964096431ecf.js","https://inlead.digital/_next/static/chunks/pages/oauth/consent-52f95f269dacebc6.js":"_ext/inlead.digital/_next/static/chunks/pages/oauth/consent-52f95f269dacebc6.js","https://inlead.digital/_next/static/css/dd5d352a082118c1.css":"_ext/inlead.digital/_next/static/css/dd5d352a082118c1.css","https://inlead.digital/_next/static/chunks/pages/password-b85dccc5b5a33332.js":"_ext/inlead.digital/_next/static/chunks/pages/password-b85dccc5b5a33332.js","https://inlead.digital/_next/static/chunks/pages/planos/hotmart-c3d181576132e246.js":"_ext/inlead.digital/_next/static/chunks/pages/planos/hotmart-c3d181576132e246.js","https://inlead.digital/_next/static/chunks/pages/planos/kirvano-1ccee3bccc572567.js":"_ext/inlead.digital/_next/static/chunks/pages/planos/kirvano-1ccee3bccc572567.js","https://inlead.digital/_next/static/chunks/pages/planos-49d4e69997f94e6a.js":"_ext/inlead.digital/_next/static/chunks/pages/planos-49d4e69997f94e6a.js","https://inlead.digital/_next/static/chunks/pages/sobre-1342ba253552441f.js":"_ext/inlead.digital/_next/static/chunks/pages/sobre-1342ba253552441f.js","https://inlead.digital/_next/static/chunks/pages/preview/[slug]-013b083f2fefd741.js":"_ext/inlead.digital/_next/static/chunks/pages/preview/[slug]-013b083f2fefd741.js","https://inlead.digital/_next/static/chunks/pages/register-5ade5d7fe82a37d6.js":"_ext/inlead.digital/_next/static/chunks/pages/register-5ade5d7fe82a37d6.js","https://inlead.digital/_next/static/chunks/95876-421964b498828706.js":"_ext/inlead.digital/_next/static/chunks/95876-421964b498828706.js","https://inlead.digital/_next/static/chunks/pages/[...all]-94d9aef19fbddb25.js":"_c/1510d4f5cf-[...all]-94d9aef19fbddb25.js","https://inlead.digital/_next/static/chunks/pages/recovery-e22db7deeb4349b4.js":"_ext/inlead.digital/_next/static/chunks/pages/recovery-e22db7deeb4349b4.js","https://inlead.digital/_next/static/chunks/pages/templates-f7dbc00a26f49017.js":"_ext/inlead.digital/_next/static/chunks/pages/templates-f7dbc00a26f49017.js","https://inlead.digital/_next/static/chunks/79997-aec5c96a1f5d984c.js":"_ext/inlead.digital/_next/static/chunks/79997-aec5c96a1f5d984c.js","https://inlead.digital/_next/static/chunks/72262-14f75252d64a4273.js":"_ext/inlead.digital/_next/static/chunks/72262-14f75252d64a4273.js","https://inlead.digital/_next/static/chunks/7845-475a20581649d580.js":"_ext/inlead.digital/_next/static/chunks/7845-475a20581649d580.js","https://inlead.digital/_next/static/chunks/39817-4e3d9780c624aac5.js":"_ext/inlead.digital/_next/static/chunks/39817-4e3d9780c624aac5.js","https://inlead.digital/_next/static/chunks/48230-2b7e220501a22985.js":"_ext/inlead.digital/_next/static/chunks/48230-2b7e220501a22985.js","https://inlead.digital/_next/static/chunks/69817-f9a422c36df8f345.js":"_ext/inlead.digital/_next/static/chunks/69817-f9a422c36df8f345.js","https://inlead.digital/_next/static/chunks/94751-f790ef07fc1dd485.js":"_ext/inlead.digital/_next/static/chunks/94751-f790ef07fc1dd485.js","https://inlead.digital/_next/static/chunks/96054-d5610419efd38386.js":"_ext/inlead.digital/_next/static/chunks/96054-d5610419efd38386.js","https://inlead.digital/_next/static/chunks/5863-c990db12d1a21328.js":"_ext/inlead.digital/_next/static/chunks/5863-c990db12d1a21328.js","https://inlead.digital/_next/static/chunks/68539-00d71b43037cc57a.js":"_ext/inlead.digital/_next/static/chunks/68539-00d71b43037cc57a.js","https://inlead.digital/_next/static/chunks/3949d334-c0f0307d1bf2c2c2.js":"_ext/inlead.digital/_next/static/chunks/3949d334-c0f0307d1bf2c2c2.js","https://inlead.digital/_next/static/chunks/94421-f3119dcbc406f0da.js":"_ext/inlead.digital/_next/static/chunks/94421-f3119dcbc406f0da.js","https://inlead.digital/_next/static/chunks/33024-dcb179f5b5e74a8b.js":"_ext/inlead.digital/_next/static/chunks/33024-dcb179f5b5e74a8b.js","https://inlead.digital/_next/static/chunks/43485-8753ed776e25fbc3.js":"_ext/inlead.digital/_next/static/chunks/43485-8753ed776e25fbc3.js","https://inlead.digital/_next/static/chunks/98368-63e0fc73bff1ccba.js":"_ext/inlead.digital/_next/static/chunks/98368-63e0fc73bff1ccba.js","https://inlead.digital/_next/static/chunks/10123-cd2e33b8bd96249f.js":"_ext/inlead.digital/_next/static/chunks/10123-cd2e33b8bd96249f.js","https://inlead.digital/_next/static/chunks/31042-215878545ddf5014.js":"_ext/inlead.digital/_next/static/chunks/31042-215878545ddf5014.js","https://inlead.digital/_next/static/chunks/70288-423abf1014e884f8.js":"_ext/inlead.digital/_next/static/chunks/70288-423abf1014e884f8.js","https://inlead.digital/_next/static/chunks/55820-2dd009dfd9c34a6d.js":"_ext/inlead.digital/_next/static/chunks/55820-2dd009dfd9c34a6d.js","https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7W0Q5n-wU.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7W0Q5n-wU.woff2","https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7W0Q5n-wU.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7W0Q5n-wU.woff2","https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7W0Q5n-wU.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7W0Q5n-wU.woff2","https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7W0Q5n-wU.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7W0Q5n-wU.woff2","https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7W0Q5n-wU.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7W0Q5n-wU.woff2","https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7W0Q5n-wU.woff2":"_ext/fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7W0Q5n-wU.woff2","https://inlead.digital/images/logo.png":"_ext/inlead.digital/images/logo.png","https://content.inlead.cloud/2026/01/allan.tracker.jpg":"_ext/content.inlead.cloud/2026/01/allan.tracker.jpg","https://content.inlead.cloud/2026/01/je.jessicalais.jpg":"_ext/content.inlead.cloud/2026/01/je.jessicalais.jpg","https://content.inlead.cloud/2026/02/reportei-white.png":"_ext/content.inlead.cloud/2026/02/reportei-white.png","https://content.inlead.cloud/2026/07/lucasmiike.jpg":"_ext/content.inlead.cloud/2026/07/lucasmiike.jpg","https://content.inlead.cloud/2026/07/felipenonino_.jpg":"_ext/content.inlead.cloud/2026/07/felipenonino_.jpg","https://liberado.painosso.online/images/logo.png":"images/logo.png","https://content.inlead.cloud/2025/12/soumarcoslaranjeira-quote.jpg":"_ext/content.inlead.cloud/2025/12/soumarcoslaranjeira-quote.jpg","https://liberado.painosso.online/images/influencers/bressan.jpg":"images/influencers/bressan.jpg","https://inlead.digital/images/influencers/bressan.jpg":"_ext/inlead.digital/images/influencers/bressan.jpg","https://inlead.digital/images/influencers/lucas.jpg":"_ext/inlead.digital/images/influencers/lucas.jpg","https://inlead.digital/images/influencers/matheussanfer.jpg":"_ext/inlead.digital/images/influencers/matheussanfer.jpg","https://liberado.painosso.online/images/influencers/lucas.jpg":"images/influencers/lucas.jpg","https://liberado.painosso.online/images/influencers/matheussanfer.jpg":"images/influencers/matheussanfer.jpg","https://liberado.painosso.online/images/logo-icon.png":"images/logo-icon.png","https://inlead.digital/images/logo-icon.png":"_ext/inlead.digital/images/logo-icon.png","https://inlead.digital/images/illustrations/idea_flow.png":"_ext/inlead.digital/images/illustrations/idea_flow.png","https://d9aloqs890lqz.cloudfront.net/uploads/13/18-08-2024/lvdk0-11-hd-2.jpg":"_ext/d9aloqs890lqz.cloudfront.net/uploads/13/18-08-2024/lvdk0-11-hd-2.jpg","https://public.inlead.cloud/images/templates/better-fit.png":"_ext/public.inlead.cloud/images/templates/better-fit.png","https://d9aloqs890lqz.cloudfront.net/uploads/13/23-05-2024/3qp8o-pensamentos-1.png":"_ext/d9aloqs890lqz.cloudfront.net/uploads/13/23-05-2024/3qp8o-pensamentos-1.png","https://content.inlead.cloud/2026/04/anl-score.png?v=1":"_ext/content.inlead.cloud/2026/04/anl-score.png","https://content.inlead.cloud/2026/04/anl-funnel.png?v=1":"_ext/content.inlead.cloud/2026/04/anl-funnel.png","https://public.inlead.cloud/images/templates/livemind-template.png":"_ext/public.inlead.cloud/images/templates/livemind-template.png","https://content.inlead.cloud/2026/04/anl-metrics.png?v=1":"_ext/content.inlead.cloud/2026/04/anl-metrics.png","https://liberado.painosso.online/images/illustrations/idea_flow.png":"images/illustrations/idea_flow.png","https://content.inlead.cloud/2026/04/anl-sources.png?v=1":"_ext/content.inlead.cloud/2026/04/anl-sources.png","https://content.inlead.cloud/2026/04/anl-devices.png?v=1":"_ext/content.inlead.cloud/2026/04/anl-devices.png","https://content.inlead.cloud/2026/04/anl-traffic.png?v=1":"_ext/content.inlead.cloud/2026/04/anl-traffic.png","https://public.inlead.cloud/images/site-image.png":"_ext/public.inlead.cloud/images/site-image.png"};
  var POSTS = {"https://api.analysis.inlead.tech/records/register/?type=pageview":"_c/post-f33b1cddf5-register.json","https://api.analysis.inlead.tech/leads/register":"_c/post-c90d9a7cbd-register.json","https://api.analysis.inlead.tech/records/register/?type=stepview":"_c/post-85cf1e2b0a-register.json"};
  var HEADS = {"https://liberado.painosso.online/_next/data/qgBbdQXjMR0J30zC8mUKC/index.json?all=liberado%7Cpainosso%7Conline":{"status":200,"headers":{"x-matched-path":"/_next/data/qgBbdQXjMR0J30zC8mUKC/[...all].json","x-nextjs-rewrite":"/liberado|painosso|online?all=liberado%7Cpainosso%7Conline"}}};
  var GUARD = /*CLONADOR_GUARD*/{"on":true,"ids":["2386932512117175","GTM-N7VPJJC4","390833810334922"],"prefixes":[],"allow":[]}/*/CLONADOR_GUARD*/;
  var FAMS = [["meta","connect\\.facebook\\.net|facebook\\.com\\/tr\\b|facebook\\.com\\/privacy_sandbox|\\/fbevents\\.js","i"],["google","googletagmanager\\.com|google-analytics\\.com|analytics\\.google\\.com|googleadservices\\.com|doubleclick\\.net|googlesyndication\\.com|\\.google\\.[a-z.]+\\/(ccm|rmkt|pagead|ads\\/ga-audiences)\\/|\\/gtag\\/js\\?|\\/gtm\\.js\\?id=GTM-","i"],["tiktok","analytics\\.tiktok\\.com|analytics-sg\\.tiktok\\.com|business-api\\.tiktok\\.com","i"],["twitter","ads-twitter\\.com|analytics\\.twitter\\.com|\\/\\/t\\.co\\/(1\\/)?i\\/adsct|ads-api\\.x\\.com","i"],["pinterest","pinimg\\.com\\/ct\\/|ct\\.pinterest\\.com","i"],["snap","sc-static\\.net\\/scevent|tr\\.snapchat\\.com|tr-shadow\\.snapchat\\.com","i"],["bing","bat\\.bing\\.com|bat\\.r\\.msn\\.com","i"],["reddit","redditstatic\\.com\\/ads|alb\\.reddit\\.com|pixel-config\\.reddit\\.com","i"],["kwai","kwai|kwaipros","i"],["taboola","taboola\\.com","i"],["outbrain","outbrain\\.com","i"],["clarity","clarity\\.ms","i"],["hotjar","hotjar\\.(com|io)","i"],["utmify","utmify","i"],["outros","bzr\\.openai\\.com|bzrcdn\\.openai\\.com|magnus\\.ms|adjust\\.com|adjust\\.net\\.in|appsflyer\\.com|onelink\\.me\\/.*pixel|amplitude\\.com|mixpanel\\.com|api\\.segment\\.io|cdn\\.segment\\.com|fullstory\\.com|posthog\\.com|heapanalytics\\.com|logrocket\\.(io|com)|lr-ingest|sentry\\.io|ingest\\.sentry|\\/\\/sentry\\.|datadoghq|browser-intake|newrelic\\.com|nr-data\\.net|onesignal\\.com|quantserve|scorecardresearch|criteo|adnxs|adsrvr|mc\\.yandex|yandex\\.ru\\/(metrika|watch)|plausible\\.io\\/api\\/event|stats\\.wp\\.com|pixel\\.wp\\.com|events\\.launchdarkly|cdn\\.mxpnl\\.com|smartlook|mouseflow|luckyorange|crazyegg","i"]].map(function (f) { return [f[0], new RegExp(f[1], f[2])]; });
  var TPATH = new RegExp("\\/gtm\\.js\\?id=GTM-|\\/gtag\\/js\\?id=|\\/g\\/collect\\?|\\/j\\/collect\\?|\\/r\\/collect\\?|\\/ccm\\/collect|\\/rmkt\\/collect|\\/pagead\\/(1p-)?(viewthrough)?conversion|\\/tr\\/?\\?id=\\d+&ev=|\\/signals\\/config\\/\\d+|\\/i18n\\/pixel\\/events\\.js", "i");
  var THOST = new RegExp("^(ev|evt|evtruck|events?|track(ing|er)?|collect(or)?|analytics|metrics|telemetry|stats|pixels?|logs?|logging|ingest|beacon|rum|sgtm)\\.", "i");
  var LOCAL = {};
  function index(m) {
    var by = {};
    for (var k in m) {
      var qi = k.indexOf('?'); var b = qi < 0 ? k : k.slice(0, qi);
      (by[b] = by[b] || []).push(k);
    }
    return by;
  }
  for (var k in MAP) LOCAL[MAP[k]] = 1;
  var BYPATH = index(MAP);
  var POSTBY = index(POSTS);
  var HEADBY = index(HEADS);
  window.__CLONADOR_RT__ = { root: ROOT, orig: ORIG, guard: GUARD, blocked: [] };

  // parâmetros que só servem para furar cache (ex.: ?_rsc= do Next.js, ?v=123): não mudam o conteúdo
  var VOLATILE = /^(_rsc|_|t|ts|_t|_ts|timestamp|cb|cachebust|cache_bust|nocache|rand|v|ver|version|dpl)$/i;
  function stripVolatile(u) {
    try {
      var x = new URL(u); var keep = [];
      x.searchParams.forEach(function (val, key) { if (!VOLATILE.test(key)) keep.push([key, val]); });
      keep.sort(function (a, c) { return a[0] < c[0] ? -1 : a[0] > c[0] ? 1 : 0; });
      x.search = '';
      for (var i = 0; i < keep.length; i++) x.searchParams.append(keep[i][0], keep[i][1]);
      return x.href;
    } catch (e) { return u; }
  }
  function lookupIn(m, by, abs, loose) {
    if (m[abs] != null) return m[abs];
    var qi = abs.indexOf('?'); var base = qi < 0 ? abs : abs.slice(0, qi);
    var list = by[base];
    if (!list) return null;
    var target = stripVolatile(abs);
    for (var i = 0; i < list.length; i++) if (stripVolatile(list[i]) === target) return m[list[i]];
    if (loose) return m[list[0]];
    return null;
  }
  // imagens: aceita outra variação da mesma imagem (outra largura do next/image, outro ?w=)
  function lookupImage(abs) {
    var hit = lookupIn(MAP, BYPATH, abs, false);
    if (hit != null) return hit;
    try {
      var x = new URL(abs);
      if (/\/_next\/image\/?$/.test(x.pathname) && x.searchParams.get('url')) {
        var want = x.searchParams.get('url'); var w = +x.searchParams.get('w') || 0;
        var list = BYPATH[x.origin + x.pathname] || []; var best = null; var bd = 1e9;
        for (var i = 0; i < list.length; i++) {
          var y = new URL(list[i]);
          if (y.searchParams.get('url') !== want) continue;
          var d = Math.abs((+y.searchParams.get('w') || 0) - w);
          if (d < bd) { bd = d; best = list[i]; }
        }
        if (best) return MAP[best];
        return lookupIn(MAP, BYPATH, new URL(want, abs).href, true);
      }
      if (/\.(png|jpe?g|gif|webp|avif|svg)$/i.test(x.pathname) || /[?&](w|width|h|height|q|quality|fit|format|fm|auto)=/.test(x.search)) return lookupIn(MAP, BYPATH, abs, true);
    } catch (e) {}
    return null;
  }

  // ---------- bloqueio de rastreamento do dono original
  function familyOf(u) { for (var i = 0; i < FAMS.length; i++) if (FAMS[i][1].test(u)) return FAMS[i][0]; return null; }
  function blocks(abs) {
    if (!GUARD.on || !/^https?:/i.test(abs)) return false;
    for (var i = 0; i < GUARD.prefixes.length; i++) if (abs.indexOf(GUARD.prefixes[i]) === 0) return true;
    var dec = abs; try { dec = decodeURIComponent(abs); } catch (e) {}
    for (var j = 0; j < GUARD.ids.length; j++) if (GUARD.ids[j] && dec.indexOf(GUARD.ids[j]) >= 0) return true;
    var fam = familyOf(abs) || (TPATH.test(abs) ? 'google' : null);
    if (fam) return GUARD.allow.indexOf(fam) < 0;
    try { var hn = new URL(abs).hostname; return hn !== location.hostname && THOST.test(hn) && GUARD.allow.indexOf('host:' + hn) < 0; } catch (e) { return false; }
  }
  function note(u) { try { var b = window.__CLONADOR_RT__.blocked; if (b.length < 200) b.push(String(u).slice(0, 300)); } catch (e) {} }
  var EMPTY_JS = 'data:text/javascript,';
  var EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

  function splitHash(s) { var i = s.indexOf('#'); return i < 0 ? [s, ''] : [s.slice(0, i), s.slice(i)]; }
  function localExists(abs) {
    if (abs.indexOf(ROOT) !== 0) return false;
    var rel = abs.slice(ROOT.length).split('?')[0];
    try { rel = decodeURIComponent(rel); } catch (e) {}
    if (rel === '' || rel.slice(-1) === '/') rel += 'index.html';
    // pastas que só existem no clone (CSS reescrito, espelhos de outros domínios, runtime)
    if (/^(_c|_ext|_clone)\//.test(rel)) return true;
    return !!LOCAL[rel];
  }
  function absOf(u) {
    var s = String(u).trim();
    var cur = new URL(splitHash(s)[0], document.baseURI).href;
    var orig = new URL(splitHash(s)[0], ORIG).href;
    return { cur: cur, orig: orig, hash: splitHash(s)[1] };
  }
  // kind: 'img' aceita variações da mesma imagem; 'block' devolve o substituto quando é rastreador
  function mapUrl(u, kind) {
    if (u == null) return u;
    var isObj = typeof u === 'object' && u instanceof URL;
    if (typeof u !== 'string' && !isObj) return u;
    var s = String(u).trim();
    if (!s || /^(data|blob|javascript|about|mailto|tel|chrome-extension):/i.test(s)) return u;
    if (s.indexOf('/__clonador/') >= 0) return u; // arquivos do editor do Clonador
    try {
      var a = absOf(s);
      if (kind && kind !== 'img' && (blocks(a.orig) || blocks(a.cur))) { note(a.orig); return kind; }
      if (localExists(a.cur)) return u;
      var look = kind === 'img' ? lookupImage : function (x) { return lookupIn(MAP, BYPATH, x, false); };
      var hit = look(a.orig);
      if (hit == null) hit = look(a.cur);
      if (hit != null) return ROOT + hit + a.hash;
      if (kind === 'img' && (blocks(a.orig) || blocks(a.cur))) { note(a.orig); return EMPTY_GIF; }
      if (new URL(a.cur).origin === location.origin) return a.orig + a.hash;
      return u;
    } catch (e) { return u; }
  }
  function mapSrcset(v) {
    if (typeof v !== 'string') return v;
    return v.split(/,(?=\s*\S)/).map(function (part) {
      var m = part.trim().split(/\s+/);
      m[0] = mapUrl(m[0], 'img');
      return m.join(' ');
    }).join(', ');
  }
  function mapCssText(t) {
    if (typeof t !== 'string' || t.indexOf('url(') < 0) return t;
    return t.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, function (m, q, ref) {
      var n = mapUrl(ref, 'img');
      return n === ref ? m : 'url("' + n + '")';
    });
  }
  function postHit(u) {
    try { var a = absOf(u); var h = lookupIn(POSTS, POSTBY, a.orig, false); if (h == null) h = lookupIn(POSTS, POSTBY, a.cur, false); return h; } catch (e) { return null; }
  }
  function trackerReq(u) { try { var a = absOf(u); return blocks(a.orig) || blocks(a.cur) ? a.orig : null; } catch (e) { return null; } }
  window.__clonadorMapUrl = mapUrl;

  // fetch e XHR
  var F = window.fetch;
  if (F) {
    window.fetch = function (input, init) {
      try {
        var isReq = input && typeof input === 'object' && !(input instanceof URL) && input.url;
        var url = isReq ? input.url : String(input);
        var method = String((init && init.method) || (isReq && input.method) || 'GET').toUpperCase();
        var t = trackerReq(url);
        if (t) { note(t); return Promise.resolve(new Response('{}', { status: 200, headers: { 'content-type': 'application/json' } })); }
        if (method === 'HEAD') {
          // sondagem de middleware do Next.js: devolve os cabeçalhos gravados na captura
          var hd = null; try { var ah = absOf(url); hd = lookupIn(HEADS, HEADBY, ah.orig, false); if (hd == null) hd = lookupIn(HEADS, HEADBY, ah.cur, false); } catch (e) {}
          if (hd != null) return Promise.resolve(new Response(null, { status: hd.status || 200, headers: hd.headers || {} }));
        }
        if (method !== 'GET' && method !== 'HEAD') {
          var ph = postHit(url);
          if (ph != null) return F.call(this, ROOT + ph, { method: 'GET', credentials: 'same-origin' });
        }
        if (isReq) { var n = mapUrl(input.url); if (n !== input.url) input = new Request(n, input); }
        else input = mapUrl(url);
      } catch (e) {}
      return F.call(this, input, init);
    };
  }
  var XO = XMLHttpRequest.prototype.open;
  var XS = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url) {
    this.__cl = null;
    try {
      var t = trackerReq(url);
      if (t) { note(t); this.__cl = 'get'; arguments[0] = 'GET'; arguments[1] = 'data:application/json,{}'; }
      else if (!/^(GET|HEAD)$/i.test(method || 'GET')) {
        var ph = postHit(url);
        if (ph != null) { this.__cl = 'get'; arguments[0] = 'GET'; arguments[1] = ROOT + ph; }
      }
      if (!this.__cl) arguments[1] = mapUrl(url);
    } catch (e) {}
    return XO.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function (body) {
    if (this.__cl === 'get') return XS.call(this, null);
    return XS.apply(this, arguments);
  };
  if (navigator.sendBeacon) {
    var SB = navigator.sendBeacon.bind(navigator);
    navigator.sendBeacon = function (url, data) {
      var t = trackerReq(url);
      if (t) { note(t); return true; }
      return SB(mapUrl(url), data);
    };
  }

  // propriedades src/href/srcset/poster
  function hook(proto, prop, fn) {
    try {
      var d = Object.getOwnPropertyDescriptor(proto, prop);
      if (!d || !d.set) return;
      Object.defineProperty(proto, prop, {
        configurable: true, enumerable: d.enumerable,
        get: d.get, set: function (v) { return d.set.call(this, fn(v)); }
      });
    } catch (e) {}
  }
  var asImg = function (v) { return mapUrl(v, 'img'); };
  hook(HTMLImageElement.prototype, 'src', asImg);
  hook(HTMLImageElement.prototype, 'srcset', mapSrcset);
  hook(HTMLSourceElement.prototype, 'src', function (v) { return mapUrl(v); });
  hook(HTMLSourceElement.prototype, 'srcset', mapSrcset);
  hook(HTMLScriptElement.prototype, 'src', function (v) { return mapUrl(v, EMPTY_JS); });
  hook(HTMLLinkElement.prototype, 'href', function (v) { return mapUrl(v, 'data:,'); });
  hook(HTMLIFrameElement.prototype, 'src', function (v) { var t = trackerReq(v); if (t) { note(t); return 'about:blank'; } return v; });
  hook(HTMLMediaElement.prototype, 'src', function (v) { return mapUrl(v); });
  hook(HTMLVideoElement.prototype, 'poster', asImg);

  var SA = Element.prototype.setAttribute;
  var TAGS = { IMG: 1, SOURCE: 1, SCRIPT: 1, LINK: 1, VIDEO: 1, AUDIO: 1, TRACK: 1, INPUT: 1, IMAGE: 1, USE: 1, IFRAME: 1 };
  function mapAttr(el, name, value) {
    var n = String(name).toLowerCase();
    if (n === 'style') return mapCssText(value);
    var tag = el.tagName.toUpperCase();
    if (!TAGS[tag]) return value;
    if (tag === 'IFRAME') { if (n === 'src') { var t = trackerReq(value); if (t) { note(t); return 'about:blank'; } } return value; }
    if (n === 'src' || n === 'poster' || (n === 'href' && tag !== 'A') || n === 'xlink:href') {
      if (tag === 'SCRIPT') return mapUrl(value, EMPTY_JS);
      if (tag === 'LINK') return mapUrl(value, 'data:,');
      if (tag === 'IMG' || n === 'poster' || tag === 'IMAGE') return mapUrl(value, 'img');
      return mapUrl(value);
    }
    if (n === 'srcset') return mapSrcset(value);
    return value;
  }
  Element.prototype.setAttribute = function (name, value) {
    try { value = mapAttr(this, name, value); } catch (e) {}
    return SA.call(this, name, value);
  };

  // conteúdo inserido via innerHTML / templates: corrige depois de entrar no DOM
  var ATTRS = ['src', 'srcset', 'poster', 'href', 'style'];
  function fix(el) {
    if (!el || el.nodeType !== 1 || el.hasAttribute('data-clonador-ui')) return;
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute(a)) continue;
      var v = el.getAttribute(a);
      var n = mapAttr(el, a, v);
      if (n !== v) SA.call(el, a, n);
    }
  }
  function fixTree(node) {
    if (!node || node.nodeType !== 1) return;
    fix(node);
    if (node.querySelectorAll) {
      var list = node.querySelectorAll('img,source,video,audio,link,script,image,use,iframe,[style*="url("]');
      for (var i = 0; i < list.length; i++) fix(list[i]);
    }
  }
  try {
    new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.type === 'attributes') fix(m.target);
        else for (var j = 0; j < m.addedNodes.length; j++) fixTree(m.addedNodes[j]);
      }
    }).observe(document.documentElement, { subtree: true, childList: true, attributes: true, attributeFilter: ATTRS });
  } catch (e) {}
})();
