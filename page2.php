<!DOCTYPE html>
<html>
<head>
	<title>Lab3</title>
	<meta charset="UTF-8">
	<link rel="stylesheet" type="text/css" href="style2.css">

</head>
<body class="stack-column">
	<header>
		<h1 class="header padding editable" id="block_x">Header</h1>
		<nav class="nav stack-row x-header editable" id = "x-header">
			<h3><a href="Lab3.html">Go to page 1</a></h5>
		</nav>
	</header>
	<main class="stack-row">
		<div class="stack-column stretch">
			<div class="stack-row">
				<aside class="side padding left block_2 editable" id="block_2">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</aside>
				<article class="padding article editable" id = "article">
					<hr>
					<div class="padding l5 div_l5">
						<ul class="nav_ul nav_tabs">

					<?php

					$filename = "file1.txt";
					$handle = fopen($filename, "r");

					$buf = fread($handle, 65536);
					$arr = explode(";", $buf);
					for ($i = 0; $i < count($arr) - 1; $i++) {
						echo("<li class=\"nav-item\">");
							echo("<a class\"nav-link\">");
								echo($arr[$i]);
							echo("</a>");
						echo("</li>");
					}

					fclose($handle);
					?>
						</ul>
					</div>


					<hr>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

					<img src="cat.jpg" class="img">
				</article>
			</div>
			<aside class="padding bot align-left editable" id="block_5">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</aside>
		</div>
		<aside class="side padding left editable" id="block_4">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</aside>
	</main>
	<footer>
		<h1 class="header padding editable" id="block_y">©2021 Олексій Тимошенко ІТ-01</h1>
		<p class="padding y-header editable" id ="y-header">Lorem ipsum dolor sit amet.</p>
	</footer>
</body>
<script src = "script3.js">
</script>
</html>