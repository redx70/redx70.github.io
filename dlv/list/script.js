document.getElementById("e").innerHTML = "Requesting data from my slow ass backend API...";

var showVictors = false;

function showAllStats() {
if (document.getElementById("showallstats").innerHTML.includes("Demon Stats")) {
  for (let i in document.getElementsByTagName("*")) {
    if (document.getElementsByTagName("*")[i].id.includes("victors")) {
      document.getElementsByTagName("*")[i].style.display = "block";
      showVictors = true;
    }
  }
}
else {
  for (let e = 0; e != parseInt(document.getElementById("usercount")).innerHTML; e++) {
    for (let i = 1; i != document.getElementById(`username${e}`).children.length; i++) {
      document.getElementById(`username${e}`).children[i].style.display = "block";
    }
  }
}
}

function hideAllStats() {
if (document.getElementById("hideallstats").innerHTML.includes("Demon Stats")) {
  for (let i in document.getElementsByTagName("*")) {
    if (document.getElementsByTagName("*")[i].id.includes("victors")) {
      document.getElementsByTagName("*")[i].style.display = "none";
      showVictors = false;
    }
  }
}
else {
  for (let e = 0; e != parseInt(document.getElementById("usercount")).innerHTML; e++) {
    for (let i = 1; i != document.getElementById(`username${e}`).children.length; i++) {
      document.getElementById(`username${e}`).children[i].style.display = "none";
    }
  }
}
}

function toggleVictors(demonName) {
  if (document.getElementById(demonName + "victors").style.display === "block") {
    for (var i in document.getElementsByTagName("*")) {
          if (document.getElementsByTagName("*")[i].id) {
            if (document.getElementsByTagName("*")[i].id.includes(demonName)) {
              document.getElementsByTagName("*")[i].style.display = "none";
            }
          }
    }
  }
  else {
    for (var i in document.getElementsByTagName("*")) {
          if (document.getElementsByTagName("*")[i].id) {
            if (document.getElementsByTagName("*")[i].id.includes(demonName)) {
              document.getElementsByTagName("*")[i].style.display = "block";
            }
          }
    }
  }
}

fetch("https://user5e8e13639aafd2a.app.vtxhub.com/dlvlist/").then((Response) => {
        return Response.json()
    }).then((data) => {
        let formattedList = "";
        for (let i in data["main"]) {
          var formattedVictors = "";
          for (let e in Object.keys(data["victors"][data["main"][i]])) {
            formattedVictors += `<div style="color:white" id="${data["main"][i].split(" ").join("")}victors${Object.keys(data["victors"][data["main"][i]]).length}">${Object.keys(data["victors"][data["main"][i]])[e]}</div>`;
          }
          if (formattedVictors === "") {
            formattedVictors = `<div style="color:white" id="${data["main"][i].split(" ").join("")}victors${Object.keys(data["victors"][data["main"][i]]).length}">No Victors</div>`;
          }
          console.log(i);
          let gdStats = {"publisher": data["level_stats"][data["main"][i]]["publisher"], "length": data["level_stats"][data["main"][i]]["level_length"], "objectCount": data["level_stats"][data["main"][i]]["object_count"], "songName": data["level_stats"][data["main"][i]]["song_name"], "songId": data["level_stats"][data["main"][i]]["song_id"], "songAuthor": data["level_stats"][data["main"][i]]["song_author"], "levelId": data["level_stats"][data["main"][i]]["level_id"], "copyPassword": data["level_stats"][data["main"][i]]["copy_password"]};
          let formattedGdStats = `<div style="color: white; display: block;" id="${data["main"][i].replace(" ", "")}victorsgdstatslevelid1">Level ID: ${gdStats.levelId}</div><div style="color: white; display: block;" id="${data["main"][i].replace(" ", "")}victorsgdstatspublisher1">Publisher: ${gdStats.publisher}</div><div style="color: white; display: block;" id="${data["main"][i].replace(" ", "")}victorsgdstatslength1">Level Length: ${gdStats.length}</div><div style="color: white; display: block;" id="${data["main"][i].replace(" ", "")}victorsgdstatssong1">Song: ${gdStats.songName} ${gdStats.songId} By ${gdStats.songAuthor}</div><div style="color: white; display: block;" id="${data["main"][i].replace(" ", "")}victorsgdstatsobjectcount1">Object Count: ${gdStats.objectCount}</div><div style="color: white; display: block;" id="${data["main"][i].replace(" ", "")}victorsgdstatsgameversion1">Copy Password: ${gdStats.copyPassword}</div>`;
          formattedList += `<h2 class="whitetext" id="demon${i}" onclick=toggleVictors("${data["main"][i].split(" ").join("")}")>${parseInt(i) + 1}. ${data["og_case"][data["main"][i]]}</h2><h3 style="color:gold" id="${data["main"][i].split(" ").join("")}victors">VICTORS:</h3>${formattedVictors}<h3 style="color:gold" id="${data["main"][i].split(" ").join("")}victorsgdstats">LEVEL STATS:</h3><div style="color:white" id=${data["main"][i].split(" ").join("")}victorsgdstats${Object.keys(data["victors"][data["main"][i]]).length}>${formattedGdStats}</div>`;
        }
        document.getElementById("demonlisttext").innerHTML = "DEMON LIST:";
        document.getElementById("real").innerHTML = formattedList;
        for (let i in data["main"]) {
          document.getElementById(`demon${i}`).style.color = data["colors"][data["main"][i]];
        }
        for (let i in document.getElementsByTagName("*")) {
          if (document.getElementsByTagName("*")[i].id) {
            if (document.getElementsByTagName("*")[i].id.includes("victors")) {
              document.getElementsByTagName("*")[i].style.display = "none";
            }
          }
        }
        document.getElementById("e").style.display = "none";
        document.getElementById("userstatstext2").style.display = "block";
        document.getElementById("hideallstats").style.display = "block";
        document.getElementById("showallstats").style.display = "block";
});
