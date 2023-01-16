function checkLogin()
    {
        if (localStorage.getItem("storeEmail") !== null && localStorage.getItem("storePassword") !== null)
        {}
        else 
        {
            window.open("login.html");
            window.close();
        }

    }
