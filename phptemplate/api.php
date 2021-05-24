<?php
$username="root";
$password="password";
$server='172.17.0.3';
$db='cust_info';
$connect=mysqli_connect($server,$username, $password,$db) or die("Connection failed");
$response=array();
if($connect)
{
$sql="select * from cust_info";
$res=mysqli_query($connect,$sql);
if($res)
{
    header("Content-Type:JSON");
    $i=0;
    while($row=mysqli_fetch_assoc($res))
    {
        $response[$i]['cname']=$row['cname'];
        $response[$i]['mobile']=$row['mobile'];
        $response[$i]['orderdate']=$row['orderdate'];
        $response[$i]['rice']=$row['rice'];
        $response[$i]['snacks']=$row['snacks'];
        $response[$i]['drinks']=$row['drinks'];
        $response[$i]['krushers']=$row['krushers'];
        $response[$i]['bill_no']=$row['bill_no'];
                $i++;
    }
    echo json_encode($response,JSON_PRETTY_PRINT);
}
}
else{
    echo "Database connection failed";
}
?>