

var g = [];
var values = [];
values["modi"] = [ 80, 50, 65 ];
values["rahul"] = [ 40, 75, 55 ];
values["kejri"] = [ 60, 50, 85 ];

var valu = [];
valu["modi"] = {} ;
valu["rahul"] = {} ;
valu["kejri"] = {} ;
valu["modi"][0] = {"like":"1,000","dislike":"200"};
valu["modi"][1] = {"like":"500","dislike":"200"};
valu["modi"][2] = {"like":"600","dislike":"141"};
valu["rahul"][0] = {"like":"130","dislike":"50"};
valu["rahul"][1] = {"like":"260","dislike":"20"};
valu["rahul"][2] = {"like":"200","dislike":"10"};
valu["kejri"][0] = {"like":"100","dislike":"20"};
valu["kejri"][1] = {"like":"200","dislike":"20"};
valu["kejri"][2] = {"like":"700","dislike":"10"};





var tweet_data = [{}];
tweet_data["Salman Khan"] = [{"tweet_id":"1", "date" : "10-DEC-2013", "tweet":"BJP is very good ! Modi Will lead us to development" },
                             {"tweet_id":"2", "date" : "01-JAN-2014", "tweet": "Modi is the Protector" },
                             {"tweet_id":"3", "date" : "15-JAN-2014", "tweet": "Modi is intelligent" },
                             {"tweet_id":"4", "date" : "15-NOV-2013", "tweet": "Modi is very intelligent" },
                             {"tweet_id":"5", "date" : "25-OCT-2013", "tweet": "Modi is very very intelligent" }];
tweet_data["RajiniKanth"] = [{"tweet_id":"1", "date" : "10-DEC-2013", "tweet":"Modi is the Protector" },
                             {"tweet_id":"2", "date" : "01-JAN-2014", "tweet": "BJP is very good ! Modi Will lead us to development" },
                             {"tweet_id":"3", "date" : "15-JAN-2014", "tweet": "Modi is intelligent" },
                             {"tweet_id":"4", "date" : "15-NOV-2013", "tweet": "Modi is very intelligent" },
                             {"tweet_id":"5", "date" : "25-OCT-2013", "tweet": "Modi is very very intelligent" }];
tweet_data["Sachin"] = [{"tweet_id":"1", "date" : "10-DEC-2013", "tweet":"Modi is the Protector" },
                        {"tweet_id":"2", "date" : "01-JAN-2014", "tweet": "BJP is very good ! Modi Will lead us to development" },
                        {"tweet_id":"3", "date" : "15-JAN-2014", "tweet": "Modi is intelligent" },
                        {"tweet_id":"4", "date" : "15-NOV-2013", "tweet": "Modi is very intelligent" },
                        {"tweet_id":"5", "date" : "25-OCT-2013", "tweet": "Modi is very very intelligent" }];
tweet_data["Amitabh"] = [{"tweet_id":"1", "date" : "10-DEC-2013", "tweet":"Rahul is the Protector" },
                         {"tweet_id":"2", "date" : "01-JAN-2014", "tweet": "Congress is very good ! Modi Will lead us to development" },
                         {"tweet_id":"3", "date" : "15-JAN-2014", "tweet": " rahul is intelligent" },
                         {"tweet_id":"4", "date" : "15-NOV-2013", "tweet": "rahul is very intelligent" },
                         {"tweet_id":"5", "date" : "25-OCT-2013", "tweet": "rahul is very very intelligent" }];
//alert(tweet_data["salman Khan"][0]["tweet"]);

var video_data = [];
video_data["modi"] = [ {} ];
video_data["rahul"] = [ {} ];
video_data["kejri"] = [ {} ];
video_data["modi"][0] = [
                         {
                        	 "name" : "Amit Nadugouda",
                        	 "pic" : "../images_MV/P2.jpg",
                        	 "comment" : "tons of love from karnataka",
                        	 "like" : "1"
                         },
                         {
                        	 "name" : "Bikram Singha",
                        	 "pic" : "../images_MV/P1.jpg",
                        	 "comment" : "That will be a proud moment when Modiji will take oath as PM of free & progressive & ever growing India...Jai Hind",
                        	 "like" : "1"
                         },
                         {
                        	 "name" : "JK Patel",
                        	 "pic" : "../images_MV/P4.jpg",
                        	 "comment" : "Modi is great",
                        	 "like" : "1"
                         },
                         {
                        	 "name" : "python animalia",
                        	 "pic" : "../images_MV/P3.jpg",
                        	 "comment" : "Bad",
                        	 "like" : "0"
                         },
                         {
                        	 "name" : "KS KARTHIK",
                        	 "pic" : "../images_MV/P5.jpg",
                        	 "comment" : "Well Done Modi JI . keep it up",
                        	 "like" : "1"
                         }, ];
