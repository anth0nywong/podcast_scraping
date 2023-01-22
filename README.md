## Podcast Scraping

## Tech

##### Python/Beautiful Soup

Created Python script to scrap audio links and podcast title from destination website. The data is then exported in JSON format.

##### ExpressJS/JavaScript

Running on server side to keep the the data file updated.

## How to use:

After pulling, enter "yarn install" on terminal to install the necessary libraries.

Enter "yarn start" to initialize the program, the python script will run in the background to update the podcast information.

Get "/api/(page_number)" to retrieve data of title and links of each padcast.

For a User Interface with a list of podcasts, navigate to /page/(page_number).

## [Demo](https://podcast.anthonyhhwong.link/page/1)
