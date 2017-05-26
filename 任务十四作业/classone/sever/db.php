<?php
 $link = mysqli_connect("localhost","root","",'baidunews');
    header('X-XSS-Protection:1;mode=block');
    header('X-Frame-Options:deny');
    header('X-Content-Type-Options:nosniff');
    header('Content-Security-Policy: default-src "self"');
    header('Set-Cookie: key=value; HttpOnly');
?>