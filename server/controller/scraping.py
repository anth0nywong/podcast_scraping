import pandas as pd
from bs4 import BeautifulSoup
import requests
import json
import os

open('links.json', 'w').close()


def save(links, page):
    object = []
    for link in links:
        url = link
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
        result = requests.get(url, headers=headers)
        content = result.text
        soup = BeautifulSoup(content, "html.parser")
        object.append({"title": soup.find("h1").contents[0], "link": soup.find("audio").find("source")['src']})

    result = json.dumps(object)
    dirname = os.path.dirname(__file__)
    filename = os.path.join(dirname, 'links.json')
    with open(filename, 'a') as file:
        file.write(result)
    if os.path.exists('../data/data' + str(page) + '.json'):
        os.remove('../data/data' + str(page) + '.json')
    os.replace(filename, './server/data/data' + str(page) + '.json')


def scraping():
    page = 1
    links = []
    for x in range(1, 350):

        url = 'https://softwareengineeringdaily.com/category/all-episodes/exclusive-content/Podcast/page/' + str(
            x) + '/'
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
        # try:
        result = requests.get(url, headers=headers)
        content = result.text
        soup = BeautifulSoup(content, "html.parser")
        soup.find_all(class_="wp-audio-shortcode")
        tag = soup.find_all("div", "archive-article-holder")
        for y in tag:
            tag_2 = y.find_all("div", "col-xs-12")
            for z in tag_2:
                link = z.find_all("a")[0]
                links.append(link['href'])
        if len(links) > 10:
            save(links, page)
            links = []
            page += 1
        # except:
        #     print("all scripting has completed")
        #     break
    if len(links) > 0:
        save(links, page)
        links = []
        page += 1


while True:
    scraping()
    time.sleep(1800)
