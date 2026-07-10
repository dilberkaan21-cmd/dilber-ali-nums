export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dilber Ali Nums</title>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#0f172a;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.card{
width:95%;
max-width:380px;
background:#1e293b;
padding:25px;
border-radius:15px;
box-shadow:0 0 20px rgba(0,0,0,.4);
}

h2{
text-align:center;
color:#fff;
margin-bottom:20px;
}

input{
width:100%;
padding:14px;
margin:10px 0;
border:none;
border-radius:8px;
background:#334155;
color:#fff;
font-size:16px;
}

button{
width:100%;
padding:14px;
margin-top:15px;
background:#2563eb;
color:#fff;
border:none;
border-radius:8px;
font-size:18px;
cursor:pointer;
}

p{
text-align:center;
margin-top:15px;
color:#cbd5e1;
}
</style>
</head>

<body>
<div class="card">
<h2>Dilber Ali Nums</h2>
<input type="text" placeholder="Username">
<input type="password" placeholder="Password">
<button>LOGIN</button>
<p>Powered by Dilber Ali</p>
</div>
</body>
</html>`, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};
