function checkLogin()
    {
        if (localStorage.getItem("storeRegEmail") == localStorage.getItem("storeLogEmail") && localStorage.getItem("storeRegPasswort") == localStorage.getItem("storeLogPasswort"))
        {}
        else 
        {
            window.open("login.html");
            window.close();
        }

    }
