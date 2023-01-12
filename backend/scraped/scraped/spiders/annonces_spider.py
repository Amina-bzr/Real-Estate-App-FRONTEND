import scrapy
import vars
from scraped.items import AnnonceItem
# we only scrape the vente and echange categories

from scrapy.http import FormRequest


def authentication_failed(response):
    # TODO: Check the contents of the response and return True if it failed
    # or False if it succeeded.
    pass


class LoginSpider(scrapy.Spider):
    name = 'annonces'
    start_urls = ['http://127.0.0.1:8000/api-auth/login/?next=/annonces/']

    def parse(self, response):
        return scrapy.FormRequest.from_response(
            response,
            formdata={'username': vars.admin_username,
                      'password': vars.admin_pwd},
            callback=self.after_login,
        )

    def after_login(self, response):
        if authentication_failed(response):
            self.logger.error("Login failed")
            return

        # continue scraping with authenticated session...
        # post to /annonces
        return [FormRequest(url="http://127.0.0.1:8000/annonces",
                            formdata={'categorie': 'Vente', 'type': 'Villa', 'surface': '1', 'prix': '100000',
                                      'description': 'scrapy is sworking', 'wilaya': 'alger', 'commune': 'hydra', 'addresse': 'hydra'},
                            )]


''' class QuotesSpider(scrapy.Spider):
    name = "annonces"
    start_urls = [
        'https://www.ouedkniss.com/immobilier/1',
    ]

    def parse(self, response):
        for a in response.css('a.v-card--link'):
            yield response.follow(a, callback=self.parse_annonces)

    def parse_annonces(self, response):
        categories = ['Vente', 'Echange']
        titre = response.css('header.h2::text').get().split(' ')
        if titre[0] in categories:
            return {
                'categorie': titre[0],
                'type': titre[1],
                'surface': response.css('span.mr-1::text').get().split(' ')[0],
                'wilaya': response.css('div.v-sheet.v-card::text').get().split(' - ')[0],
                'commune': response.css('div.v-sheet.v-card::text').get().split(' - ')[1],
                'addresse': response.css('div.text-wrap.text-capitalize.d-flex.flex-wrap.flex-gap-2::text').get(),
                'prix': " ".join(response.css('header div span span::text').getall()),
                'description': response.xpath('//*[@id="sidebar-layout"]/div[1]/div[6]/div[3]/div/div/div/text()').get()
            }
        item = AnnonceItem()
        item['categorie'] = titre[0]
        item['type'] = titre[1]
        item['surface'] = response.css('span.mr-1::text').get().split(' ')[0]
        item['wilaya'] = response.css(
            'div.v-sheet.v-card::text').get().split(' - ')[0]
        item['commune'] = response.css(
            'div.v-sheet.v-card::text').get().split(' - ')[1]
        item['addresse'] = response.css(
            'div.text-wrap.text-capitalize.d-flex.flex-wrap.flex-gap-2::text').get()
        item['prix'] = " ".join(response.css(
            'header div span span::text').getall())
        item['description'] = response.xpath(
            '//*[@id="sidebar-layout"]/div[1]/div[6]/div[3]/div/div/div/text()').get()
        yield (item)
 '''
