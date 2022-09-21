import pandas as pd
from bs4 import BeautifulSoup
import requests
import json

links = []

for x in range (1, 3):
    x = 1;
    url='https://softwareengineeringdaily.com/category/all-episodes/exclusive-content/Podcast/page/' + str(x) + '/'
    headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
    result = requests.get(url, headers=headers)
    content=result.text
    soup=BeautifulSoup(content, "html.parser")
    soup.find_all(class_="wp-audio-shortcode")
    tag = soup.find_all("div", "archive-article-holder")
    for y in tag:
        tag_2 = y.find_all("div", "col-xs-12")
        for z in tag_2:
            link = z.find_all("a")[0]
            links.append({'link' : link['href']})

result = json.dumps(links)
print(result)