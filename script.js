let balance = 0;

function flipCoin() {
  // Assume 1 is heads, 0 is tails
  const result = Math.floor(Math.random() * 2);
  if (result === 1) {
    balance += 1;
    alert("Congratulations! It's heads. You won 1 Coin.");
  } else {
    balance -= 1;
    alert("Tough luck! It's tails. You lost 1 Coin.");
  }
  updateBalance();
}

function updateBalance() {
  document.getElementById("balance").innerText = balance;
}
