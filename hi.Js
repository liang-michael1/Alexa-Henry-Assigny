function fortune() {
    prompt("Whats in store for you?");
}
fortune();
const replies = [
    "You will have a great day ",
    "Today avoid the metro",
    "The person to your left will become you business partner",
    "Buy a lotto ticket",
    "You will find love at the local Amtrak",
    "Dont quit your day job!",
    "Do something spontanious",
    "Your day will be full of suprises"
];
const randomGenerator = Math.floor(Math.random() * replies.length) % replies.length;

if (replies != null) {
    alert(replies[randomGenerator])
} else if (replies = null) {
    console.log("have a good day")
}



