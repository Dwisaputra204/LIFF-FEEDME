const data = {
    food : [
        {
            nama : "Soto Ayam",
            harga : 9000
        },
        {
            nama : "Bakso",
            harga : 5000
        },
    ]
}

$(".food").append("<h5>" + data.food[0].nama +"</h5>")