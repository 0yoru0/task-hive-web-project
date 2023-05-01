<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "mydb2";

$connection = mysqli_connect($host, $user, $password, $database);

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $projectId = mysqli_real_escape_string($connection, $_GET['idProject']);

    $query = "SELECT * FROM task
              JOIN taskop ON task.idTask = taskop.idt
              WHERE taskop.idp = $projectId";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        die("Error retrieving data: " . mysqli_error($connection));
    }

    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    echo json_encode($data);
}

?>