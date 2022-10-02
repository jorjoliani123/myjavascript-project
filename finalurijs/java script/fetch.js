var urlPosts = "https://jsonplaceholder.typicode.com/posts/";
var urlId = "https://jsonplaceholder.typicode.com/posts?userId_like=5";
var lastId = 0; 


var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, true);
    xhr.responseType = "json";
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
        alert("Algo fue mal.");
      }
    };
    xhr.send();
  });
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("saveButton").addEventListener("click", save, false);
  document
    .getElementById("deleteButton")
    .addEventListener("click", deletePost, false);

  getJSON(urlId).then(
    function(data) {
      var myDiv = document.getElementById("posts");

      var selectList = document.createElement("select");
      selectList.addEventListener("change", seleccionarLista, false);

      selectList.id = "postsSelect";
      selectList.size = data.length;
      myDiv.appendChild(selectList);

      data.forEach(function(element) {
        var option = document.createElement("option");
        option.value = element.body;
        option.text = element.title;
        option.id = element.id;
        selectList.appendChild(option);
        console.log(element.title);
      });
    },
    function(status) {
      alert("Algo fue mal.");
    }
  );
});


function save() {
  var titulo = document.getElementById("title").value;
  var body = document.getElementById("body").value;

  var xhr = new XMLHttpRequest();
  xhr.open("post", urlPosts, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function() {
    var status = xhr.status;
    if (status === 201) {
      console.log("ok");
      var selectList = document.getElementById("postsSelect");
      selectList.size++;
      var option = document.createElement("option");
      option.value = body;
      option.text = titulo;
      getLastId();
      lastId++;
      option.id = lastId;
      selectList.appendChild(option);
    } else {
      alert("Algo fue mal." + status);
    }
  };

  xhr.send(JSON.stringify({ title: [titulo], body: [body] }));
}



function seleccionarLista() {
  
  alert(this.options[this.selectedIndex].value);
  
}


function deletePost() {
  var selectList = document.getElementById("postsSelect");

  var id = selectList.options[selectList.selectedIndex].id;

  var xhr = new XMLHttpRequest();
  xhr.open("delete", urlPosts + id, true);

  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      console.log("ok");
      var selectList = document.getElementById("postsSelect");
      selectList.options[selectList.selectedIndex] = null;
      selectList.size--;
    } else {
      alert("Algo fue mal." + status + " " + urlPosts + id);
    }
  };

  xhr.send();
}

function getLastId() {
  var url =
    "https://jsonplaceholder.typicode.com/posts?userId_like=5&_sort=id&_order=desc&&_limit=1";
  getJSON(url).then(
    function(data) {
      lastId = data[0].id;
    },
    function(status) {
      alert("Algo fue mal.");
    }
  );
}