video_data["modi"][1] = [ 	
                         {
                        	 "name" : "Bikram Singha",
                        	 "pic" : "../images_MV/P1.jpg",
                        	 "comment" : "That will be a proud moment when Modiji will take oath as PM of free & progressive & ever growing India...Jai Hind",
                        	 "like" : "1"
                         },
                         {
                        	 "name" : "JK Patel",
                        	 "pic" : "../images_MV/P4.jpg",
                        	 "comment" : "Modi is great",
                        	 "like" : "1"
                         },
                         {
                        	 "name" : "python animalia",
                        	 "pic" : "../images_MV/P3.jpg",
                        	 "comment" : "Bad",
                        	 "like" : "0"
                         },
                         {
                        	 "name" : "KS KARTHIK",
                        	 "pic" : "../images_MV/P5.jpg",
                        	 "comment" : "Well Done Modi JI . keep it up",
                        	 "like" : "1"
                         } ];
video_data["modi"][2] = [ 	{
	"name" : "Amit Nadugouda",
	"pic" : "../images_MV/P2.jpg",
	"comment" : "tons of love from karnataka",
	"like" : "1"
},
{
	"name" : "Bikram Singha",
	"pic" : "../images_MV/P1.jpg",
	"comment" : "That will be a proud moment when Modiji will take oath as PM of free & progressive & ever growing India...Jai Hind",
	"like" : "1"
},
{
	"name" : "JK Patel",
	"pic" : "../images_MV/P4.jpg",
	"comment" : "Modi is great",
	"like" : "1"
},
{
	"name" : "KS KARTHIK",
	"pic" : "../images_MV/P5.jpg",
	"comment" : "Well Done Modi JI . keep it up",
	"like" : "1"
} ];
video_data["kejri"][0] = [
                          {
                        	  "name" : "Bikram Singha",
                        	  "pic" : "../images_MV/P1.jpg",
                        	  "comment" : "kejri0",
                        	  "like" : "1"
                          },
                          {
                        	  "name" : "Amit Nadugouda",
                        	  "pic" : "../images_MV/P2.jpg",
                        	  "comment" : "kejri0",
                        	  "like" : "1"
                          },

                          {
                        	  "name" : "JK Patel",
                        	  "pic" : "../images_MV/P4.jpg",
                        	  "comment" : "kejri0",
                        	  "like" : "1"
                          },
                          {
                        	  "name" : "python animalia",
                        	  "pic" : "../images_MV/P3.jpg",
                        	  "comment" : "kejri0",
                        	  "like" : "0"
                          },
                          {
                        	  "name" : "KS KARTHIK",
                        	  "pic" : "../images_MV/P5.jpg",
                        	  "comment" : "kejri0",
                        	  "like" : "1"
                          }, ];
video_data["kejri"][1] = [ 	
                          {
                        	  "name" : "Bikram Singha",
                        	  "pic" : "../images_MV/P1.jpg",
                        	  "comment" : "kejri1",
                        	  "like" : "1"
                          },
                          {
                        	  "name" : "JK Patel",
                        	  "pic" : "../images_MV/P4.jpg",
                        	  "comment" : "kejri1",
                        	  "like" : "1"
                          } ];
video_data["kejri"][2] = [ 	{
	"name" : "Amit Nadugouda",
	"pic" : "../images_MV/P2.jpg",
	"comment" : "Kejri2",
	"like" : "1"
},
{
	"name" : "Bikram Singha",
	"pic" : "../images_MV/P1.jpg",
	"comment" : "Kejri2",
	"like" : "1"
} ];

