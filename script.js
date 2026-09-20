function updateNetwork(){
  const network = document.getElementById("network");
  if(network){
    network.innerHTML = navigator.onLine ? "🟢 Online" : "🔴 Offline Mode";
  }
}

window.addEventListener("online", updateNetwork);
window.addEventListener("offline", updateNetwork);
updateNetwork();

function sosAlert(){
  if(navigator.vibrate){
    navigator.vibrate([300,150,300]);
  }
  alert("🚨 SOS Alert Activated!\nEmergency message prepared.");
}

function openChat(){
  document.getElementById("chat").style.display="block";
}

function openMap(){
  document.getElementById("map").style.display="block";
}

function backHome(){
  document.getElementById("chat").style.display="none";
  document.getElementById("map").style.display="none";
}

function sendMsg(){
  const input = document.getElementById("msg");
  const messages = document.getElementById("messages");

  if(input.value.trim() === "") return;

  messages.innerHTML += "<p>📨 " + input.value + "</p>";
  input.value = "";
}