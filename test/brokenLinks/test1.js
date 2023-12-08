// const fetch = require('node-fetch');

// describe('Broken Links Test Suite', () => {
// it('should find and log broken links', async () => {
//   const baseUrl = 'https://qavbox.github.io/';
//   await browser.url(`${baseUrl}demo/link/`);
//   await browser.url(`${baseUrl}demo/alert/`);
//   await browser.pause(3000);

//   await $$('a').forEach(async (link) => {
//     const href = await link.getAttribute('href');
//     let url;

//     if (href && !href.startsWith('http')) {
//       console.log(`before - ${href}`);
//       url = new URL(href, baseUrl);
//       console.log('after - ', url);
//     }

//     if (url) {
//       await fetch(url, { method: 'HEAD' }).then(async (resp) => {
//         if (resp.status >= 400) {
//           console.error(`Broken link found: ${url} (Status Code: ${resp.status})`);
//         }
//       }).catch((error) => {
//         console.error(`Error checking link: ${url}`, error.message);
//       });
//     }
//   });
// });
// });

const fetch = require('node-fetch');

describe('Broken Links Test Suite', () => {
  const baseUrl = 'https://qavbox.github.io/';
  const pathsToCheck = [
    'demo/link/',
    'demo/alert/'
    // Add more paths as needed
  ];

  pathsToCheck.forEach((path) => {
    const urlToCheck = `${baseUrl}${path}`;

    it(`should find and log broken links on ${urlToCheck}`, async () => {
      await browser.url(urlToCheck);
      await browser.pause(3000);

      await $$('a').forEach(async (link) => {
        const href = await link.getAttribute('href');
        let absoluteUrl;

        if (href && !href.startsWith('http')) {
          console.log(`before - ${href}`);
          absoluteUrl = new URL(href, baseUrl);
          console.log('after - ', absoluteUrl);
        }

        if (absoluteUrl) {
          await fetch(absoluteUrl, { method: 'HEAD' })
            .then(async (resp) => {
              if (resp.status >= 400) {
                console.error(`Broken link found: ${absoluteUrl} (Status Code: ${resp.status})`);
              }
            })
            .catch((error) => {
              console.error(`Error checking link: ${absoluteUrl}`, error.message);
            });
        }
      });
    });
  });
});

