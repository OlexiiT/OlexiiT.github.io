<?php
$new_url = 'Lab3.html';
header('Location: '.$new_url);

$filename = 'file1.txt';

$name = $_REQUEST['name'];
$old_name = $_REQUEST['old_name'];
$new_name = $_REQUEST['new_name'];
$changing_form = $_REQUEST['changing_form'];
$creating_form = $_REQUEST['creating_form'];


if ($name != null) {
	if (find($filename, $name) == -1) {
		$handler = fopen($filename, 'a');
		fwrite($handler, $name.";");
		fclose($handler);
	}
}

if ($old_name != null && $new_name != null) {
	if (find($filename, $old_name) != -1) {
		$handler = fopen($filename, 'r');
		$buf = fread($handler, 65536); 		
		$arr = explode(";", $buf);						
		$index = find($filename, $old_name);			
		$arr[$index] = $new_name;						
		$str = implode(";", $arr);								
		fclose($handler);

		$handler = fopen($filename, "w");
		fwrite($handler, $str);
		fclose($handler);
	}
}


function find($filename, $name) {
	$handler = fopen($filename, 'r');
	$buf = fread($handler, 65536);
	/*echo("<p>");
	echo($buf);
	echo("</p>");*/
	$arr = explode(";", $buf);
	/*var_dump($arr);*/
	for ($i = 0; $i < count($arr); $i++) {
		if ($arr[$i] == $name) {
			return $i;
		}
	}
	return -1;
}

?>