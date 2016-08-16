chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			function clean()
			  {
					var feed = $(".feed")[0];
					if (feed)
					{
						var activities = $(".activity");
						var elementsToRemove = [];
						for (i = 0; i < activities.length; i++)
						{
							if ((commute = activities[i].getElementsByClassName("workout-type")[0]) && commute.innerHTML == "Commute")
							{
								elementsToRemove.push(activities[i]);
								elementsToRemove.push(activities[i].nextElementSibling);
							}
						}
						for (i = 0; i < elementsToRemove.length; i++)
						{
							feed.removeChild(elementsToRemove[i]);
						}
						var timeHeaders = [].slice.call($(".time-header"));
						for (i = 0; i < timeHeaders.length; i++)
						{
							if (!timeHeaders[i].nextElementSibling || timeHeaders[i].nextElementSibling.className == "time-header")
							{
								feed.removeChild(timeHeaders[i]);
							}
						}
					}
			  }

			$(document).ready(function() {
				clean();
				$(".load-feed").change(clean);
			});
		}
	}, 10);
});
