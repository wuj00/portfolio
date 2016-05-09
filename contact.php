
<!DOCTYPE html>
<html>

<head>

		<title>Jennifer Wu | Contact</title>

        <!-- Meta Zone -->
		<meta charset="utf-8">
		<meta name="description" content="Jennifer Wu, my humble abode." />
		<meta name="keywords" content="Jennifer, my humble abode.">
		<meta name="author" content="Jennifer Wu">
		<meta name="publisher" content="Jennifer Wu">
		<meta name="geo.placename" content="T-town">
		<meta name="geo.region" content="Los Angeles">

		<!-- Viewport -->
		<meta name="viewport" content="initial-scale=1, user-scalable=no">
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="grey" />
		<meta name="apple-mobile-web-app-title" content="Jennifer Wu">

	<!-- Favicon -->
	<link rel="shortcut icon" type="image/png" href="img/favicon.png"/>

	<!-- CSS Stylesheets -->
	<link rel="stylesheet" href="css/style.css">

	<!-- Font -->
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,700,300' rel='stylesheet' type='text/css'>

	<!-- Javascript -->
	<script type="text/javascript" src="js/main.js"></script>

</head>
<body id="page">

	<header>
        <div id="wrap">
			<a href="index.html" title="Home"><p class="logo" style="font-family:Snowberry Destroyed; font-size:60px; color:black; margin-top:50px;">Jennifer Wu</p></a>
		    <nav id="nav">
		      <ul>
		        <li><a href="index.html" title="Home">Home</a></li>
		        <li><a href="webdev.html" title="WebDev">Web Development</a></li>
				<li><a href="gdesign.html" title="GDesign">Graphic Design</a></li>
				<li><a href="waternmelon.html" title="Gallery">&copy; Water&Melon</a></li>
		        <li><a class="selected" href="contact.html" title="Contact">Contact</a></li>
		      </ul>
		    </nav>
		</div>
	</header>

	<div class="hero-image-contact">
	</div>

	<div class="main-index">

			<?php
				$action=$_REQUEST['action'];
				if ($action=="")
				{
			?>

			<form  action="" method="POST" enctype="multipart/form-data">

			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus Nulla consequat massa quis enim.</p>

			<p>Lorem ipsum dolor sit amet <a href="tel:0629165924" title="Direct call">(0031)6-29165924</a> adipiscing elit. Aenean commodo ligula eget dolor. Aenean magnis dis parturient massa. Cum sociis natoque <a href="mailto:info@jordanmike.nl" title="Direct mail">info@jordanmike.nl</a> penatibus et magnis dis parturient montes, nascetur ridiculus mus Nulla consequat massa quis enim.</p>

			    <input type="hidden" name="action" value="submit">
			    <input name="name" type="text" value="" size="30" placeholder="First- and lastname"/><br>
			    <input name="email" type="text" value="" size="30" placeholder="E-mail"/><br>
			    <input name="phone" type="text" value="" size="30" placeholder="Phone"/><br>
			    <input name="subject" type="text" value="" size="30" placeholder="Subject"/><br>
			    <textarea name="message" rows="7" cols="30" placeholder="Message"></textarea><br>
			    <input type="submit" value="Send"/>
		    </form>

			<?php
				    }
				else
				    {
				    $name=$_REQUEST['name'];
				    $email=$_REQUEST['email'];
				    $phone=$_REQUEST['phone'];
				    $subject=$_REQUEST['subject'];
				    $message=$_REQUEST['message'];
				    if (($name=="")||($email=="")||($phone=="")||($message==""))
				        {
				        echo "<p>Lorem ipsum dolar</br>sit amet, consectetuer </p>";
				        }
				    else{
				        $from="From: $name<$email>\r\nReturn-path: $email";
				        $subject="$subject";
				        mail("info@jordanmike.nl", $subject,
				"$message

				From: 	$name

				Phonenumber: 	$phone

				E-mail:		$email", $from);
				        echo "<p>Lorem ipsum dolar</br>sit amet, consectetuer </p>";
				        }
				    }
			?>

		</div>
	</div>

	<footer>
        <p>&copy; 2016 Jennifer Wu
            <a href="https://www.linkedin.com/in/jennifer-wu-63695593" title="LinkedIn" target="_blank" style="border-bottom: 0px; margin-left:20px; margin-right:5px;"/><img class="social-media-icon" src="img/linkedin.png" alt="LinkedIn Icon"></a>
            <a href="https://www.github.com/wuj00" title="Github" target="_blank" style="border-bottom: 0px; margin-left:5px; margin-right:5px;"/><img class="social-media-icon" src="img/github.png" alt="Github Icon"></a>
            <a href="https://www.behance.net/wuj00" title="Behance" target="_blank" style="border-bottom: 0px; margin-left:5px; margin-right:5px;"/><img class="social-media-icon" src="img/behance.png" alt="Behance Icon"></a>
        </p>
	</footer>

</body>
</html>
