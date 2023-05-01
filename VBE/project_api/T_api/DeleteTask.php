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
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    $idTask = $_GET['idTask'];

    $query = "DELETE FROM task WHERE idTask = '$idTask'";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        die("Error deleting data: " . mysqli_error($connection));
    }

    echo json_encode(array('message' => 'Task deleted successfully.'));
}
?>