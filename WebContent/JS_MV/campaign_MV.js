$(document)
.ready(
		function() {


			var interval;
			var ga;
			add_gauge(values["modi"][0]);
			$("#poli_modi")
			.css(
					{
						"background" : " #5ACB5A"
					});
			comments_gauge("modi");
/*
			
			function amazing_video(id){
				var html = "";
				html += "<div id='amazingslider-" + id + "' style='display:block;position:relative;margin:16px auto 6px;'>"
				html +=  "<ul class='amazingslider-slides' style='display:none;'>"
					
				for(var i = 0; i < amazing_vid[id].length  ; i++){
					//alert(amazing_vid[id][i]["v_id"]);
					
					html +=	"<li><img src='" + amazing_vid[id][i]["img_url"] + "' alt='" +  amazing_vid[id][i]["alt_info"] + "' />"
					html +=	"<video preload='none' src='" + amazing_vid[id][i]["v_url"] + "' ></video>"
					html +=	"</li>"
						
				}
				html += "</ul>"
				html +=		"<ul class='amazingslider-thumbnails' style='display:none;'>"
					for(var i = 0; i < amazing_vid[id].length; i++){
						html += "<li><img src='" +  amazing_vid[id][i]["thumbnail_url"] + "' /></li>"
					}
						
					
					html += "</ul>"	

					html += "</div>"
						
				$("#amazing_video").html(html);
			}

*/			function add_gauge(val){
				var value = val;
				var html = "";
				ga = new JustGage({
					id: "gauge1", 
					value: value, 
					min: 0,
					max: 100,
					title: "VOTE",/*
					startAnimationTime: 1100,
					startAnimationType: ">",
					refreshAnimationTime: 1000,*/
					refreshAnimationType: "bounce" ,
					levelColors: [		   	           
					              "#FF4500",
					              "#FFA500",
					              "#7CFC00"
					              ]       
				});
				//	alert(valu["modi"][0]["like"]);
				html += "<div class='like_video'>" +
				"<img title = 'I like this' class='l_img' src='../images_MV/like.jpg'><img title = 'Dislike' class='d_img' src='../images_MV/dislike.jpg'>" 
				html += "<div class='dl_info'>"


					html += "<div class = 'like_info'>" + valu["modi"][0]["like"] + "</div><div class = 'dlike_info'>" + valu["modi"][0]["dislike"] + "</div>"

					html += "</div>"
						html += "</div>"
							$("#gauge1").append(html);
				$(".l_img").click(function(event){
					value = value + 1;
					if(value <= 100){
						ga.refresh(value);
					}

				});
				$(".d_img").click(function(event){
					value = value - 1;
					if(value > 0){
						ga.refresh(value);
					}

				});
			}
			affinity("modi");
			function top_tweet(name){
				var html = '';
				html += "<div id = 't_container'>"
					html += "<div id='tweet_header'>Top Tweets</div>"
						html += "<div id='t_comments_cont'>" 
							for (var i = 0 ; i < tweet_data[name].length ; i++){


								html += "<div class = 't_comments_prof'>"
									html += "<div class = 't_date'>" + tweet_data[name][i]["date"]
								html += "</div>"
									html += "<div class = 't_tweet'>" + tweet_data[name][i]["tweet"]
								html += "</div>"
									html += "</div>"

							}
				html += "</div>"

					$("#t_whole1").html(html);
			}
			function affinity(name) {
				var html = "";
				for ( var i = 0; i < celebrity_data[name].length; i++) {
					//	alert(celebrity_data[name][i]["name"]);
					html += "<div id = 'container_" + celebrity_data[name][i]["name"] + "' class= 'celebrity_col'>"

					if ((i + 1) % 2 != 0) {
						html += "<div id = 'details_" + celebrity_data[name][i]["name"] + "' class='celebrity_details'>"
						html += "<div class = 'celebrity_name'><div class='text_wrap'>"
							+ celebrity_data[name][i]["name"]
						+ "</div></div>"
						html += "<div class = 'celebrity_likes'>"
							+ celebrity_data[name][i]["likes"]
						+ "-Likes</div>"
						html += "</div>"
							if (celebrity_data[name][i]["follow"] == "0") {
								html += "<div style ='border: 1px solid' id = 'dfollow_" + celebrity_data[name][i]["name"] + ".' class = 'celebrity_follow'><div class='text_wrap_l' id = 'follow_" + celebrity_data[name][i]["name"] + "'>Follow</div></div>"
							} else {
								html += "<div id = 'dfollow_" + celebrity_data[name][i]["name"] + ".' class = 'celebrity_unfollow'><div class='text_wrap_l_un' id = 'follow_" + celebrity_data[name][i]["name"] + "'>UnFollow</div></div>"
							}

						html += "<div class = 'celebrity_outer_img'>"
							html += "<img id = 'image_" + celebrity_data[name][i]["name"] + "' class='celebrity_img' src = '" + celebrity_data[name][i]["pic"] + "'>"
							html += "</div>"
					} else {
						html += "<div class='celebrity_details_even'>"
							html += "<div class = 'celebrity_name_even'><div class='text_wrap'>"
								+ celebrity_data[name][i]["name"]
						+ "</div></div>"
						html += "<div class = 'celebrity_likes_even'>"
							+ celebrity_data[name][i]["likes"]
						+ "-Likes</div>"
						html += "</div>"
							if (celebrity_data[name][i]["follow"] == "0") {
								html += "<div id = 'dfollow-" + celebrity_data[name][i]["name"] + ".' class = 'celebrity_follow_even'><div class='text_wrap_l' id = 'follow_" + celebrity_data[name][i]["name"] + "' >Follow</div></div>"
							} else {
								html += "<div id = 'dfollow-" + celebrity_data[name][i]["name"] + ".' class = 'celebrity_unfollow_even'><div class='text_wrap_l_un' id = 'follow_" + celebrity_data[name][i]["name"] + "' >UnFollow</div></div>"
							}

						html += "<div class = 'celebrity_outer_img_even' >"
							html += "<img id = 'image_" + celebrity_data[name][i]["name"] + "' class='celebrity_img_even' src = '" + celebrity_data[name][i]["pic"] + "'>"
							html += "</div>"
					}

					html += "</div>"

				}
				$("#celebrity_container").html(html);

				var new_id;
				$('.text_wrap_l')
				.click(
						function(event) {

							var id = event.target.id;
							var id_new = id.substring(7,
									id.length);

							for ( var j = 0; j < celebrity_data[name].length; j++) {
								if (celebrity_data[name][j]["name"] == id_new) {
									if (celebrity_data[name][j]["follow"] == "0") {
										celebrity_data[name][j]["follow"] = "1";
										$(this)
										.css(
												{
													"background" : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, #f85032),color-stop(50%, #f16f5c), color-stop(71%, #f6290c),color-stop(71%, #f02f17), color-stop(100%, #e73827))"
												});
										$(this).html(
										"UnFollow");

										top_tweet(id_new);

										if($("#t_whole").show()){
											$("#t_whole").hide();	
										}
										if($("#t_whole1").hide()){
											$("#t_whole1").show();	
										}
										$("#tweet_header").html(
												"Top Tweets - "
												+ id_new);

									} else {
										celebrity_data[name][j]["follow"] = "0";

										$(this)
										.css(
												{
													"background" : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, #8fc400),color-stop(100%, #8fc400))"
												});
										$(this).html(
										"Follow");
										if($("#t_whole").hide()){
											$("#t_whole").show();	
										}
										$("#t_whole1").html("");

									}

								}
							}

						});

				$('.text_wrap_l_un')
				.click(
						function(event) {

							var id = event.target.id;
							var id_new = id.substring(7,
									id.length);

							for ( var j = 0; j < celebrity_data[name].length; j++) {
								if (celebrity_data[name][j]["name"] == id_new) {
									if (celebrity_data[name][j]["follow"] == "1") {
										celebrity_data[name][j]["follow"] = "0";

										$(this)
										.css(
												{
													"background" : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, #8fc400),color-stop(100%, #8fc400))"
												});
										$(this).html(
										"Follow");
										if($("#t_whole").hide()){
											$("#t_whole").show();	
										}
										$("#t_whole1").html("");

									} else {
										$(this)
										.css(
												{
													"background" : "-webkit-gradient(linear, left top, left bottom, color-stop(0%, #f85032),color-stop(50%, #f16f5c), color-stop(71%, #f6290c),color-stop(71%, #f02f17), color-stop(100%, #e73827))"
												});
										$(this).html(
										"UnFollow");
										top_tweet(id_new
										);
										if($("#t_whole").show()){
											$("#t_whole").hide();	
										}
										if($("#t_whole1").hide()){
											$("#t_whole1").show();	
										}
										$("#tweet_header").html(
												"Top Tweets - "
												+ id_new);
									}

								}
							}

						});

				$('.celebrity_outer_img ')
				.click(
						function(event) {
							var id = event.target.id;
							var id_new = id.substring(6,
									id.length);
							top_tweet(id_new);
							if($("#t_whole1").hide()){
								$("#t_whole1").show();	
							}
							$("#t_whole").hide();


							$("#tweet_header").html(
									"Top Tweets - "
									+ id_new);
							//alert(id_new);

						});

				$('.celebrity_outer_img_even ')
				.click(
						function(event) {
							var id = event.target.id;
							var id_new = id.substring(6,
									id.length);
							top_tweet(id_new);

							if($("#t_whole1").hide()){
								$("#t_whole1").show();	
							}
							$("#t_whole").hide();
							$("#tweet_header").html(
									"Top Tweets - "
									+ id_new);
							//alert(id_new);

						});

				$('.celebrity_outer_img ')
				.hover(
						function(event) {
							var id = event.target.id;
							var id_new = id.substring(6,
									id.length);
							for ( var j = 0; j < celebrity_data[name].length; j++) {
								if (celebrity_data[name][j]["name"] == id_new) {
									$("#info")
									.html(
											celebrity_data[name][j]["info"]);
								}
							}
							//tooltip.pop(this, '#info', {position:2, offsetY:-10, effect:'slide'})
							$(this)
							.css(
									{
										"border-color" : "#9ecaed",
										"box-shadow" : "0 0 8px #00BFFF"
									});
							//celebrity_data[name][]
							//

						},
						function(event) {
							$(this).stop(true, true);
							$(this)
							.css(
									{
										"border" : "1px solid #ccc",
										"box-shadow" : "0 0 0px #fff"
									});
						});
				$('.celebrity_outer_img_even ')
				.hover(
						function(event) {
							var id = event.target.id;
							var id_new = id.substring(6,
									id.length);
							for ( var j = 0; j < celebrity_data[name].length; j++) {
								if (celebrity_data[name][j]["name"] == id_new) {
									$("#info")
									.html(
											celebrity_data[name][j]["info"]);
								}
							}
							//tooltip.pop(this, '#info', {position:2, offsetY:-10, smartPosition: true, effect:'slide'})
							$(this)
							.css(
									{
										"border-color" : "#9ecaed",
										"box-shadow" : "0 0 8px #00BFFF"
									});

						},
						function(event) {
							$(this).stop(true, true);
							$(this)
							.css(
									{
										"border" : "1px solid #ccc",
										"box-shadow" : "0 0 0px #fff"
									});
						});

				$('.celebrity_follow').mouseover(function(event) {
					$(this).css({
						"cursor" : "pointer"
					});
				});
				$('.celebrity_follow_even').mouseover(
						function(event) {
							$(this).css({
								"cursor" : "pointer"
							});
						});

				$('.celebrity_unfollow').mouseover(function(event) {
					$(this).css({
						"cursor" : "pointer"
					});
				});
				$('.celebrity_unfollow_even').mouseover(
						function(event) {
							$(this).css({
								"cursor" : "pointer"
							});
						});

			}

			function top_comments(name, video_name) {
				var html = "";
				for ( var i = 0; i < video_data[name][video_name].length; i++) {

					html += "<div id = 'cont_" + video_data[name][video_name][i]["name"] + "' class = 'comments_prof'>"
					html += "<div id = 'prof_" + video_data[name][video_name][i]["name"] + "' class = 'prof_pic' >"
					html += "<img class = 'prof_img' id = 'P_" + video_data[name][video_name][i]["name"] + "' src = '" + video_data[name][video_name][i]["pic"] + "'>"
					html += "</div>"
						html += "<div id = 'name_" + video_data[name][video_name][i]["name"] + "' class = 'name_prof'>"
						+ video_data[name][video_name][i]["name"]
					+ " "

					html += "</div>"

						html += "<div id = 'like_" + video_data[name][video_name][i]["name"] + "' class = 'comment_like'>"
						if (video_data[name][video_name][i]["like"] == "1") {
							html += "<img id = 'limg_" + video_data[name][video_name][i]["name"] + "' src = '../images_MV/like.jpg' class = 'limg'>"
						} else {
							html += "<img id = 'dlimg_" + video_data[name][video_name][i]["name"] + "' src = '../images_MV/dislike.jpg' class = 'dlimg'>"
						}
					html += "</div>"
						html += "<div id = 'comment_" + video_data[name][video_name][i]["name"] + "' class = 'comment_prof' >"
						+ video_data[name][video_name][i]["comment"]
					+ " "
					html += "</div>"
						html += "</div>"
				}
				$("#v_comments_cont").html(html);

			}

			function comments_gauge(name){

				var i = 1;
				interval = setInterval(function(){
					if( i <= 2){
						top_comments(name, i);
						ga.refresh(values[name][i]);
						var new_html = "";

						new_html += "<div class = 'like_info'>" + valu[name][i]["like"] + "</div><div class = 'dlike_info'>" + valu[name][i]["dislike"] + "</div>"
						$(".dl_info").html(new_html);
						i++;
					}
					else {
						i = 0;
					}
				},3300);
			}


			top_comments("modi", 0);

			var add_con = "<img class='h_img' src='../images_MV/modi.jpg'><div class ='h_name'>Narendera Modi</div><img class= 'hl_img' src = '../images_MV/BJP.jpg'>";
			$("#t_header").append(add_con);

			function tag_cloud(canvas_id, container_id) {

				if (!$(canvas_id).tagcanvas({
					minBrightness : 0.5,
					wheelZoom : false,
					reverse : true,
					shuffleTags : true,

					stretchX : 2,
					shape : "sphere",
					fadeIn : 800,
					outlineThickness : 1,
					maxSpeed : 0.02,
					depth : 0.45,
					outlineMethod : 'colour',
					outlineColour : '#6A5ACD',
					textFont : 'Niconne, sans-serif',
					textColour : null,
					weight : true,
					textHeight : 10,
					weightMode : "both",
					weightSize : 1.3,
					weightGradient : {
						"0" : '#f00',
						"0.33" : '#8B008B',
						"0.66" : '#0f0',
						"1" : '#FF4500'
					}
				})) {

					$(container_id).hide();
				}

			}

			tag_cloud("#myCanvas_modi", "#t_whole");

			$(".poli")
			.hover(
					function(event) {
						$(this).animate({
							height : '31%'
						});
						$(this)
						.css(
								{
									"-webkit-box-shadow" : " 0px 0px 12px rgba(0, 0, 0, 0.5)"
								});

					},
					function() {
						$(this).stop(true, true);
						$(this).animate({
							height : '29.5%'
						});
						$(this)
						.css(
								{
									"-webkit-box-shadow" : " 0px 0px 0px rgba(0, 0, 0, 0)"
								});

					});
			$(".poli, .prof, .name")
			.click(
					function(event) {
						var pol = event.target.id;


						if (pol == "modi_img"
							|| pol === "poli_modi"
								|| pol == "details_modi"
									|| pol == "poli_bjp") {
							if ($("#myCanvas_modi").hide()) {
								$("#myCanvas_modi").show();
								$("#myCanvas_rahul").hide();
								$("#myCanvas_kejri").hide();
							}
							$(this)
							.css(
									{
										"background" : " #5ACB5A"
									});
							$("#poli_rahul")
							.css(
									{
										"background" : " -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffb76b),color-stop(50%, #ffa73d), color-stop(74%, #ff7c00),color-stop(100%, #ff7f04))"
									});
							$("#poli_kejri")
							.css(
									{
										"background" : " -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffb76b),color-stop(50%, #ffa73d), color-stop(74%, #ff7c00),color-stop(100%, #ff7f04))"
									});
							if (!$("#t_header")
									.is(':empty')) {
								$("#t_header").empty();
								var add_con = "<img class='h_img' src='../images_MV/modi.jpg'><div class ='h_name'>Narendera Modi</div><img class= 'hl_img' src = '../images_MV/BJP.jpg'>";
								$("#t_header").append(
										add_con);
							}

							if($("#t_whole1").show()){
								$("#t_whole1").hide();	
							}
							if($("#t_whole").hide()){
								$("#t_whole").show();	
							}
							tag_cloud("#myCanvas_modi",
							"#t_whole");
							affinity("modi");

							top_comments("modi", 0);

							clearInterval(interval);
							ga.refresh(values["modi"][0]);
							var new_html = "";

							new_html += "<div class = 'like_info'>" + valu["modi"][0]["like"] + "</div><div class = 'dlike_info'>" + valu["modi"][0]["dislike"] + "</div>"
							$(".dl_info").html(new_html);
							//ga.refresh(values["modi"][0]);
							comments_gauge("modi");


						} else if (pol == "kejri_img"
							|| pol === "poli_kejri"
								|| pol == "details_kejri"
									|| pol == "poli_aap") {
							if ($("#myCanvas_kejri").hide()) {
								$("#myCanvas_kejri").show();
								$("#myCanvas_rahul").hide();
								$("#myCanvas_modi").hide();
							}


							$(this)
							.css(
									{
										"background" : " #5ACB5A"
									});
							$("#poli_rahul")
							.css(
									{
										"background" : " -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffb76b),color-stop(50%, #ffa73d), color-stop(74%, #ff7c00),color-stop(100%, #ff7f04))"
									});
							$("#poli_modi")
							.css(
									{
										"background" : " -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffb76b),color-stop(50%, #ffa73d), color-stop(74%, #ff7c00),color-stop(100%, #ff7f04))"
									});


							top_comments("kejri", 0);
							clearInterval(interval);
							var new_html = "";

							new_html += "<div class = 'like_info'>" + valu["kejri"][0]["like"] + "</div><div class = 'dlike_info'>" + valu["kejri"][0]["dislike"] + "</div>"
							$(".dl_info").html(new_html);
							ga.refresh(values["kejri"][0]);
							comments_gauge("kejri");
							if($("#t_whole1").show()){
								$("#t_whole1").hide();	
							}
							tag_cloud("#myCanvas_kejri",
							"#t_whole");
							if($("#t_whole").hide()){
								$("#t_whole").show();	
							}
							if (!$("#t_header")
									.is(':empty')) {
								$("#t_header").empty();
								var add_con = "<img class='h_img' src='../images_MV/kejri.jpg'><div class ='h_name'>Aravind Kejriwal</div><img class= 'hl_img' src = '../images_MV/AAP.jpg'>";
								$("#t_header").append(
										add_con);
							}
							affinity("kejri");

						} else if (pol == "rahul_img"
							|| pol === "poli_rahul"
								|| pol == "details_rahul"
									|| pol == "poli_inc"){

							if ($("#myCanvas_rahul").hide()) {
								$("#myCanvas_rahul").show();
								$("#myCanvas_modi").hide();
								$("#myCanvas_kejri").hide();
							}

							$(this)
							.css(
									{
										"background" : " #5ACB5A"
									});
							$("#poli_modi")
							.css(
									{
										"background" : " -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffb76b),color-stop(50%, #ffa73d), color-stop(74%, #ff7c00),color-stop(100%, #ff7f04))"
									});
							$("#poli_kejri")
							.css(
									{
										"background" : " -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffb76b),color-stop(50%, #ffa73d), color-stop(74%, #ff7c00),color-stop(100%, #ff7f04))"
									});

							if (!$("#t_header")
									.is(':empty')) {
								$("#t_header").empty();
								var add_con = "<img class='h_img' src='../images_MV/rahul.jpg'><div class ='h_name'>Rahul Gandhi</div><img class= 'hl_img' src = '../images_MV/INC.jpg'>";
								$("#t_header").append(
										add_con);
							} else {
								var add_con = "<div id ='h_name'>Rahul Gandhi</div>"
									$("#t_header").append(
											add_con);
							}
							if($("#t_whole1").show()){
								$("#t_whole1").hide();	
							}


							tag_cloud("#myCanvas_rahul",
							"#t_whole");
							if($("#t_whole").hide()){
								$("#t_whole").show();	
							}
							affinity("rahul");
							top_comments("rahul", 0);
							clearInterval(interval);
							ga.refresh(values["rahul"][0]);
							var new_html = "";

							new_html += "<div class = 'like_info'>" + valu["rahul"][0]["like"] + "</div><div class = 'dlike_info'>" + valu["rahul"][0]["dislike"] + "</div>"
							$(".dl_info").html(new_html);
							comments_gauge("rahul");
						}
						else{
							alert("Sorry");
						}

					});



		});