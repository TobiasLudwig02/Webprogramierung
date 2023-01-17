function checkLogin()
    {
        if (localStorage.getItem("storeLogEmail") == null || localStorage.getItem("storeLogPasswort") == null)
        {
            window.open("login.html");
            window.close();
        }
        else if(localStorage.getItem("storeRegEmail") == localStorage.getItem("storeLogEmail") && localStorage.getItem("storeRegPasswort") == localStorage.getItem("storeLogPasswort"))
        {
             
        }
        else 
        {
            window.open("login.html");
            window.close();
        }

    }
    