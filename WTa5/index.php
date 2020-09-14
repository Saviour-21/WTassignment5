<?php
class seller {
     private $conn = null;
         public function __construct($conn) {
        $this->conn = $conn;
    }

    public function insertdata($obj){
        $sql = "INSERT INTO seller (fname,lname,email,phno,state_from,category) VALUES('$obj->fname','$obj->lname','$obj->email','$obj->phno','$obj->state_from','$obj->category' );";
        $exe = mysqli_query($this->conn,$sql);
        if($exe == TRUE){
            $msg = ["Data inserted in database"];
        }
        else{
            $msg = ["Error ! data can't be inserted"];
        }
        return json_encode($msg);
    }

    public function display_data(){
        $sql = "SELECT * FROM seller";
        $exe = mysqli_query($this->conn,$sql);
        $arr=array();
        if(mysqli_num_rows($exe)>0){
            while($row = mysqli_fetch_assoc($exe)){
                $arr[] = $row;
            }
        }
        return json_encode($arr);
    }

   
}
?>