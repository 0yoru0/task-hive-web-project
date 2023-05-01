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
    // Get project ID from request parameters
    $id = $_GET['id'];

    // Delete tasks related to the project
    $query = "DELETE task FROM task INNER JOIN taskop ON task.idTask = taskop.idt WHERE taskop.idp = $id";
    $result = mysqli_query($connection, $query);

    // Check for errors
    if (!$result) {
        die("Error deleting data: " . mysqli_error($connection));
    }

    // Delete project
    $query = "DELETE FROM Project WHERE idProject = $id";
    $result = mysqli_query($connection, $query);

    // Check for errors
    if (!$result) {
        die("Error deleting data: " . mysqli_error($connection));
    }

    // Return success message
    echo json_encode(array('message' => 'Data deleted successfully.'));
}

?>