video_data["rahul"][0] = [
                          {
                        	  "name" : "JK Patel",
                        	  "pic" : "../images_MV/P4.jpg",
                        	  "comment" : "Rahul0",
                        	  "like" : "1"
                          },
                          {
                        	  "name" : "Amit Nadugouda",
                        	  "pic" : "../images_MV/P2.jpg",
                        	  "comment" : "Rahul0",
                        	  "like" : "1"
                          }];
video_data["rahul"][1] = [ 	
                          {
                        	  "name" : "Bikram Singha",
                        	  "pic" : "../images_MV/P1.jpg",
                        	  "comment" : "Rahul1",
                        	  "like" : "1"
                          },
                          {
                        	  "name" : "JK Patel",
                        	  "pic" : "../images_MV/P4.jpg",
                        	  "comment" : "Rahul1",
                        	  "like" : "1"
                          },
                          {
                        	  "name" : "python animalia",
                        	  "pic" : "../images_MV/P3.jpg",
                        	  "comment" : "Rahul1",
                        	  "like" : "0"
                          },
                          {
                        	  "name" : "KS KARTHIK",
                        	  "pic" : "../images_MV/P5.jpg",
                        	  "comment" : "Rahul1",
                        	  "like" : "1"
                          } ];
video_data["rahul"][2] = [ 	{
	"name" : "Amit Nadugouda",
	"pic" : "../images_MV/P2.jpg",
	"comment" : "Rahul2",
	"like" : "1"
},
{
	"name" : "Bikram Singha",
	"pic" : "../images_MV/P1.jpg",
	"comment" : "Rahul2",
	"like" : "1"
} ];

var celebrity_data = [ {} ];

celebrity_data["modi"] = [
                          {
                        	  "name" : "Salman Khan",
                        	  "pic" : "../images_MV/salman.jpg",
                        	  "follow" : "0",
                        	  "info" : "Famous Bollywood Actor.<br> RockStar of Bollywood",
                        	  "likes" : "10M"
                          },
                          {
                        	  "name" : "RajiniKanth",
                        	  "pic" : "../images_MV/rajini.jpg",
                        	  "follow" : "0",
                        	  "info" : "Famous kollywood Actor.<br> SuperStar of Tamil Cinema. <br>One among in Top 25 of Best Indian Award",
                        	  "likes" : "30M"
                          },
                          {
                        	  "name" : "Sachin",
                        	  "pic" : "../images_MV/sachin.jpg",
                        	  "follow" : "0",
                        	  "info" : "Famous Ex-Indian Team cricket Player. <br>One among in Top 3 of Best Indian Award",
                        	  "likes" : "35M"
                          },
                          {
                        	  "name" : "BaBa RamDev",
                        	  "pic" : "../images_MV/ramdev.jpg",
                        	  "follow" : "0",
                        	  "info" : "Indian Cricket Team captain. <br> Greatest captain of all time",
                        	  "likes" : "10M"
                          },
                          {
                        	  "name" : "Amitabh",
                        	  "pic" : "../images_MV/amitab.jpg",
                        	  "follow" : "0",
                        	  "info" : "Famous Bollywood Actor.<br> Dignity of Bollywood",
                        	  "likes" : "30M"
                          } ];
celebrity_data["rahul"] = [ {
	"name" : "Dhoni",
	"pic" : "../images_MV/dhoni.jpg",
	"follow" : "0",
	"info" : "",
	"likes" : "10M"
}, {
	"name" : "Amitabh",
	"pic" : "../images_MV/amitab.jpg",
	"follow" : "0",
	"info" : "",
	"likes" : "30M"
}, {
	"name" : "Sachin",
	"pic" : "../images_MV/sachin.jpg",
	"follow" : "0",
	"info" : "",
	"likes" : "35M"
} ];
celebrity_data["kejri"] = [ {
	"name" : "Amitabh",
	"pic" : "../images_MV/amitab.jpg",
	"follow" : "0",
	"info" : "",
	"likes" : "10M"
}, {
	"name" : "RajiniKanth",
	"pic" : "../images_MV/rajini.jpg",
	"follow" : "0",
	"info" : "",
	"likes" : "30M"
}, {
	"name" : "Sachin",
	"pic" : "../images_MV/sachin.jpg",
	"follow" : "0",
	"info" : "",
	"likes" : "35M"
} ];