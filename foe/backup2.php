<?php
$email = $_POST['email'];
$username = $_POST['u_name'];
$password = $_POST['pass'];
$conn = new mysqli('localhost', 'root', '', 'db2');
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert  into signup(email,username, pass) values(?,?,?)");
    $stmt->bind_param("sss",$email,$username, $password);
    $stmt->execute();
    echo '<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="login.css">
    </head>
    
    
    <body>
        <div id="navbar">
            <ul>
                <li><a href="login.html">Login</a></li>
    
                <li><a href="feedback.html">Contact Us</a></li>
    
                <li>
                    <div class="dropdown">
                        <button style="font-family: "Poppins", sans-serif; font-size: medium; padding-right: 0;"><a href="product1.html">Products</a></button>
                        <div class="dropdown-content">
                            <a href="headphones.html">Headphones</a>
                            <a href="earphones.html">Earphones</a>
                            <a href="speakers.html">Speakers</a>
                        </div>
                    </div>
                </li>
    
                <li id="name" style="float:left; padding-left: 20px; margin-bottom: 0;">
                    <a href="home.html"><img src="logo.png" style="height: 3.5vh;"></a>
                </li>
            </ul>
        </div>
    
        <div id="main">
            <div class="box">
                <div class="form">
                    <form name="newform" style="padding-top: 25%;">
                        <h2>You have Signed in!<br><br>You can now return to home page
                        </h2>
                    </form>
                </div>
            </div>
        </div>
    </body>
    
    </html>';
    $stmt->close();
    $conn->close();
}
?>