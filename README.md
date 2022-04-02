
# Assignment

It will return the latest 6 stories on Time.com's
 when I call it as a custom API.
 So I Will call the service like this, assuming the URL to the service is
http://<localhost>/getTimeStories this is a simple GET call. In response I Want This,
this is a JSON object array with the latest  6 stories, by parsing the page:



## Screenshots

![App Screenshot](https://github.com/siddharthraj09/Assignment/blob/master/screenshots/After%20hitting%20api.JPG?raw=true)
![App Screenshot](https://github.com/siddharthraj09/Assignment/blob/master/screenshots/details_json.PNG?raw=true)


## Running Tests

To run tests, run the following command

```bash
  node ./app.js
```

Use the url
http://localhost:3000/getTimeStories

On clicking refresh tab latest stories will be printed on html and as well wil be written on "details.json" file