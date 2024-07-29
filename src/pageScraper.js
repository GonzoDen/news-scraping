const moment = require('moment');

const getPaginatedUrl = (page) => {
    let baseUrl = 'https://podrobno.uz/';
    return `${baseUrl}search/?tags=&q=%D1%83%D0%B1%D0%B8%D0%BB+%D0%B6%D0%B5%D0%BD%D1%83+&how=r&PAGEN_1=${page}`;
}

const scraperObject = {
    moment,
    async scraper(browser) {
        const numberOfPages = 1;
        let allData = [];

        for (let i = 1; i <= numberOfPages; i++) {
            let page = await browser.newPage();
            console.log(`Navigating to ${getPaginatedUrl(i)}...`);
            await page.goto(getPaginatedUrl(i), { waitUntil: 'networkidle0', timeout: 60000 });
            // Wait for the required DOM to be rendered
            await page.waitForSelector('.content-block');
            // Get the link to all the required books
            let result = await page.$$eval('.search-page', results => {
                let data = {};
                data['link'] = results.map(el => el.querySelector('[href*="/cat"]')?.href || '');
                data['title'] = results.map(el => el.querySelector('[href*="/cat"]')?.textContent || '');
                data['date'] = results.map(el => el.querySelector('small')?.textContent || '');
                data['short_description'] = results.map(el => el.querySelector('p')?.textContent || '');
                // data['tags'] = results.map(el => Array.from(el.querySelectorAll('.tag')).map(el => el.textContent).join());

                return data;
            });

            allData.push(result);
            page.close();
        }

        return {
            link: allData.map(item => item.link).flat(),
            title: allData.map(item => item.title).flat(),
            date: allData.map(item => item.date).flat(),
            short_description: allData.map(item => item.short_description).flat(),
        };
    }
}

module.exports = scraperObject;
