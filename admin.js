document.getElementById('options').children[0].onclick= function() {
    document.getElementById('cars').style.display="block";
    document.getElementById('orders').style.display="none";
}
document.getElementById('options').children[1].onclick= function() {
    document.getElementById('cars').style.display="none";
    document.getElementById('orders').style.display="block";
}
