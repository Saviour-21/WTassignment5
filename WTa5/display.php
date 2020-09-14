<?php
include "../Crud/index.php";
include "../Crud/connection.php";

use Crud\data\Database;
use Crud\data\Student;
error_reporting(0);
header('Content-type: application/json');

$db = new Database();
$student = new Student($db->connect());

$stmt = $student->getRecords();

if ($stmt->rowCount() > 0) {
    $student_arr = array(
        "records" => array()
    );

    while($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
        $student_arr['records'][] = $row;
    }

    echo json_encode($student_arr);
}
?>