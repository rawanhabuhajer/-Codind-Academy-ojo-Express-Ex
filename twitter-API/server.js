require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient")
const CronJob = require("cron").CronJob;

const tweet = async ()=>{

    try {
        await twitterClient.v2.tweet('Hello this tweet come code')
    } catch (error) {
        console.log(error);
    }
}
const cronTweet = new CronJob("* * 1 * * *", async () => {
    tweet();
  });
  
  cronTweet.start();
