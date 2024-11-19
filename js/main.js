<script>
				myDate = new Date();
				myDay = myDate.getDay();
				switch(myDay){
					Case 0:
						today = "Sunday";
					break;
					Case 1:
						today = "Monday";
					Case 2:
						today = "Tuesday";
					break;
					Case 3:
						today = "Wednesday";
					Case 4:
						today = "Thursday";
					Case 5:
						today = "Friday";
					Case 6:
						today = "Saturday";

					default:
						today = "Something went wrong";
				}
</script>