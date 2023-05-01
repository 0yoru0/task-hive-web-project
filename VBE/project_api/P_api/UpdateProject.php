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

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {

    $data = json_decode(file_get_contents('php://input'), true);

    $id = mysqli_real_escape_string($connection, $_GET['id']);

    $Np = mysqli_real_escape_string($connection, $data['Np']);
    $desc = mysqli_real_escape_string($connection, $data['desc']);
    $type = mysqli_real_escape_string($connection, $data['type']);
    $query = "UPDATE Project SET Np='$Np', `desc`='$desc', `type`='$type' WHERE idProject='$id'";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        die("Error modifying data: " . mysqli_error($connection));
    }

    echo json_encode(array('message' => 'Data modified successfully.'));
}

?>