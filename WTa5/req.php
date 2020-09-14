<?php
header("Content-Type: application/json; charset=UTF-8");
require 'index.php';
require 'connection.php';
$req=$_GET['req'] ?? null;
$db=new database();
$seller= new seller($db->connect());

switch($req)
{
    case 'insert':
        $obj=$_GET['obj'];
        $temp=json_decode($obj);
        echo $seller->insertdata($temp);
        break;

    case 'display':
        echo $seller->display_data();
        break;

    default:
        echo json_encode(["In-valid request"]);
        break;
}

?>