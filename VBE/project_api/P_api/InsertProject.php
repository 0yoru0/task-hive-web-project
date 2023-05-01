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
    // Get data from request body
    $data = json_decode(file_get_contents('php://input'), true);
    // Insert data into database
    $Np = mysqli_real_escape_string($connection, $data['Np']);
    $desc = mysqli_real_escape_string($connection, $data['desc']);
    $type = mysqli_real_escape_string($connection, $data['type']);
    $query = "INSERT INTO Project (Np, `desc`, `type`) VALUES ('$Np', '$desc', '$type')";
    $result = mysqli_query($connection, $query);

    // Check for errors
    if (!$result) {
        die("Error inserting data: " . mysqli_error($connection));
    }

    // Return success message
    echo json_encode(array('message' => 'Data added successfully.'));
}

?>