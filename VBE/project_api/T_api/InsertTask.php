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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);
    
    mysqli_begin_transaction($connection);

    $Nt = mysqli_real_escape_string($connection, $data['Nt']);
    $State = mysqli_real_escape_string($connection, $data['State']);
    $Desc = mysqli_real_escape_string($connection, $data['Desc']);
    $Deadline = mysqli_real_escape_string($connection, $data['Deadline']);
    $URL = mysqli_real_escape_string($connection, $data['URL']);
    $query = "INSERT INTO task (Nt, `State`, `Desc`, Deadline, `URL`) VALUES ('$Nt', '$State', '$Desc', '$Deadline', '$URL')";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        mysqli_rollback($connection);
        die("Error inserting task data: " . mysqli_error($connection));
    }

    $idTask = mysqli_insert_id($connection);

    $idProject = mysqli_real_escape_string($connection, $data['idProject']);
    $query = "INSERT INTO taskop (idp, idt) VALUES ('$idProject', '$idTask')";
    $result = mysqli_query($connection, $query);

    if (!$result) {
        mysqli_rollback($connection);
        die("Error inserting taskop data: " . mysqli_error($connection));
    }

    mysqli_commit($connection);

    echo json_encode(array('message' => 'Task added successfully.'));
}

?>