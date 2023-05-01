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

    $idTask = mysqli_real_escape_string($connection, $_GET['idTask']);

    $data = json_decode(file_get_contents('php://input'), true);

    $Nt = mysqli_real_escape_string($connection, $data['Nt']);
    $State = mysqli_real_escape_string($connection, $data['State']);
    $Desc = mysqli_real_escape_string($connection, $data['Desc']);
    $Deadline = mysqli_real_escape_string($connection, $data['Deadline']);
    $URL = mysqli_real_escape_string($connection, $data['URL']);
    $query = "UPDATE task SET Nt='$Nt', `State`='$State', `Desc`='$Desc', Deadline='$Deadline', `URL`='$URL' WHERE idTask=$idTask";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        die("Error updating data: " . mysqli_error($connection));
    }

    echo json_encode(array('message' => 'Data updated successfully.'));
}

?>