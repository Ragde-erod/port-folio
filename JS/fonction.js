function showhide(buttonID)
{
	var viewer_array = document.getElementsByClassName('viewer');
		for (var i = 0; i < viewer_array.length; i++)
		{
			if (buttonID == "btn_home" )
			{
				viewer_array[i].style.display = "none";
			}
			if (buttonID == "Stage_button" )
			{
				if (viewer_array[i].id == "Stage"){
					viewer_array[i].style.display = "block";
				}
				else
				{
					viewer_array[i].style.display = "none";
				}
			}
		}
	
}