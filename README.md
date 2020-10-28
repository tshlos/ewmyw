# EWMYW

## Description

EWMYW is a podcast discoverability app.

## Installation
1. Fork and clone the repository. 
2. Get a Client ID and Client Secret from Spotify and include the following:
- client_id: "Your Client ID here"
- client_secret: "Your Client Secret here"
3. Navigate to the directory where you cloned the repository. 
4. cd into the backend and run:
  - `$ bundle install`
  - `$ rails db migrate`
  - `$ rails s`
 5. cd into the fronend and run:
  - `$ npm install`
  - `$ npm start`

## Features
### 1. Sign Up/Login
  - Create a new account or login to an existing account
  
### 2. Search
  - Look up podcasts based on title or category.
  - Infinite Scroll implemented to continuously load data as the scroll gets closer to the bottom of the page.
 
### 3. Add/Delete to Playlist
  - Add/delete podcast from playlist with drag and drop feature.

## Demo
### Login
![Login Demo](https://media.giphy.com/media/WfsSKpnQnvc7nVzn04/giphy.gif)

### Search Feature
![Search Feature](https://media.giphy.com/media/yvXSaotfF6l5m2DF9x/giphy.gif)
![Infinite Scroll](https://media.giphy.com/media/LVv0jW8Tf9OlCuJcrE/giphy.gif)

### Like/Delete Feature
![Like Feature](https://media.giphy.com/media/HPF604n1W5lYISdWDn/giphy.gif)
![Delete Feature](https://media.giphy.com/media/3f6HlDrauZsHyZ9rEg/giphy.gif)
